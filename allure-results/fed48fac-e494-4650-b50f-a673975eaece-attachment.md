# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Banners.spec.js >> Banners >> This test creates a new banner
- Location: tests\Listing\Marketing\Banners.spec.js:11:5

# Error details

```
ReferenceError: instance is not defined
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import { Banners } from "../../../pages/Banners";
  3  | 
  4  | test.describe('Banners', () => {
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |     var instance = new Banners(page);
  8  |     // await instance.();
  9  | });
  10 | 
  11 | test('This test creates a new banner', async ({ page }) => {
> 12 |     await instance.mandatoryFields();
     |     ^ ReferenceError: instance is not defined
  13 |     await instance.createBanner();
  14 |     await instance.verifyCreatedBanner();
  15 |     await instance.editBanner();
  16 |     await instance.verifyCreatedBanner();
  17 |     await instance.deleteBanner();
  18 | })
  19 | });
```