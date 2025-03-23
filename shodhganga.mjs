import puppeteer from "puppeteer-core";

const browser=await puppeteer.launch({executablePath:"/usr/bin/google-chrome",headless:true});

let page=await browser.newPage();

await page.goto("https://users.eaarjav.com");
await page.setViewport({width: 1080, height: 1024});

// let alertInfoText=await page.locator(".alert-info");

// console.log(alertInfoText)

await page.screenshot({path:"screenshots/img1.png"});

await browser.close();