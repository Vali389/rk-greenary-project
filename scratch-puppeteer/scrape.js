const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.archistrux.com/', { waitUntil: 'networkidle2' });
  
  const content = await page.evaluate(() => {
    return document.body.innerHTML;
  });
  
  require('fs').writeFileSync('archistrux-dom.html', content);
  await browser.close();
})();
