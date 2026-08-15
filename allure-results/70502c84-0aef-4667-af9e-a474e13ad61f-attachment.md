# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Banners.spec.js >> This test creates a new banner
- Location: tests\Listing\Marketing\Banners.spec.js:4:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter banner title' })

```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class Helpers {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |     }
  7  | 
  8  | async uploadAttachment(page, locator){
  9  |     await locator.setInputFiles('pages/media/image.png');
  10 |     console.log('Attachment Uploaded Successfully');
  11 | }
  12 | 
  13 | /** Random future date as MM/DD/YYYY (matches MUI date placeholders). */
  14 | randomCalendarDate(daysAheadMin = 1, daysAheadMax = 365) {
  15 |     const daysAhead = Math.floor(Math.random() * (daysAheadMax - daysAheadMin + 1)) + daysAheadMin;
  16 |     const date = new Date();
  17 |     date.setDate(date.getDate() + daysAhead);
  18 |     const mm = String(date.getMonth() + 1).padStart(2, '0');
  19 |     const dd = String(date.getDate()).padStart(2, '0');
  20 |     const yyyy = date.getFullYear();
  21 |     return `${mm}/${dd}/${yyyy}`;
  22 | }
  23 | 
  24 | /** Fill MUI DateField Month/Day/Year spinbuttons with an MM/DD/YYYY string. */
  25 | async fillMuiCalendarDate(monthSpinbutton, dateStr) {
  26 |     const [mm, dd, yyyy] = dateStr.split('/');
  27 |     await monthSpinbutton.click();
  28 |     // MUI auto-advances sections as digits are typed — do not use fill()
  29 |     await this.page.keyboard.type(`${mm}${dd}${yyyy}`, { delay: 40 });
  30 | }
  31 | 
  32 | async randomStringgenerator(page, locator){
  33 |     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  34 |     let result = '';
  35 |     for (let i = 0; i < 9; i++) {
  36 |         result += characters.charAt(Math.floor(Math.random() * characters.length));
  37 |     }
> 38 |     await locator.fill(result);
     |                   ^ Error: locator.fill: Test ended.
  39 | }
  40 | 
  41 | async randomIntgenerator(page, locator){
  42 |     // Keep amounts in a realistic range for coin top-ups
  43 |     const result = Math.floor(Math.random() * 99999) + 1;
  44 |     await locator.fill(result.toString());
  45 | }
  46 | 
  47 | async selectfromDropdown(page, locator, value) {
  48 |     await locator.click();
  49 |     const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  50 |     const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).first();
  51 |     try {
  52 |         await option.click({ timeout: 5000 });
  53 |     } catch {
  54 |         // Custom selects without role="option": filter by typing, then confirm (avoid ArrowDown — it can skip the only match)
  55 |         await page.keyboard.type(value, { delay: 40 });
  56 |         await page.keyboard.press('Enter');
  57 |     }
  58 | }
  59 | 
  60 | async mandatoryFieldValidation(page, btn, locator){
  61 |     await btn.click();
  62 |     await expect(locator).toHaveClass(/Mui-error/);
  63 | }
  64 | }
```