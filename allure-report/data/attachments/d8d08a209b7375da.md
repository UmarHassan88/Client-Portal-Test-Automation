# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Ads\ManageAds.spec.js >> This test automates and manages the Ads section
- Location: tests\Listing\Ads\ManageAds.spec.js:4:5

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: getByText('Platform *Please Select')
Expected pattern: /Mui-error/
Received string:  "MuiFormControl-root mui-6ekz1z"
Timeout: 5000ms

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for getByText('Platform *Please Select')
    13 × locator resolved to <div class="MuiFormControl-root mui-6ekz1z">…</div>
       - unexpected value "MuiFormControl-root mui-6ekz1z"

```

```yaml
- text: Platform
- combobox "Select platform"
- button "Open"
- paragraph: Please Select platform
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
  9  |     await locator.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
  10 | }
  11 | 
  12 | /** Random future date as MM/DD/YYYY (matches MUI date placeholders). */
  13 | randomCalendarDate(daysAheadMin = 1, daysAheadMax = 365) {
  14 |     const daysAhead = Math.floor(Math.random() * (daysAheadMax - daysAheadMin + 1)) + daysAheadMin;
  15 |     const date = new Date();
  16 |     date.setDate(date.getDate() + daysAhead);
  17 |     const mm = String(date.getMonth() + 1).padStart(2, '0');
  18 |     const dd = String(date.getDate()).padStart(2, '0');
  19 |     const yyyy = date.getFullYear();
  20 |     return `${mm}/${dd}/${yyyy}`;
  21 | }
  22 | 
  23 | /** Fill MUI DateField Month/Day/Year spinbuttons with an MM/DD/YYYY string. */
  24 | async fillMuiCalendarDate(monthSpinbutton, dateStr) {
  25 |     const [mm, dd, yyyy] = dateStr.split('/');
  26 |     await monthSpinbutton.click();
  27 |     // MUI auto-advances sections as digits are typed — do not use fill()
  28 |     await this.page.keyboard.type(`${mm}${dd}${yyyy}`, { delay: 40 });
  29 | }
  30 | 
  31 | async randomStringgenerator(page, locator){
  32 |     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  33 |     let result = '';
  34 |     for (let i = 0; i < 9; i++) {
  35 |         result += characters.charAt(Math.floor(Math.random() * characters.length));
  36 |     }
  37 |     await locator.fill(result);
  38 | }
  39 | 
  40 | async randomIntgenerator(page, locator){
  41 |     // Keep amounts in a realistic range for coin top-ups
  42 |     const result = Math.floor(Math.random() * 99999) + 1;
  43 |     await locator.fill(result.toString());
  44 | }
  45 | 
  46 | async selectfromDropdown(page, locator, value) {
  47 |     await locator.click();
  48 |     const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  49 |     const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).first();
  50 |     try {
  51 |         await option.click({ timeout: 5000 });
  52 |     } catch {
  53 |         // Custom selects without role="option": filter by typing, then confirm (avoid ArrowDown — it can skip the only match)
  54 |         await page.keyboard.type(value, { delay: 40 });
  55 |         await page.keyboard.press('Enter');
  56 |     }
  57 | }
  58 | 
  59 | async mandatoryFieldValidation(page, btn, locator){
  60 |     await btn.click();
> 61 |     await expect(locator).toHaveClass(/Mui-error/);
     |                           ^ Error: expect(locator).toHaveClass(expected) failed
  62 | }
  63 | }
```