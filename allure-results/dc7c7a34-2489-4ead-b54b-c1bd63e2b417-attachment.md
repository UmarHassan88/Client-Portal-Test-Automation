# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Ads\ManageAds.spec.js >> This test automates and manages the Ads section
- Location: tests\Listing\Ads\ManageAds.spec.js:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Ad created successfully')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Ad created successfully')

```

```yaml
- alert: List international Portal | List international Portal
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
  - link "Property":
    - /url: /dashboard/listing/property
    - button "Property":
      - img
      - text: Property
  - link "Unit":
    - /url: /dashboard/listing/unit
    - button "Unit"
  - link "Services":
    - /url: /dashboard/listing/services
    - button "Services":
      - img
      - text: Services
  - link "Ads":
    - /url: /dashboard/listing/ads
    - button "Ads"
  - link "Marketing":
    - /url: /dashboard/listing/marketing/notifications
    - button "Marketing"
  - link "Listing Requests":
    - /url: /dashboard/listing/requests
    - button "Listing Requests":
      - img
      - text: Listing Requests
  - link "Api Keys & Webhooks":
    - /url: /dashboard/listing/apikeys
    - button "Api Keys & Webhooks":
      - img
      - text: Api Keys & Webhooks
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
- separator
- navigation:
  - button "System Health":
    - img
    - text: System Health
- separator
- button "aidadmin admin@aqaryinvestment.com":
  - img
  - text: aidadmin admin@aqaryinvestment.com
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
        - paragraph: Manage Ads
  - heading "Manage Ads" [level=3]
  - paragraph: Ads list
  - button "Create Ad":
    - img
    - text: Create Ad
  - textbox "Search"
  - button "Export":
    - img
    - text: Export
  - table:
    - rowgroup:
      - row "Ad Title Column Actions Platform Column Actions Language Column Actions Direction Column Actions Design Column Actions Redirect Link Column Actions Show Ad Column Actions Date & Time Column Actions Actions":
        - columnheader "Ad Title Column Actions":
          - text: Ad Title
          - button "Column Actions"
        - columnheader "Platform Column Actions":
          - text: Platform
          - button "Column Actions"
        - columnheader "Language Column Actions":
          - text: Language
          - button "Column Actions"
        - columnheader "Direction Column Actions":
          - text: Direction
          - button "Column Actions"
        - columnheader "Design Column Actions":
          - text: Design
          - button "Column Actions"
        - columnheader "Redirect Link Column Actions":
          - text: Redirect Link
          - button "Column Actions"
        - columnheader "Show Ad Column Actions":
          - text: Show Ad
          - button "Column Actions"
        - columnheader "Date & Time Column Actions":
          - text: Date & Time
          - button "Column Actions"
        - columnheader "Actions"
    - rowgroup:
      - 'row "cultivate extensible experiences 1785751483839 website en vertical cultivate extensible experiences 1785751483839 View Link Created: Aug 03, 2026 - 02:08 PM Updated: Aug 03, 2026 - 02:08 PM Edit Delete"':
        - cell "cultivate extensible experiences 1785751483839"
        - cell "website"
        - cell "en"
        - cell "vertical"
        - cell "cultivate extensible experiences 1785751483839 View":
          - img "cultivate extensible experiences 1785751483839"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: https://proud-devil.com/
        - cell:
          - switch [checked]
        - 'cell "Created: Aug 03, 2026 - 02:08 PM Updated: Aug 03, 2026 - 02:08 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 03, 2026 - 02:08 PM
          - paragraph: "Updated:"
          - paragraph: Aug 03, 2026 - 02:08 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "HyAgV2Z4f website en horizontal HyAgV2Z4f View _ Created: Aug 06, 2026 - 04:49 PM Updated: Aug 06, 2026 - 04:49 PM Edit Delete"':
        - cell "HyAgV2Z4f"
        - cell "website"
        - cell "en"
        - cell "horizontal"
        - cell "HyAgV2Z4f View":
          - img "HyAgV2Z4f"
          - button "View":
            - img
        - cell "_"
        - cell:
          - switch
        - 'cell "Created: Aug 06, 2026 - 04:49 PM Updated: Aug 06, 2026 - 04:49 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 06, 2026 - 04:49 PM
          - paragraph: "Updated:"
          - paragraph: Aug 06, 2026 - 04:49 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "iLZHulJuD website en horizontal iLZHulJuD View _ Created: Aug 06, 2026 - 04:49 PM Updated: Aug 06, 2026 - 04:49 PM Edit Delete"':
        - cell "iLZHulJuD"
        - cell "website"
        - cell "en"
        - cell "horizontal"
        - cell "iLZHulJuD View":
          - img "iLZHulJuD"
          - button "View":
            - img
        - cell "_"
        - cell:
          - switch
        - 'cell "Created: Aug 06, 2026 - 04:49 PM Updated: Aug 06, 2026 - 04:49 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 06, 2026 - 04:49 PM
          - paragraph: "Updated:"
          - paragraph: Aug 06, 2026 - 04:49 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "dGPOmIrfN website en horizontal dGPOmIrfN View _ Created: Aug 06, 2026 - 04:50 PM Updated: Aug 06, 2026 - 04:50 PM Edit Delete"':
        - cell "dGPOmIrfN"
        - cell "website"
        - cell "en"
        - cell "horizontal"
        - cell "dGPOmIrfN View":
          - img "dGPOmIrfN"
          - button "View":
            - img
        - cell "_"
        - cell:
          - switch
        - 'cell "Created: Aug 06, 2026 - 04:50 PM Updated: Aug 06, 2026 - 04:50 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 06, 2026 - 04:50 PM
          - paragraph: "Updated:"
          - paragraph: Aug 06, 2026 - 04:50 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "GTYGTYGTYGTYGTY mobile ar vertical GTYGTYGTYGTYGTY View Link Created: Jun 04, 2026 - 01:56 PM Updated: Jul 02, 2026 - 02:07 PM Edit Delete"':
        - cell "GTYGTYGTYGTYGTY"
        - cell "mobile"
        - cell "ar"
        - cell "vertical"
        - cell "GTYGTYGTYGTYGTY View":
          - img "GTYGTYGTYGTYGTY"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: " https://aqaryaid.com/ar/listing/sale/listingProject/5555"
        - cell:
          - switch [checked]
        - 'cell "Created: Jun 04, 2026 - 01:56 PM Updated: Jul 02, 2026 - 02:07 PM"':
          - paragraph: "Created:"
          - paragraph: Jun 04, 2026 - 01:56 PM
          - paragraph: "Updated:"
          - paragraph: Jul 02, 2026 - 02:07 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "Ad 1785749819750 website en vertical Ad 1785749819750 View Link Created: Aug 03, 2026 - 01:40 PM Updated: Aug 03, 2026 - 01:40 PM Edit Delete"':
        - cell "Ad 1785749819750"
        - cell "website"
        - cell "en"
        - cell "vertical"
        - cell "Ad 1785749819750 View":
          - img "Ad 1785749819750"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: https://example.com/updated
        - cell:
          - switch
        - 'cell "Created: Aug 03, 2026 - 01:40 PM Updated: Aug 03, 2026 - 01:40 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 03, 2026 - 01:40 PM
          - paragraph: "Updated:"
          - paragraph: Aug 03, 2026 - 01:40 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "collaborate intuitive paradigms 1785749856386 website ar horizontal collaborate intuitive paradigms 1785749856386 View Link Created: Aug 03, 2026 - 01:41 PM Updated: Aug 03, 2026 - 01:41 PM Edit Delete"':
        - cell "collaborate intuitive paradigms 1785749856386"
        - cell "website"
        - cell "ar"
        - cell "horizontal"
        - cell "collaborate intuitive paradigms 1785749856386 View":
          - img "collaborate intuitive paradigms 1785749856386"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: https://infamous-summary.com/
        - cell:
          - switch
        - 'cell "Created: Aug 03, 2026 - 01:41 PM Updated: Aug 03, 2026 - 01:41 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 03, 2026 - 01:41 PM
          - paragraph: "Updated:"
          - paragraph: Aug 03, 2026 - 01:41 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "redefine best-of-breed functionalities 1785751348013 mobile ar vertical redefine best-of-breed functionalities 1785751348013 View Link Created: Aug 03, 2026 - 02:06 PM Updated: Aug 03, 2026 - 02:06 PM Edit Delete"':
        - cell "redefine best-of-breed functionalities 1785751348013"
        - cell "mobile"
        - cell "ar"
        - cell "vertical"
        - cell "redefine best-of-breed functionalities 1785751348013 View":
          - img "redefine best-of-breed functionalities 1785751348013"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: https://poor-gallery.com
        - cell:
          - switch [checked]
        - 'cell "Created: Aug 03, 2026 - 02:06 PM Updated: Aug 03, 2026 - 02:06 PM"':
          - paragraph: "Created:"
          - paragraph: Aug 03, 2026 - 02:06 PM
          - paragraph: "Updated:"
          - paragraph: Aug 03, 2026 - 02:06 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "tttttt website en vertical tttttt View _ Created: Jun 04, 2026 - 01:51 PM Updated: Jun 04, 2026 - 01:51 PM Edit Delete"':
        - cell "tttttt"
        - cell "website"
        - cell "en"
        - cell "vertical"
        - cell "tttttt View":
          - img "tttttt"
          - button "View":
            - img
        - cell "_"
        - cell:
          - switch
        - 'cell "Created: Jun 04, 2026 - 01:51 PM Updated: Jun 04, 2026 - 01:51 PM"':
          - paragraph: "Created:"
          - paragraph: Jun 04, 2026 - 01:51 PM
          - paragraph: "Updated:"
          - paragraph: Jun 04, 2026 - 01:51 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
      - 'row "GTYGTYGTYGTYGTY mobile ar vertical GTYGTYGTYGTYGTY View Link Created: Jun 05, 2026 - 05:12 PM Updated: Jun 05, 2026 - 05:12 PM Edit Delete"':
        - cell "GTYGTYGTYGTYGTY"
        - cell "mobile"
        - cell "ar"
        - cell "vertical"
        - cell "GTYGTYGTYGTYGTY View":
          - img "GTYGTYGTYGTYGTY"
          - button "View":
            - img
        - cell "Link":
          - link "Link":
            - /url: " https://aqaryaid.com/ar/listing/sale/listingProject/5555"
        - cell:
          - switch [checked]
        - 'cell "Created: Jun 05, 2026 - 05:12 PM Updated: Jun 05, 2026 - 05:12 PM"':
          - paragraph: "Created:"
          - paragraph: Jun 05, 2026 - 05:12 PM
          - paragraph: "Updated:"
          - paragraph: Jun 05, 2026 - 05:12 PM
        - cell "Edit Delete":
          - button:
            - img
          - button:
            - img
  - text: Rows per page
  - combobox "Rows per page": "10"
  - text: 1-10 of 98
  - button "Go to first page" [disabled]
  - button "Go to previous page" [disabled]
  - button "Go to next page"
  - button "Go to last page"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { Helpers } from "./ReusableFunctions/helpers";
  3  | import { Listing } from './Listing';
  4  | 
  5  | export class Ads extends Helpers {
  6  |     constructor(page) {
  7  |         super(page);
  8  |         this.page = page;
  9  |         this.createAds = page.getByRole('button', { name: 'Create Ad' });
  10 |         this.submitBtn = page.getByRole('button', { name: 'submit' });
  11 |         // Mui-error is on the input wrapper, not the label/helper text
  12 |         this.mandatoryTitle = page
  13 |             .locator('.MuiFormControl-root')
  14 |             .filter({ has: page.getByRole('textbox', { name: /Ad Title/i }) })
  15 |             .locator('.MuiInputBase-root');
  16 |         this.mandatoryPlatform = page.locator('.MuiFormControl-root')
  17 |         .filter({ has: page.getByRole('textbox', { name: /Platform/i }) })
  18 |         .locator('.MuiInputBase-root');
  19 |         this.adTitle = page.getByRole('textbox', { name: 'Enter ad title' });
  20 |         this.platform = page.getByRole('combobox', { name: 'Select platform' })
  21 |         this.language = page.getByRole('combobox', { name: 'Select language' })   
  22 |         this.direction = page.getByRole('combobox', { name: 'Select direction' });
  23 |         this.uploadAd = page.locator('label').filter({ hasText: 'Drag & drop or click to' });
  24 |         this.showAd = page.getByRole('switch', { name: 'Show Ad' });
  25 |         this.redirectLink = page.getByRole('textbox', { name: 'Enter redirect link' });
  26 |         this.description = page.getByRole('textbox', { name: 'Enter description' });
  27 | 
  28 |     }
  29 | 
  30 |     async createAd() {
  31 |         const Listinginstance = new Listing(this.page);
  32 |         await Listinginstance.navigatetoAds();
  33 |         await expect(this.createAds).toBeVisible();
  34 |         await this.createAds.click();
  35 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.mandatoryTitle);
  36 |         await this.randomStringgenerator(this.page, this.adTitle);
  37 |         await this.selectfromDropdown(this.page, this.platform, 'Website');
  38 |         await this.selectfromDropdown(this.page, this.language, 'En');
  39 |         await this.selectfromDropdown(this.page, this.direction, 'Horizontal');
  40 |         // await this.uploadAd.click();
  41 |         await this.page.locator('input[type="file"]').setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
  42 |         await this.showAd.click();
  43 |         await this.randomStringgenerator(this.page, this.redirectLink);
  44 |         await this.randomStringgenerator(this.page, this.description);
  45 |         await this.submitBtn.click();
> 46 |         await expect(this.page.getByText('Ad created successfully')).toBeVisible();
     |                                                                      ^ Error: expect(locator).toBeVisible() failed
  47 |         // await this.mandatoryFieldValidation(this.page, this.submitBtn, this.mandatoryPlatform); 
  48 | 
  49 | 
  50 |     }
  51 | }
  52 | 
```