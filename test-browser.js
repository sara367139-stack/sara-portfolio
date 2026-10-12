import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetUrl = 'http://localhost:5173/';
const screenshotsDir = path.resolve('screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function runTests() {
  console.log('🚀 Starting Automated Browser Verification...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleLogs = [];
  page.on('console', (msg) => {
    consoleLogs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', (err) => {
    console.error('❌ Page Error:', err.message);
  });

  // 1. Load Page
  console.log('1️⃣ Navigating to', targetUrl);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  // Check Title
  const title = await page.title();
  console.log('  Page Title:', title);
  if (!title.includes('Sara Mohamed')) {
    throw new Error(`Unexpected page title: ${title}`);
  }

  // 2. Desktop Screenshot
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-home.png'), fullPage: false });
  console.log('  Saved desktop-home.png');

  // 3. Test Theme Toggle
  console.log('2️⃣ Testing Light/Dark Mode Switch...');
  const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log('  Initial theme is dark:', initialTheme);

  // Click theme toggle button
  const themeToggle = await page.$('button[aria-label*="Mode"]');
  if (themeToggle) {
    await themeToggle.click();
    await new Promise((r) => setTimeout(r, 400));
    const toggledTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    console.log('  After toggle, theme is dark:', toggledTheme);
    if (toggledTheme === initialTheme) {
      console.warn('  ⚠️ Theme class did not invert');
    } else {
      console.log('  ✓ Theme toggle works properly');
    }
  }

  // 4. Test Category Filter in Projects Gallery
  console.log('3️⃣ Testing Project Filter Tabs...');
  const filterTabs = await page.$$('button[role="tab"]');
  console.log(`  Found ${filterTabs.length} category filter buttons`);
  for (const tab of filterTabs) {
    const text = await page.evaluate((el) => el.textContent?.trim(), tab);
    await tab.click();
    await new Promise((r) => setTimeout(r, 200));
    const cardCount = await page.evaluate(() => document.querySelectorAll('#projects .group').length);
    console.log(`  Filtered by [${text}]: ${cardCount} cards rendered`);
  }

  // Reset filter back to 'All'
  if (filterTabs[0]) {
    await filterTabs[0].click();
    await new Promise((r) => setTimeout(r, 200));
  }

  // 5. Test Project Case Study Modal (LogiTrack)
  console.log('4️⃣ Testing Project Modal (LogiTrack)...');
  const viewProjectBtns = await page.$$('button');
  let clicked = false;
  for (const btn of viewProjectBtns) {
    const text = await page.evaluate((el) => el.textContent?.trim(), btn);
    if (text === 'View Project') {
      await btn.click();
      clicked = true;
      break;
    }
  }

  if (clicked) {
    await new Promise((r) => setTimeout(r, 500));
    const isModalOpen = await page.evaluate(() => {
      const dialog = document.querySelector('dialog');
      return dialog && dialog.open;
    });
    console.log('  LogiTrack modal is open:', isModalOpen);
    await page.screenshot({ path: path.join(screenshotsDir, 'project-modal.png') });
    console.log('  Saved project-modal.png');

    // Press Escape to dismiss
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
    const isModalClosed = await page.evaluate(() => {
      const dialog = document.querySelector('dialog');
      return !dialog || !dialog.open;
    });
    console.log('  Modal dismissed on Escape:', isModalClosed);
  }

  // 6. Test Certificate Lightbox
  console.log('5️⃣ Testing Certificate Lightbox...');
  const certCards = await page.$$('#certificates .cursor-pointer');
  console.log(`  Found ${certCards.length} certificate cards`);
  if (certCards[0]) {
    await certCards[0].click();
    await new Promise((r) => setTimeout(r, 500));
    const lightboxVisible = await page.evaluate(() => {
      const lb = document.querySelector('div[role="dialog"]');
      return lb !== null;
    });
    console.log('  Certificate Lightbox is open:', lightboxVisible);
    await page.screenshot({ path: path.join(screenshotsDir, 'certificate-lightbox.png') });
    console.log('  Saved certificate-lightbox.png');

    // Test ArrowRight to cycle next
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 300));
    const certTitle2 = await page.evaluate(() => {
      const title = document.querySelector('div[role="dialog"] h3');
      return title ? title.textContent : '';
    });
    console.log('  After ArrowRight, active certificate title:', certTitle2);

    // Press Escape to close
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
    const isLightboxClosed = await page.evaluate(() => {
      return document.querySelector('div[role="dialog"]') === null;
    });
    console.log('  Lightbox closed on Escape:', isLightboxClosed);
  }

  // 7. Test Mobile Viewport & Drawer
  console.log('6️⃣ Testing Mobile Viewport (375x667 iPhone SE)...');
  await page.setViewport({ width: 375, height: 667 });
  await new Promise((r) => setTimeout(r, 400));

  // Check horizontal overflow
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('  Mobile horizontal overflow check (must be false):', hasHorizontalScroll);

  // Click hamburger button
  const hamburgerBtn = await page.$('button[aria-label="Open Navigation Menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    console.log('  Clicked mobile menu hamburger button');
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile-menu-drawer.png') });
    console.log('  Saved mobile-menu-drawer.png');
  }

  await page.screenshot({ path: path.join(screenshotsDir, 'mobile-viewport.png'), fullPage: false });
  console.log('  Saved mobile-viewport.png');

  // Check console logs
  const errors = consoleLogs.filter((l) => l.type === 'error');
  console.log('7️⃣ Console Diagnostics:');
  console.log(`  Total log messages: ${consoleLogs.length}`);
  console.log(`  Console Errors: ${errors.length}`);
  if (errors.length > 0) {
    errors.forEach((e) => console.error('   ❌', e.text));
  } else {
    console.log('  ✓ Zero console errors detected!');
  }

  await browser.close();
  console.log('🎉 Browser verification finished successfully!');
}

runTests().catch((err) => {
  console.error('Fatal test failure:', err);
  process.exit(1);
});
