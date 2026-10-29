// Renders the HTML sources in this folder to PNGs in docs/images/.
// Usage: npx playwright install chromium && node docs/images/src/render.js
const path = require('path');
const { chromium } = require('playwright');

const src = __dirname;
const out = path.join(__dirname, '..');
const jobs = [
  { file: 'cover.html', out: 'cover.png', w: 1280, h: 640 },
  { file: 'cover-linkedin.html', out: 'cover-linkedin.png', w: 1200, h: 627 },
  ...[1, 2, 3, 4].map(n => ({ file: `gallery.html?n=${n}`, out: `gallery-${n}.png`, w: 1600, h: 1000 })),
];

(async () => {
  const browser = await chromium.launch();
  for (const job of jobs) {
    const page = await browser.newPage({ viewport: { width: job.w, height: job.h }, deviceScaleFactor: 2 });
    await page.goto('file://' + path.join(src, job.file));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(out, job.out) });
    await page.close();
    console.log('rendered', job.out);
  }
  await browser.close();
})();
