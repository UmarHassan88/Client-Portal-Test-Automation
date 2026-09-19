# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
Error: toHaveClass can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]: Add country | List international Portal
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "List international logo" [ref=e6] [cursor=pointer]:
          - /url: /dashboard/account/me
          - img "List international logo" [ref=e7]
        - button "open drawer" [ref=e9] [cursor=pointer]:
          - img [ref=e10]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button "Main Menu" [ref=e15]:
            - img [ref=e17]
            - generic [ref=e24]: Main Menu
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button "Listing" [ref=e27]:
            - img [ref=e29]
            - generic [ref=e35]: Listing
        - separator [ref=e36]
        - navigation [ref=e37]:
          - button "Area" [ref=e38]:
            - img [ref=e40]
            - generic [ref=e45]: Area
          - link "Country" [ref=e49] [cursor=pointer]:
            - /url: /dashboard/area/country/manage
            - button "Country" [ref=e51]:
              - img [ref=e53]
              - generic [ref=e58]: Country
          - link "State" [ref=e62] [cursor=pointer]:
            - /url: /dashboard/area/state/manage
            - button "State" [ref=e64]:
              - img [ref=e66]
              - generic [ref=e71]: State
          - link "City" [ref=e75] [cursor=pointer]:
            - /url: /dashboard/area/city/manage
            - button "City" [ref=e77]:
              - img [ref=e79]
              - generic [ref=e83]: City
          - link "Community" [ref=e87] [cursor=pointer]:
            - /url: /dashboard/area/community/manage
            - button "Community" [ref=e89]:
              - img [ref=e91]
              - generic [ref=e95]: Community
          - link "Sub Community" [ref=e99] [cursor=pointer]:
            - /url: /dashboard/area/sub_community/manage
            - button "Sub Community" [ref=e101]:
              - img [ref=e103]
              - generic [ref=e107]: Sub Community
        - separator [ref=e108]
        - navigation [ref=e109]:
          - button "Blogs" [ref=e110]:
            - img [ref=e112]
            - generic [ref=e117]: Blogs
        - separator [ref=e118]
        - navigation [ref=e119]:
          - button "Profiles" [ref=e120]:
            - img [ref=e122]
            - generic [ref=e128]: Profiles
        - separator [ref=e129]
        - navigation [ref=e130]:
          - button "Admin" [ref=e131]:
            - img [ref=e133]
            - generic [ref=e141]: Admin
        - separator [ref=e142]
        - navigation [ref=e143]:
          - button "System Health" [ref=e144]:
            - img [ref=e146]
            - generic [ref=e150]: System Health
        - separator [ref=e151]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e152] [cursor=pointer]:
        - img [ref=e154]
        - generic [ref=e156]:
          - generic [ref=e157]: aidadmin
          - generic [ref=e158]: admin@aqaryinvestment.com
      - generic [ref=e159]:
        - button [ref=e160] [cursor=pointer]:
          - img [ref=e161]
        - button [ref=e163] [cursor=pointer]:
          - img [ref=e164]
        - button [ref=e167] [cursor=pointer]:
          - img [ref=e168]
        - button [ref=e173] [cursor=pointer]:
          - img [ref=e174]
    - main [ref=e176]:
      - generic [ref=e178]:
        - navigation "breadcrumb" [ref=e179]:
          - list [ref=e180]:
            - listitem [ref=e181]:
              - paragraph [ref=e182]: Manage Area
        - heading "Manage Area" [level=3] [ref=e185]
      - generic [ref=e186]:
        - generic [ref=e187]:
          - link "Add country" [ref=e188] [cursor=pointer]:
            - /url: /dashboard/area/country/add
          - link "Manage country" [ref=e189] [cursor=pointer]:
            - /url: /dashboard/area/country/manage
          - link "Manage Deleted country" [ref=e190] [cursor=pointer]:
            - /url: /dashboard/area/country/deleted
        - generic [ref=e191]:
          - paragraph [ref=e195]: Manage Area
          - generic [ref=e197]:
            - generic [ref=e198]:
              - generic [ref=e200]:
                - generic [ref=e201]:
                  - text: Country
                  - generic [ref=e202]: "*"
                - generic [ref=e205]:
                  - combobox "Select Country" [ref=e206]
                  - button "Open" [ref=e208] [cursor=pointer]:
                    - img [ref=e209]
                  - group
                - paragraph [ref=e211]: Please select country
              - generic [ref=e213]:
                - generic [ref=e214]:
                  - text: Geo Location
                  - generic [ref=e216]: Beta
                - generic [ref=e219]:
                  - combobox "Search geo locations" [ref=e220]
                  - button "Open" [ref=e222] [cursor=pointer]:
                    - img [ref=e223]
                  - group
                - paragraph [ref=e225]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e227]:
                - generic [ref=e228]:
                  - text: Upload Cover Image
                  - generic [ref=e229]: "*"
                - generic [ref=e231]:
                  - button "Choose File" [ref=e232]
                  - group
                - paragraph [ref=e233]: Please upload icon
              - generic [ref=e235]:
                - generic [ref=e236]:
                  - text: Profile Image
                  - generic [ref=e237]: "*"
                - generic [ref=e239]:
                  - button "Choose File" [ref=e240]
                  - group
                - paragraph [ref=e241]: Please upload icon
              - generic [ref=e243]:
                - generic [ref=e244]:
                  - text: Horizontal Cover Image
                  - generic [ref=e245]: "*"
                - generic [ref=e247]:
                  - button "Choose File" [ref=e248]
                  - group
                - paragraph [ref=e249]: Please upload icon
              - generic [ref=e251]:
                - generic [ref=e252]: Description
                - paragraph [ref=e253]: Enter description
              - generic [ref=e255]:
                - generic [ref=e256]: المحتوى بالعربي
                - paragraph [ref=e257]: المحتوى بالعربي
              - generic [ref=e259]:
                - generic [ref=e260]: About Market
                - generic [ref=e262]:
                  - textbox "About" [ref=e263]
                  - group
                - paragraph [ref=e264]: Enter About
              - generic [ref=e266]:
                - generic [ref=e267]: معلومات عن المنطقة
                - generic [ref=e269]:
                  - textbox "الوصف.." [ref=e270]
                  - group
                - paragraph [ref=e271]: أدخل الوصف
            - generic [ref=e273]:
              - button "clear" [ref=e274] [cursor=pointer]
              - button "submit" [ref=e275] [cursor=pointer]
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
     |                           ^ Error: toHaveClass can be only used with Locator object, was called with undefined
  63 | }
  64 | }
```