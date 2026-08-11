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
          - img [ref=e7]
        - button [ref=e9] [cursor=pointer]:
          - img [ref=e10]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button [ref=e15]:
            - img [ref=e17]
            - generic [ref=e24]: Main Menu
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button [ref=e27]:
            - img [ref=e29]
            - generic [ref=e35]: Listing
        - separator [ref=e36]
        - navigation [ref=e37]:
          - button [ref=e38]:
            - img [ref=e40]
            - generic [ref=e45]: Area
        - separator [ref=e46]
        - navigation [ref=e47]:
          - button [ref=e48]:
            - img [ref=e50]
            - generic [ref=e55]: Blogs
        - separator [ref=e56]
        - navigation [ref=e57]:
          - button [ref=e58]:
            - img [ref=e60]
            - generic [ref=e66]: Profiles
        - separator [ref=e67]
        - navigation [ref=e68]:
          - button [ref=e69]:
            - img [ref=e71]
            - generic [ref=e79]: Admin
          - link [ref=e83] [cursor=pointer]:
            - /url: /dashboard/account/me
            - button [ref=e85]:
              - img [ref=e87]
              - generic [ref=e94]: accounts
          - link [ref=e98] [cursor=pointer]:
            - /url: /dashboard/admin/licenses
            - button [ref=e100]:
              - img [ref=e102]
              - generic [ref=e106]: License
          - link [ref=e110] [cursor=pointer]:
            - /url: /dashboard/admin/subscription
            - button [ref=e112]:
              - img [ref=e114]
              - generic [ref=e118]: Subscription
          - link [ref=e122] [cursor=pointer]:
            - /url: /dashboard/admin/coins
            - button [ref=e124]:
              - img [ref=e126]
              - generic [ref=e134]: Coins
          - link [ref=e138] [cursor=pointer]:
            - /url: /dashboard/admin/watermark/view
            - button [ref=e140]:
              - img [ref=e142]
              - generic [ref=e146]: Watermark
          - link [ref=e150] [cursor=pointer]:
            - /url: /dashboard/admin/control_panel/sections
            - button [ref=e152]:
              - img [ref=e154]
              - generic [ref=e158]: Control Panel
          - link [ref=e162] [cursor=pointer]:
            - /url: /dashboard/admin/faq
            - button [ref=e164]:
              - img [ref=e166]
              - generic [ref=e171]: FAQ
        - separator [ref=e172]
        - navigation [ref=e173]:
          - button [ref=e174]:
            - img [ref=e176]
            - generic [ref=e180]: System Health
        - separator [ref=e181]
      - button [ref=e182] [cursor=pointer]:
        - img [ref=e184]
        - generic [ref=e186]:
          - generic [ref=e187]: aidadmin
          - generic [ref=e188]: admin@aqaryinvestment.com
      - generic [ref=e189]:
        - button [ref=e190] [cursor=pointer]:
          - img [ref=e191]
        - button [ref=e193] [cursor=pointer]:
          - img [ref=e194]
        - button [ref=e197] [cursor=pointer]:
          - img [ref=e198]
        - button [ref=e203] [cursor=pointer]:
          - img [ref=e204]
    - main [ref=e206]:
      - generic [ref=e208]:
        - navigation [ref=e209]:
          - list [ref=e210]:
            - listitem [ref=e211]:
              - paragraph [ref=e212]: Aqary Coins
        - heading [level=3] [ref=e215]: Manage FAQs
      - generic [ref=e216]:
        - generic [ref=e218]:
          - img [ref=e220]
          - generic [ref=e222]:
            - paragraph [ref=e223]: Total Likes
            - paragraph [ref=e224]: "0"
        - generic [ref=e226]:
          - img [ref=e228]
          - generic [ref=e230]:
            - paragraph [ref=e231]: Total Disikes
            - paragraph [ref=e232]: "0"
        - generic [ref=e234]:
          - img [ref=e236]
          - generic [ref=e239]:
            - paragraph [ref=e240]: Total FAQS
            - paragraph [ref=e241]: "0"
      - generic [ref=e243]:
        - generic [ref=e244]:
          - paragraph [ref=e247]: FAQs
          - button [ref=e249] [cursor=pointer]:
            - img [ref=e251]
            - text: Create FAQ
        - generic [ref=e254]:
          - table [ref=e256]:
            - rowgroup [ref=e257]:
              - row [ref=e258]:
                - columnheader [ref=e259]:
                  - generic [ref=e260]:
                    - generic [ref=e262]: Questions
                    - button [ref=e264] [cursor=pointer]:
                      - img [ref=e265]
                - columnheader [ref=e267]:
                  - generic [ref=e268]:
                    - generic [ref=e270]: Modules
                    - button [ref=e272] [cursor=pointer]:
                      - img [ref=e273]
                - columnheader [ref=e275]:
                  - generic [ref=e276]:
                    - generic [ref=e278]: Country
                    - button [ref=e280] [cursor=pointer]:
                      - img [ref=e281]
                - columnheader [ref=e283]:
                  - generic [ref=e284]:
                    - generic [ref=e286]: Likes
                    - button [ref=e288] [cursor=pointer]:
                      - img [ref=e289]
                - columnheader [ref=e291]:
                  - generic [ref=e292]:
                    - generic [ref=e294]: Dislikes
                    - button [ref=e296] [cursor=pointer]:
                      - img [ref=e297]
                - columnheader [ref=e299]:
                  - generic [ref=e300]:
                    - generic [ref=e302]: Enable
                    - button [ref=e304] [cursor=pointer]:
                      - img [ref=e305]
                - columnheader [ref=e307]:
                  - generic [ref=e308]:
                    - generic [ref=e310]: Date & Time
                    - button [ref=e312] [cursor=pointer]:
                      - img [ref=e313]
                - columnheader [ref=e315]:
                  - generic [ref=e319]: Actions
            - rowgroup [ref=e320]:
              - row [ref=e321]:
                - cell [ref=e322]:
                  - paragraph [ref=e323]: No records to display
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]: Rows per page
              - generic [ref=e330]:
                - combobox [ref=e331] [cursor=pointer]: "10"
                - textbox: "10"
                - img
            - generic [ref=e332]: 0-0 of 0
            - generic [ref=e333]:
              - generic [ref=e334]:
                - button [disabled]:
                  - img
              - generic [ref=e335]:
                - button [disabled]:
                  - img
  - dialog [active] [ref=e337]:
    - generic [ref=e338]:
      - paragraph [ref=e339]: Create FAQ
      - button [ref=e340] [cursor=pointer]:
        - img [ref=e341]
    - generic [ref=e344]:
      - generic [ref=e345]:
        - generic [ref=e347]:
          - generic [ref=e348]:
            - text: Question EN
            - generic [ref=e349]: "*"
          - generic [ref=e351]:
            - textbox "Add the Question" [ref=e352]
            - group
          - paragraph [ref=e353]: Question is requird.
        - generic [ref=e355]:
          - generic [ref=e356]: Question AR
          - generic [ref=e358]:
            - textbox "Add the Question" [ref=e359]
            - group
          - paragraph [ref=e360]: Add the Question
        - generic [ref=e362]:
          - generic [ref=e363]:
            - text: Answer EN
            - generic [ref=e364]: "*"
          - generic [ref=e366]:
            - textbox "Add the answer" [ref=e367]
            - group
          - paragraph [ref=e368]: Answer is requird.
        - generic [ref=e370]:
          - generic [ref=e371]: Answer AR
          - generic [ref=e373]:
            - textbox "Write here..." [ref=e374]
            - group
          - paragraph [ref=e375]: Write answer in arabic here
        - generic [ref=e377]:
          - generic [ref=e378]:
            - text: Modules
            - generic [ref=e379]: "*"
          - generic [ref=e382]:
            - combobox "Select Modules" [ref=e383]
            - button "Open" [ref=e385] [cursor=pointer]:
              - img [ref=e386]
            - group
          - paragraph [ref=e388]: Section name is required
        - generic [ref=e390]:
          - generic [ref=e391]:
            - text: Country
            - generic [ref=e392]: "*"
          - generic [ref=e395]:
            - combobox "Select Country" [ref=e396]
            - button "Open" [ref=e398] [cursor=pointer]:
              - img [ref=e399]
            - group
          - paragraph [ref=e401]: Country is required
        - generic [ref=e403]:
          - generic [ref=e404]: Select Tags
          - generic [ref=e407]:
            - combobox "Type and click to add tag" [ref=e408]
            - group
          - paragraph [ref=e409]: Add tags
      - generic [ref=e410]:
        - button "clear" [ref=e411] [cursor=pointer]
        - button "submit" [ref=e412] [cursor=pointer]: submit
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
  9  |     await locator.setInputFiles('pages/media/Image.png');
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
  38 |     await locator.fill(result);
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
> 62 |     await expect(locator).toHaveClass(/Mui-error/);
     |                           ^ Error: expect(locator).toHaveClass(expected) failed
  63 | }
  64 | }
```