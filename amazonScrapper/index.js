const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 100, args: ['--start-fullscreen']});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080});
  await page.goto('https://amazon.in', {waitUntil: 'networkidle2'});

  await page.type('#twotabsearchtextbox', 'PS4 Games',{delay: 10});

  await page.click('#nav-search > form > div.nav-right > div > input', 'PS4 Games',{delay: 15});

  
  await page.waitForNavigation();

  await browser.close();
})();