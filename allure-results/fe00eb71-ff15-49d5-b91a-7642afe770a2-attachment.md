# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('cell', { name: '', exact: true })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('cell', { name: '', exact: true })

```

```yaml
- alert: Manage country | List international Portal
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
  - link "Country":
    - /url: /dashboard/area/country/manage
    - button "Country":
      - img
      - text: Country
  - link "State":
    - /url: /dashboard/area/state/manage
    - button "State":
      - img
      - text: State
  - link "City":
    - /url: /dashboard/area/city/manage
    - button "City":
      - img
      - text: City
  - link "Community":
    - /url: /dashboard/area/community/manage
    - button "Community":
      - img
      - text: Community
  - link "Sub Community":
    - /url: /dashboard/area/sub_community/manage
    - button "Sub Community":
      - img
      - text: Sub Community
- separator
- navigation:
  - button "Location Guide Beta":
    - img
    - text: Location Guide Beta
- separator
- navigation:
  - button "Blogs":
    - img
    - text: Blogs
- separator
- navigation:
  - button "Admin":
    - img
    - text: Admin
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
        - paragraph: Manage Area
  - heading "Manage Area" [level=3]
  - link "Add country":
    - /url: /dashboard/area/country/add
  - link "Manage country":
    - /url: /dashboard/area/country/manage
  - link "Manage Deleted country":
    - /url: /dashboard/area/country/deleted
  - paragraph: Manage Area
  - table:
    - rowgroup:
      - row "SN Country Column Actions Media Column Actions profile Image Column Actions Horizontal Cover Image Column Actions About Market Column Actions Actions":
        - columnheader "SN"
        - columnheader "Country Column Actions":
          - text: Country
          - button "Column Actions"
        - columnheader "Media Column Actions":
          - text: Media
          - button "Column Actions"
        - columnheader "profile Image Column Actions":
          - text: profile Image
          - button "Column Actions"
        - columnheader "Horizontal Cover Image Column Actions":
          - text: Horizontal Cover Image
          - button "Column Actions"
        - columnheader "About Market Column Actions":
          - text: About Market
          - button "Column Actions"
        - columnheader "Actions"
    - rowgroup:
      - row "1 cccaswerw cccaswerw View cccaswerw View cccaswerw View YLskOjlor View Edit Delete":
        - cell "1"
        - cell "cccaswerw"
        - cell "cccaswerw View":
          - img "cccaswerw"
          - button "View":
            - img
        - cell "cccaswerw View":
          - img "cccaswerw"
          - button "View":
            - img
        - cell "cccaswerw View":
          - img "cccaswerw"
          - button "View":
            - img
        - cell "YLskOjlor"
        - cell "View Edit Delete":
          - button:
            - img
          - button:
            - link:
              - /url: manage/1834/edit
            - img
          - button:
            - img
          - button:
            - img
      - row "2 ccx ccx View ccx View ccx View LF4bKL9Qg View Edit Delete":
        - cell "2"
        - cell "ccx"
        - cell "ccx View":
          - img "ccx"
          - button "View":
            - img
        - cell "ccx View":
          - img "ccx"
          - button "View":
            - img
        - cell "ccx View":
          - img "ccx"
          - button "View":
            - img
        - cell "LF4bKL9Qg"
        - cell "View Edit Delete":
          - button:
            - img
          - button:
            - link:
              - /url: manage/1833/edit
            - img
          - button:
            - img
          - button:
            - img
      - row "3 sadfkls sadfkls View sadfkls View sadfkls View QuL1dHSJE View Edit Delete":
        - cell "3"
        - cell "sadfkls"
        - cell "sadfkls View":
          - img "sadfkls"
          - button "View":
            - img
        - cell "sadfkls View":
          - img "sadfkls"
          - button "View":
            - img
        - cell "sadfkls View":
          - img "sadfkls"
          - button "View":
            - img
        - cell "QuL1dHSJE"
        - cell "View Edit Delete":
          - button:
            - img
          - button:
            - link:
              - /url: manage/1832/edit
            - img
          - button:
            - img
          - button:
            - img
      - row "4 Martin Benjamin Martin Benjamin View Martin Benjamin View Martin Benjamin View OLMAz04Js View Edit Delete":
        - cell "4"
        - cell "Martin Benjamin"
        - cell "Martin Benjamin View":
          - img "Martin Benjamin"
          - button "View":
            - img
        - cell "Martin Benjamin View":
          - img "Martin Benjamin"
          - button "View":
            - img
        - cell "Martin Benjamin View":
          - img "Martin Benjamin"
          - button "View":
            - img
        - cell "OLMAz04Js"
        - cell "View Edit Delete":
          - button:
            - img
          - button:
            - link:
              - /url: manage/1831/edit
            - img
          - button:
            - img
          - button:
            - img
      - row "5 New Gregy56 New Gregy56 View New Gregy56 View New Gregy56 View 3KhAzF44V View Edit Delete":
        - cell "5"
        - cell "New Gregy56"
        - cell "New Gregy56 View":
          - img "New Gregy56"
          - button "View":
            - img
        - cell "New Gregy56 View":
          - img "New Gregy56"
          - button "View":
            - img
        - cell "New Gregy56 View":
          - img "New Gregy56"
          - button "View":
            - img
        - cell "3KhAzF44V"
        - cell "View Edit Delete":
          - button:
            - img
          - button:
            - link:
              - /url: manage/1830/edit
            - img
          - button:
            - img
          - button:
            - img
  - text: Rows per page
  - combobox "Rows per page": "5"
  - text: 1-5 of 29
  - button "Go to first page" [disabled]
  - button "Go to previous page" [disabled]
  - button "Go to next page"
  - button "Go to last page"
- tooltip "Go to last page"
```

# Test source

```ts
  1  | import { Helpers } from "./ReusableFunctions/helpers";
  2  | import { expect } from "@playwright/test";
  3  | import { Area } from "./Area";
  4  | const areaData = require('./test-data/AreaData');
  5  | 
  6  | export class Country extends Helpers {
  7  |     constructor(page) {
  8  |         super(page);
  9  |         this.page = page;
  10 |         this.addCountrytab = page.getByRole('link', { name: 'Add country' })
  11 |         this.manageCountrytab = page.getByRole('link', { name: 'Manage country' });
  12 |         this.deletedCountrytab = page.getByRole('link', { name: 'Manage Deleted country' })
  13 | 
  14 |         //Mandatory Fields Locators
  15 |         this.submitBtn = page.getByRole('button', { name: 'submit' })
  16 |         this.countryNameMandatory = page.getByText('Country *');
  17 |         this.coverImageMandatory = page.getByText('Upload Cover Image *');
  18 |         this.profileImageMandatory = page.getByText('Profile Image *');
  19 |         this.horizontalMandatory = page.getByText('Horizontal Cover Image *');
  20 | 
  21 |         //Add Country Locators
  22 |         this.countryName = page.getByRole('combobox', { name: 'Select Country' });
  23 |         this.geoLocation = page.getByRole('combobox', { name: 'Search geo locations' });
  24 |         this.countrystatusValidation = page.getByText('company already has a');
  25 |         this.coverImage = page.locator('input[name="files"]')
  26 |         this.profileImage = page.locator('input[name="profile_image"]')
  27 |         this.horizontalImage = page.locator('input[name="horizontal_cover"]');
  28 |         this.description = page.getByRole('paragraph').filter({ hasText: /^$/ }).first();
  29 |         this.descriptionar = page.getByRole('paragraph').filter({ hasText: /^$/ })
  30 |         this.about = page.getByRole('textbox', { name: 'About' });
  31 |         this.aboutar = page.getByRole('textbox', { name: 'الوصف' })
  32 | 
  33 |     }
  34 |     async mandatoryFields() {
  35 |         const areaInstance = new Area(this.page);
  36 |         await areaInstance.navigatetoCountryPage();
  37 |         await expect(this.manageCountrytab).toBeEnabled();
  38 |         await this.addCountrytab.click();
  39 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryNameMandatory);
  40 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.coverImageMandatory);
  41 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.profileImageMandatory);
  42 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.horizontalMandatory);
  43 |         console.log('Mandatory fields validation passed');
  44 |     }
  45 | 
  46 |     async addCountry() {
  47 |         for (var country = areaData.countries.length - 1; country >= 0; country--) {
  48 |             await this.selectfromDropdown(this.page, this.countryName, areaData.countries[country]);
  49 |             await this.page.waitForTimeout(2000);
  50 |             if (await this.countrystatusValidation.isVisible()) {
  51 |                 console.log("The " + await this.countryName.textContent() + " country is already added");
  52 |                 continue;
  53 | 
  54 |             }
  55 |            console.log(`Using Country ${areaData.countries[country]}`)
  56 |            this.addedCountry = await this.countryName.textContent();
  57 |            break;
  58 |         }
  59 |         const geolocationText = 'Al Reem Island'
  60 |         await this.geoLocation.fill(geolocationText);
  61 |         await this.page.waitForTimeout(1500);
  62 |         await this.selectfromDropdown(this.page, this.geoLocation, areaData.geolocations);
  63 |         await this.uploadAttachment(this.page, this.coverImage);
  64 |         await this.uploadAttachment(this.page, this.profileImage);
  65 |         await this.uploadAttachment(this.page, this.horizontalImage);
  66 |         await this.randomStringgenerator(this.page, this.description);
  67 |         await this.ARData(this.page, this.descriptionar); 
  68 |         await this.randomStringgenerator(this.page, this.about);
  69 |         await this.ARData(this.page, this.aboutar);
  70 |         await this.submitBtn.click();
  71 |         console.log('Country finally added successfully');
  72 | 
  73 |     }
  74 | 
  75 |     async verifyAddedcountry(){
  76 |         await this.page.waitForTimeout(9000);
> 77 |         await expect(this.page.getByRole('cell', { name: this.addedCountry, exact: true })).toBeVisible();
     |                                                                                             ^ Error: expect(locator).toBeVisible() failed
  78 |         console.log(`The ${this.addedCountry} country is added and verified successfully`);
  79 |     }
  80 | }
```