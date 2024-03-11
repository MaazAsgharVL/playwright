import { test, expect } from '@playwright/test';
import { stringify } from 'node:querystring';
import { chromium } from "playwright"

test("insta", async ()=>{
  test.setTimeout(120000);
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.instagram.com/accounts/login/")
  await page.fill("input[name='username']", 'didevac4133')
  await page.fill("input[name='password']", 'saad.shah@2024')
  await page.click('"Log in"')
  await page.getByRole('link', { name: 'Search Search' }).click();
  await page.getByPlaceholder('Search').fill('caddie10xx_');
  await page.getByRole('link', { name: 'caddie10xx_\'s profile picture caddie10xx_ Forevernell🫶🏾' }).click();
  await page.waitForTimeout(10000);

  // const username = await page.getByRole('heading').allInnerTexts();
  // const posts = await page.getByText('posts').allInnerTexts();
  // const followers = await page.getByText('followers').allInnerTexts();
  // const following = await page.getByText('following').allInnerTexts();
  // const allText = await page.innerText('.x7a106z');
  // const arrayOfLines: string[] = allText.split('\n');
  const post = await page.innerText('._ap3a');

  // console.log(username);
  // console.log(arrayOfLines);  
  // console.log(posts);
  // console.log(followers);
  // console.log(following);
  console.log(post);

  await page.close();
  await context.close();
  await browser.close();
});

test("Upload Files", async ()=>{
  const a = "../videos/a.webm"
  const b = "../videos/b.webm"
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.sendgb.com/");
  await page.setInputFiles("input[name='qqfile']", [a,b])
  await page.close();
  await context.close();
  await browser.close();
});

// await page.goto('https://letcode.in/');
// await page.goto('https://www.instagram.com/');
// await page.getByLabel('Phone number, username, or').click();
// await page.getByLabel('Phone number, username, or').fill('didevac4133');
// await page.getByLabel('Phone number, username, or').press('Tab');
// await page.getByLabel('Password').fill('saad.shah@2024');
// await page.getByRole('button', { name: 'Show' }).click();
// await page.getByRole('button', { name: 'Log in', exact: true }).click();
// await page.goto('https://www.instagram.com/challenge/AXHMPKC_fBLL0wrEhcskTH8Vpeg9O_pbnbIUKCom1djTGWdNL6RANVn6dyqKJ3GvEcfSE_U/AfxWr2AqB1dHUCqKyG9xi4IrHbrTJavtX4EdppbmS8Cw-Pew2cZhmvhaOWpYJ20AFGXBjwoiF-MVAw/?challenge_context=Af4U8HNMSBXJ1GhaFMXr8DHILLIqiJAr8jaWGfbkHO40bAz0bgjGARxCNjlGoEx91wRDsgxXMyWujN5U8BMB8lQnU-GvMFHmjzlXZS4hDoEKWyp3XI4PxYGbGNY1vQqduJIvuUpyYaN71yVgCq7tS4xOV5FsFfQqHDMtQoY-uIXccerm6XGzVXUIiNmQmGNGDsuhegFII86cbxNJgpO03DYbfUP-9f084adfsAsrCcApPToo5_P4CuGl3o794wUQjWzjWvqekCYv7wg4zbmb63YPWNHs_JnIDct268Ep90Yt1bPyVAtmhhtzoNcYbmUsrVyWCyNMjYzuJbSwmOS8HMiEX-Fo7KpCK4uecDTabanZei8qS87UtpW9vGmSJyn0FxGbHDda9Gmlv5bV91z7IJP3OXWzMWoZZTPfpNw8-ReCeEB_8cesXsJhKm2U8e6C07olw9nQSw4Xsno8zpJz_gJbz9vVk0-NlrYszTn5sN1NcFMCdHj_uNco9Q3LQ5FL6dDp_i6Yi6YlGGOOLBpB102snUYSjZgihNiqSQ0f4FCJkbY-QzHSwyQCqwkRcRYUQfej6Ox3OXmTDNWyTJUwHUCOD0MClZhUXJnRZHO74JccS8GQa7qqm34rZ6yAkifN2mDd5YiaOLMkajl6rxYNLJKLkrXywY2Oed_rG-MXHR8Kscc21TJNr5NJqpjqxX8_nJhuX_Ne8c_vIhkLGcLAempHS6lsrvvm-7btg5-Vscw4hIlWSfZXm916OuNiLL67_afF2ZfxViQm6cPE4Emj_W2HwrlJ_VUFzGji0fZxYorOQzq28U2dPrFXWS93ZrYfLHHaY1OHhq8OJzXZ0Fm3Rxq_RGpNxI4dPTrcDPUjk3b6IuEBSuplijavv_tqPSPBgk8v26jxLqFrgbSgGBvSzhkw-zBI3qTDM7pJRIin2cZut8fiIj3RDFjQidA5jl4_lHCirGoFXQr1rV0kjVFzFgou2SNe8NURu33q490xo99tDJwb5G2tvvO7XTaByhlKGbdfDY78C3LDhDLbOlgjkzc4zVMc6hnykfHRlRfbnKxE-BPJFVTMtrT-f2kGNPo-64GqbyJ_duEvSZIbFqoN5baiZSm-zmfITC4sk8ooSYqlaR5wSIKgP6e3E4kmGJRQahjhRv_1hfV4AxJX8gvyu-RC8CYLTvvVQFRQbXVNVAFLdkeSd7DMuAHsZHd374pOm_TcY4Eu0rZI9fy5DqzL0mAqJOgTsoCF5oRfeNAVnN4UTVj1LM16W0_1MS1GbQUCOFJNoUMW-K6iotz7HE96k-ed62_HRtPSnqrOEtNKp3uwSxjevt2mMbvtykIPGfIdf_F_wurDXj9kPIcmx-vEWhBbaO8r1wo098c2lrFinfjOzxK9nAM27ebCwM79H0Rcj4X5');
// await page.locator('div').filter({ hasText: /^Next$/ }).nth(1).click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="a-21cfzkoyuydm"]').getByLabel('I\'m not a robot').click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('.rc-imageselect-tile').first().click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('td:nth-child(3)').first().click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('tr:nth-child(2) > td:nth-child(2)').click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('.rc-imageselect-tile').first().click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('tr:nth-child(2) > td:nth-child(2)').click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('td:nth-child(3)').first().click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').locator('td:nth-child(3)').first().click();
// await page.frameLocator('iframe[title="Google Recaptcha v2"]').frameLocator('iframe[name="c-21cfzkoyuydm"]').getByRole('button', { name: 'Verify' }).click();
// await page.getByRole('button', { name: 'Next' }).click();
// await page.goto('https://www.instagram.com/');
// await page.getByRole('button', { name: 'Not Now' }).click();
// await page.getByRole('link', { name: 'Search Search' }).click();
// await page.getByPlaceholder('Search').fill('caddie10xx_');
// await page.getByRole('link', { name: 'caddie10xx_\'s profile picture caddie10xx_ Forevernell🫶🏾' }).click();
// await page.getByRole('link', { name: 'caddie10xx_', exact: true }).click();
// await page.getByRole('button', { name: 'Close' }).click();
// await page.getByRole('link', { name: 'following' }).click();
// await page.getByRole('button', { name: 'Close' }).click();
// await page.getByRole('link', { name: 'following' }).click();
// await page.getByRole('button', { name: 'Close' }).click();
// await page.getByText('3 posts').click();
// await page.getByText('Forevernell🫶🏾').click();
// await page.getByText('Airport').click();