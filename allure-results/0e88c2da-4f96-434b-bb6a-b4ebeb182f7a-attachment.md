# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\CompanyUsers.spec.js >> Test Automation for: Accounts -> Company Users page >> This test automates the Accounts -> Company Users page
- Location: tests\Admin\Accounts\CompanyUsers.spec.js:13:9

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - alert [ref=e2]: List international Portal | List international Portal
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /dashboard/account/me
          - img "List international logo" [ref=e7]
        - button "open drawer" [ref=e9] [cursor=pointer]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button "Main Menu" [ref=e15]
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button "Listing" [ref=e27]
        - separator [ref=e36]
        - navigation [ref=e37]:
          - button "Area" [ref=e38]
        - separator [ref=e46]
        - navigation [ref=e47]:
          - button "Blogs" [ref=e48]
        - separator [ref=e56]
        - navigation [ref=e57]:
          - button "Profiles" [ref=e58]
        - separator [ref=e67]
        - navigation [ref=e68]:
          - button "Admin" [ref=e69]
          - link [ref=e83] [cursor=pointer]:
            - /url: /dashboard/account/me
            - button "accounts" [ref=e85]
          - link [ref=e98] [cursor=pointer]:
            - /url: /dashboard/admin/licenses
            - button "License" [ref=e100]
          - link [ref=e110] [cursor=pointer]:
            - /url: /dashboard/admin/subscription
            - button "Subscription" [ref=e112]
          - link [ref=e122] [cursor=pointer]:
            - /url: /dashboard/admin/coins
            - button "Coins" [ref=e124]
          - link [ref=e138] [cursor=pointer]:
            - /url: /dashboard/admin/watermark/view
            - button "Watermark" [ref=e140]
          - link [ref=e150] [cursor=pointer]:
            - /url: /dashboard/admin/control_panel/sections
            - button "Control Panel" [ref=e152]
          - link [ref=e162] [cursor=pointer]:
            - /url: /dashboard/admin/faq
            - button "FAQ" [ref=e164]
        - separator [ref=e172]
        - navigation [ref=e173]:
          - button "System Health" [ref=e174]
        - separator [ref=e181]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e182] [cursor=pointer]:
        - generic [ref=e185]:
          - generic [ref=e186]: aidadmin
          - generic [ref=e187]: admin@aqaryinvestment.com
      - generic [ref=e188]:
        - button [ref=e189] [cursor=pointer]
        - button [ref=e192] [cursor=pointer]
        - button [ref=e196] [cursor=pointer]
        - button [ref=e202] [cursor=pointer]
    - main [ref=e205]:
      - generic [ref=e207]:
        - navigation "breadcrumb" [ref=e208]:
          - list [ref=e209]:
            - listitem [ref=e210]:
              - paragraph [ref=e211]: Accounts
        - heading "Accounts" [level=3] [ref=e214]
      - tablist [ref=e217]:
        - tab "My Profile" [ref=e218] [cursor=pointer]
        - tab "Company Users" [selected] [ref=e224] [cursor=pointer]
        - tab "Company Profile" [ref=e230] [cursor=pointer]
        - tab "Leadership" [ref=e235] [cursor=pointer]
      - generic [ref=e242]:
        - generic [ref=e247]:
          - tablist [ref=e251]:
            - tab "User Details" [selected] [ref=e252] [cursor=pointer]
            - tab "User Information" [ref=e253] [cursor=pointer]
            - tab "Manage Document" [ref=e254] [cursor=pointer]
            - tab "Social Media" [ref=e255] [cursor=pointer]
          - paragraph [ref=e258]: user details
          - generic [ref=e260]:
            - generic [ref=e262]:
              - generic [ref=e263]:
                - text: First Name
                - generic [ref=e264]: "*"
              - generic [ref=e266]:
                - textbox "Enter First Name" [ref=e267]:
                  - /placeholder: "Enter First Name "
                  - text: Faith
                - group
              - paragraph [ref=e268]: Please Enter First Name
            - generic [ref=e270]:
              - generic [ref=e271]:
                - text: Last Name
                - generic [ref=e272]: "*"
              - generic [ref=e274]:
                - textbox "Enter Last Name" [ref=e275]:
                  - /placeholder: "Enter Last Name "
                  - text: Larson
                - group
              - paragraph [ref=e276]: Please Enter Last Name
            - generic [ref=e278]:
              - generic [ref=e279]:
                - text: Username
                - generic [ref=e280]: "*"
              - generic [ref=e282]:
                - textbox "Enter Username" [ref=e283]: xxurdmmllt
                - group
              - paragraph [ref=e284]: Please Enter Username
            - generic [ref=e286]:
              - generic [ref=e287]:
                - text: Email
                - generic [ref=e288]: "*"
              - generic [ref=e290]:
                - textbox "User email" [ref=e291]: Benny3@gmail.com
                - group
              - paragraph [ref=e292]: Please enter user email
            - generic [ref=e294]:
              - generic [ref=e295]: Extension
              - generic [ref=e297]:
                - spinbutton "Enter extension" [ref=e298]: "30350"
                - group
              - paragraph [ref=e299]: Enter extension
            - generic [ref=e301]:
              - generic [ref=e302]: Landline
              - generic [ref=e304]:
                - generic [ref=e306]:
                  - combobox [ref=e307] [cursor=pointer]:
                    - img "Flag" [ref=e308]
                    - generic [ref=e309]: "+971"
                  - textbox: "971"
                - spinbutton "Enter landline" [ref=e310]: "33808"
                - group
              - paragraph [ref=e311]: Enter landline
            - generic [ref=e313]:
              - generic [ref=e314]:
                - text: Mobile
                - generic [ref=e315]: "*"
              - generic [ref=e317]:
                - generic [ref=e319]:
                  - combobox [ref=e320] [cursor=pointer]:
                    - img "Flag" [ref=e321]
                    - generic [ref=e322]: "+971"
                  - textbox: "971"
                - spinbutton "Enter Contact Phone no" [ref=e323]: "23323223"
                - group
              - paragraph [ref=e324]: Enter Contact Phone no
            - generic [ref=e326]:
              - generic [ref=e327]: Whats App
              - generic [ref=e329]:
                - generic [ref=e331]:
                  - combobox [ref=e332] [cursor=pointer]:
                    - img "Flag" [ref=e333]
                    - generic [ref=e334]: "+971"
                  - textbox: "971"
                - spinbutton "Enter Whats App" [active] [ref=e335]: "42554"
                - group
              - paragraph [ref=e336]: Enter Whats App
            - separator [ref=e338]
            - paragraph [ref=e340]: User Profile
            - generic [ref=e343]:
              - generic [ref=e345]:
                - img "use cover image" [ref=e346]
                - generic [ref=e347]:
                  - button "Change Cover" [ref=e348] [cursor=pointer]
                  - generic [ref=e354]:
                    - button "Choose File" [ref=e355]
                    - group
              - generic [ref=e357]:
                - img "use cover image" [ref=e359]
                - generic [ref=e360]:
                  - generic [ref=e361]:
                    - button "Change Photo" [ref=e362] [cursor=pointer]
                    - generic [ref=e368]:
                      - button "Choose File" [ref=e369]
                      - group
                  - paragraph [ref=e370]: JPG, PNG or JPEG (max 2MB)
        - button [ref=e373] [cursor=pointer]
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
> 9  |     await locator.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
     |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
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
  61 |     await expect(locator).toHaveClass(/Mui-error/);
  62 | }
  63 | }
```