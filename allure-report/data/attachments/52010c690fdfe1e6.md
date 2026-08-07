# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\FAQ\CreateFAQ.spec.js >> This test creates and verifies an FAQ
- Location: tests\Admin\FAQ\CreateFAQ.spec.js:4:5

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-error.MuiInputBase-fullWidth')
Expected pattern: /Mui-error/
Error: strict mode violation: locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-error.MuiInputBase-fullWidth') resolved to 2 elements:
    1) <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-error MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-jurf8b">…</div> aka locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-error.MuiInputBase-fullWidth').first()
    2) <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-error MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-jurf8b">…</div> aka locator('div:nth-child(6) > .MuiFormControl-root.mui-6ekz1z > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-error.MuiInputBase-fullWidth')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - alert [ref=e2]
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /dashboard/account/me
        - button [ref=e9] [cursor=pointer]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button [ref=e15]:
            - generic [ref=e22]: Main Menu
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button [ref=e27]:
            - generic [ref=e33]: Listing
        - separator [ref=e36]
        - navigation [ref=e37]:
          - button [ref=e38]:
            - generic [ref=e43]: Area
        - separator [ref=e46]
        - navigation [ref=e47]:
          - button [ref=e48]:
            - generic [ref=e53]: Blogs
        - separator [ref=e56]
        - navigation [ref=e57]:
          - button [ref=e58]:
            - generic [ref=e64]: Profiles
        - separator [ref=e67]
        - navigation [ref=e68]:
          - button [ref=e69]:
            - generic [ref=e77]: Admin
          - link [ref=e83] [cursor=pointer]:
            - /url: /dashboard/account/me
            - button [ref=e85]:
              - generic [ref=e92]: accounts
          - link [ref=e98] [cursor=pointer]:
            - /url: /dashboard/admin/licenses
            - button [ref=e100]:
              - generic [ref=e104]: License
          - link [ref=e110] [cursor=pointer]:
            - /url: /dashboard/admin/subscription
            - button [ref=e112]:
              - generic [ref=e116]: Subscription
          - link [ref=e122] [cursor=pointer]:
            - /url: /dashboard/admin/coins
            - button [ref=e124]:
              - generic [ref=e132]: Coins
          - link [ref=e138] [cursor=pointer]:
            - /url: /dashboard/admin/watermark/view
            - button [ref=e140]:
              - generic [ref=e144]: Watermark
          - link [ref=e150] [cursor=pointer]:
            - /url: /dashboard/admin/control_panel/sections
            - button [ref=e152]:
              - generic [ref=e158]: Control Panel
          - link [ref=e164] [cursor=pointer]:
            - /url: /dashboard/admin/faq
            - button [ref=e166]:
              - generic [ref=e172]: FAQ
        - separator [ref=e175]
        - navigation [ref=e176]:
          - button [ref=e177]:
            - generic [ref=e181]: System Health
        - separator [ref=e184]
      - button [ref=e185] [cursor=pointer]:
        - generic [ref=e188]:
          - generic [ref=e189]: aidadmin
          - generic [ref=e190]: admin@aqaryinvestment.com
      - generic [ref=e191]:
        - button [ref=e192] [cursor=pointer]
        - button [ref=e195] [cursor=pointer]
        - button [ref=e199] [cursor=pointer]
        - button [ref=e205] [cursor=pointer]
    - main [ref=e208]:
      - generic [ref=e210]:
        - navigation [ref=e211]:
          - list [ref=e212]:
            - listitem [ref=e213]:
              - paragraph [ref=e214]: Aqary Coins
        - heading [level=3] [ref=e217]: Manage FAQs
      - generic [ref=e218]:
        - generic [ref=e224]:
          - paragraph [ref=e225]: Total Likes
          - paragraph [ref=e226]: "0"
        - generic [ref=e232]:
          - paragraph [ref=e233]: Total Disikes
          - paragraph [ref=e234]: "0"
        - generic [ref=e242]:
          - paragraph [ref=e243]: Total FAQS
          - paragraph [ref=e244]: "0"
      - generic [ref=e246]:
        - generic [ref=e247]:
          - paragraph [ref=e250]: FAQs
          - button [ref=e252] [cursor=pointer]: Create FAQ
        - generic [ref=e257]:
          - table [ref=e259]:
            - rowgroup [ref=e260]:
              - row [ref=e261]:
                - columnheader [ref=e262]:
                  - generic [ref=e263]:
                    - generic [ref=e264]: Questions
                    - button [ref=e267] [cursor=pointer]
                - columnheader [ref=e270]:
                  - generic [ref=e271]:
                    - generic [ref=e272]: Modules
                    - button [ref=e275] [cursor=pointer]
                - columnheader [ref=e278]:
                  - generic [ref=e279]:
                    - generic [ref=e280]: Country
                    - button [ref=e283] [cursor=pointer]
                - columnheader [ref=e286]:
                  - generic [ref=e287]:
                    - generic [ref=e288]: Likes
                    - button [ref=e291] [cursor=pointer]
                - columnheader [ref=e294]:
                  - generic [ref=e295]:
                    - generic [ref=e296]: Dislikes
                    - button [ref=e299] [cursor=pointer]
                - columnheader [ref=e302]:
                  - generic [ref=e303]:
                    - generic [ref=e304]: Enable
                    - button [ref=e307] [cursor=pointer]
                - columnheader [ref=e310]:
                  - generic [ref=e311]:
                    - generic [ref=e312]: Date & Time
                    - button [ref=e315] [cursor=pointer]
                - columnheader [ref=e318]:
                  - generic [ref=e319]: Actions
            - rowgroup [ref=e323]:
              - row [ref=e324]:
                - cell [ref=e325]:
                  - paragraph [ref=e326]: No records to display
          - generic [ref=e330]:
            - generic [ref=e331]:
              - generic [ref=e332]: Rows per page
              - generic [ref=e333]:
                - combobox [ref=e334] [cursor=pointer]: "10"
                - textbox: "10"
            - generic [ref=e335]: 0-0 of 0
            - generic [ref=e336]:
              - generic [ref=e337]:
                - button [disabled]
              - generic [ref=e338]:
                - button [disabled]
  - dialog [ref=e340]:
    - generic [ref=e341]:
      - paragraph [ref=e342]: Create FAQ
      - button [ref=e343] [cursor=pointer]
    - generic [ref=e347]:
      - generic [ref=e348]:
        - generic [ref=e350]:
          - generic [ref=e351]:
            - text: Question EN
            - generic [ref=e352]: "*"
          - generic [ref=e354]:
            - textbox "Add the Question" [invalid] [ref=e355]
            - group
          - paragraph [ref=e356]: Question is requird.
        - generic [ref=e358]:
          - generic [ref=e359]: Question AR
          - generic [ref=e361]:
            - textbox "Add the Question" [ref=e362]
            - group
          - paragraph [ref=e363]: Add the Question
        - generic [ref=e365]:
          - generic [ref=e366]:
            - text: Answer EN
            - generic [ref=e367]: "*"
          - generic [ref=e369]:
            - textbox "Add the answer" [invalid] [ref=e370]
            - group
          - paragraph [ref=e371]: Answer is requird.
        - generic [ref=e373]:
          - generic [ref=e374]: Answer AR
          - generic [ref=e376]:
            - textbox "Write here..." [ref=e377]
            - group
          - paragraph [ref=e378]: Write answer in arabic here
        - generic [ref=e380]:
          - generic [ref=e381]:
            - text: Modules
            - generic [ref=e382]: "*"
          - generic [ref=e385]:
            - combobox "Select Modules" [invalid] [ref=e386]
            - button "Open" [ref=e388] [cursor=pointer]
            - group
          - paragraph [ref=e391]: Section name is required
        - generic [ref=e393]:
          - generic [ref=e394]:
            - text: Country
            - generic [ref=e395]: "*"
          - generic [ref=e398]:
            - combobox "Select Country" [invalid] [ref=e399]
            - button "Open" [ref=e401] [cursor=pointer]
            - group
          - paragraph [ref=e404]: Country is required
        - generic [ref=e406]:
          - generic [ref=e407]: Select Tags
          - generic [ref=e410]:
            - combobox "Type and click to add tag" [ref=e411]
            - group
          - paragraph [ref=e412]: Add tags
      - generic [ref=e413]:
        - button "clear" [ref=e414] [cursor=pointer]
        - button "submit" [active] [ref=e415] [cursor=pointer]
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