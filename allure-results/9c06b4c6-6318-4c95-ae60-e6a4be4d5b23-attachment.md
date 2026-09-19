# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Country' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Country' })

```

```yaml
- alert
- link "List international logo":
  - /url: /dashboard/account/me
  - img "List international logo"
- button "open drawer"
- paragraph: Management Platform
- navigation:
  - button "Main Menu":
    - img
    - text: Main Menu
- separator
- navigation:
  - button "Listing":
    - img
    - text: Listing
- separator
- navigation:
  - button "Area":
    - img
    - text: Area
- separator
- navigation:
  - button "Blogs":
    - img
    - text: Blogs
- separator
- navigation:
  - button "Profiles":
    - img
    - text: Profiles
- separator
- navigation:
  - button "Admin":
    - img
    - text: Admin
  - link "accounts":
    - /url: /dashboard/account/me
    - button "accounts":
      - img
      - text: accounts
- separator
- navigation:
  - button "System Health":
    - img
    - text: System Health
- separator
- button "aidadmin admin@aqaryinvestment.com"
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - paragraph: Accounts
  - heading "Accounts" [level=3]
  - tablist:
    - tab "My Profile" [selected]:
      - img
      - text: My Profile
    - tab "Company Users":
      - img
      - text: Company Users
    - tab "Company Profile":
      - img
      - text: Company Profile
    - tab "Leadership":
      - img
      - text: Leadership
  - paragraph: User Information
  - button "Edit":
    - img
    - text: Edit
  - img
  - paragraph: Email
  - text: ":"
  - paragraph: admin@aqaryinvestment.com
  - img
  - paragraph: Phone Number
  - text: ":"
  - paragraph: +971 7051035914
  - img
  - paragraph: Landline
  - text: ":"
  - paragraph: +971 1234567890
  - img
  - paragraph: WhatsApp
  - text: ":"
  - paragraph: +971 2544321314314
  - paragraph: User Profile
  - button "Edit":
    - img
    - text: Edit
  - img "use cover image"
  - img "use cover image"
  - paragraph: aidadmin
  - paragraph: Password
  - button "Edit":
    - img
    - text: Edit
  - img
  - paragraph: Password
  - text: ":"
  - paragraph: "***********"
```

# Test source

```ts
  1  | import { Helpers } from "./ReusableFunctions/helpers";
  2  | import { expect } from "@playwright/test";
  3  | import {Login} from "./Login";
  4  | 
  5  | 
  6  | export class Area extends Helpers {
  7  |     constructor(page){
  8  |         super(page);
  9  |         this.page = page;
  10 |         this.areaModule = page.getByRole('button', { name: 'Area' });
  11 |         this.countryPage = page.getByRole('button', { name: 'Country' });
  12 |         this.statePage = page.getByRole('button', { name: 'State' });
  13 |         this.cityPage = page.getByRole('button', { name: 'City' });
  14 |         this.communityPage = page.getByRole('button', { name: 'Community', exact: true });
  15 |         this.subCommunityPage = page.getByRole('button', { name: 'Sub Community', exact: true });
  16 |     }
  17 |     
  18 |     async navigatetoAreaPage(){
  19 |         const loginInstance = new Login(this.page);
  20 |         await loginInstance.login('admin@aqaryinvestment.com', 'HereWeGo@2026');
  21 |         await expect(this.areaModule).toBeVisible();
  22 | 
  23 |     }
  24 |     async navigatetoCountryPage(){
  25 |         await this.navigatetoAreaPage();
> 26 |         await expect(this.countryPage).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  27 |         await this.countryPage.click();
  28 |     }
  29 |     async navigatetoStatePage(){
  30 |         await this.navigatetoAreaPage();
  31 |         await expect(this.statePage).toBeVisible();
  32 |         await this.statePage.click();
  33 |     }
  34 |     async navigatetoCityPage(){
  35 |         await this.navigatetoAreaPage();
  36 |         await expect(this.cityPage).toBeVisible();
  37 |         await this.cityPage.click();
  38 |     }
  39 | }
```