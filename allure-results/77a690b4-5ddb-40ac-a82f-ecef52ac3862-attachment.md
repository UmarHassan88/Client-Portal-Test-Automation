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
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
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
          - button "Location Guide Beta" [ref=e110]:
            - img [ref=e112]
            - generic [ref=e116]:
              - text: Location Guide
              - generic [ref=e117]: Beta
        - separator [ref=e118]
        - navigation [ref=e119]:
          - button "Blogs" [ref=e120]:
            - img [ref=e122]
            - generic [ref=e127]: Blogs
        - separator [ref=e128]
        - navigation [ref=e129]:
          - button "Admin" [ref=e130]:
            - img [ref=e132]
            - generic [ref=e140]: Admin
        - separator [ref=e141]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e142] [cursor=pointer]:
        - img [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]: aidadmin
          - generic [ref=e148]: admin@aqaryinvestment.com
      - generic [ref=e149]:
        - button [ref=e150] [cursor=pointer]:
          - img [ref=e151]
        - button [ref=e153] [cursor=pointer]:
          - img [ref=e154]
        - button [ref=e157] [cursor=pointer]:
          - img [ref=e158]
        - button [ref=e163] [cursor=pointer]:
          - img [ref=e164]
    - main [ref=e166]:
      - generic [ref=e168]:
        - navigation "breadcrumb" [ref=e169]:
          - list [ref=e170]:
            - listitem [ref=e171]:
              - paragraph [ref=e172]: Manage Area
        - heading "Manage Area" [level=3] [ref=e175]
      - generic [ref=e176]:
        - generic [ref=e177]:
          - link "Add country" [ref=e178] [cursor=pointer]:
            - /url: /dashboard/area/country/add
          - link "Manage country" [ref=e179] [cursor=pointer]:
            - /url: /dashboard/area/country/manage
          - link "Manage Deleted country" [ref=e180] [cursor=pointer]:
            - /url: /dashboard/area/country/deleted
        - generic [ref=e181]:
          - paragraph [ref=e185]: Manage Area
          - generic [ref=e187]:
            - generic [ref=e188]:
              - generic [ref=e190]:
                - generic [ref=e191]:
                  - text: Country
                  - generic [ref=e192]: "*"
                - generic [ref=e195]:
                  - combobox "Select Country" [ref=e196]: Martin Benjamin
                  - button "Open" [ref=e198] [cursor=pointer]:
                    - img [ref=e199]
                  - group
                - paragraph [ref=e201]: Please select country
              - generic [ref=e203]:
                - generic [ref=e204]:
                  - text: Geo Location
                  - generic [ref=e206]: Beta
                - generic [ref=e209]:
                  - combobox "Search geo locations" [ref=e210]: Al Reem Island, Al Reem Island, Abu Dhabi City, Abu Dhabi, United Arab Emirates
                  - button "Open" [ref=e212] [cursor=pointer]:
                    - img [ref=e213]
                  - group
                - paragraph [ref=e215]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - text: Upload Cover Image
                  - generic [ref=e219]: "*"
                - generic [ref=e221]:
                  - button "Choose File" [ref=e222]
                  - group
                - paragraph [ref=e223]: Please upload your file
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - text: Profile Image
                  - generic [ref=e227]: "*"
                - generic [ref=e229]:
                  - button "Choose File" [ref=e230]
                  - group
                - paragraph [ref=e231]: Please upload your file
              - generic [ref=e233]:
                - generic [ref=e234]:
                  - text: Horizontal Cover Image
                  - generic [ref=e235]: "*"
                - generic [ref=e237]:
                  - button "Choose File" [ref=e238]
                  - group
                - paragraph [ref=e239]: Please upload your file
              - generic [ref=e241]:
                - generic [ref=e242]: Description
                - generic [ref=e243]:
                  - generic "Editor Toolbar" [ref=e244]:
                    - generic "Text heading" [ref=e246]:
                      - button "Normal" [ref=e247] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e248]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e251]:
                      - button "Bold" [ref=e252] [cursor=pointer]:
                        - img [ref=e253]
                      - button "Italic" [ref=e256] [cursor=pointer]:
                        - img [ref=e257]
                      - button "Underline" [ref=e259] [cursor=pointer]:
                        - img [ref=e260]
                      - button "Align Left" [ref=e263] [cursor=pointer]:
                        - img [ref=e264]
                      - button "Align Center" [ref=e265] [cursor=pointer]:
                        - img [ref=e266]
                      - button "Align Right" [ref=e267] [cursor=pointer]:
                        - img [ref=e268]
                      - button "Justify" [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                    - generic [ref=e271]:
                      - button "Insert Link" [ref=e272] [cursor=pointer]:
                        - img [ref=e273]
                      - button "Insert Image" [ref=e277] [cursor=pointer]:
                        - img [ref=e278]
                      - button "Import Word document" [ref=e282] [cursor=pointer]:
                        - img [ref=e283]
                      - button "Insert Embed" [ref=e291] [cursor=pointer]:
                        - img [ref=e292]
                    - generic [ref=e305]:
                      - button "Numbered List" [ref=e306] [cursor=pointer]:
                        - img [ref=e307]
                      - button "Bullet List" [ref=e311] [cursor=pointer]:
                        - img [ref=e312]
                      - button "Checklist" [ref=e313] [cursor=pointer]:
                        - img [ref=e314]
                    - button "Split Section" [ref=e319] [cursor=pointer]:
                      - img [ref=e320]
                    - button "Clear Formatting" [ref=e323] [cursor=pointer]:
                      - img [ref=e324]
                  - generic [ref=e329]:
                    - paragraph [ref=e331]: WLq5sm9d0
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e332]: Enter description
              - generic [ref=e334]:
                - generic [ref=e335]: المحتوى بالعربي
                - generic [ref=e336]:
                  - generic "Editor Toolbar" [ref=e337]:
                    - generic "Text heading" [ref=e339]:
                      - button "Normal" [ref=e340] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e341]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e344]:
                      - button "Bold" [ref=e345] [cursor=pointer]:
                        - img [ref=e346]
                      - button "Italic" [ref=e349] [cursor=pointer]:
                        - img [ref=e350]
                      - button "Underline" [ref=e352] [cursor=pointer]:
                        - img [ref=e353]
                      - button "Align Left" [ref=e356] [cursor=pointer]:
                        - img [ref=e357]
                      - button "Align Center" [ref=e358] [cursor=pointer]:
                        - img [ref=e359]
                      - button "Align Right" [ref=e360] [cursor=pointer]:
                        - img [ref=e361]
                      - button "Justify" [ref=e362] [cursor=pointer]:
                        - img [ref=e363]
                    - generic [ref=e364]:
                      - button "Insert Link" [ref=e365] [cursor=pointer]:
                        - img [ref=e366]
                      - button "Insert Image" [ref=e370] [cursor=pointer]:
                        - img [ref=e371]
                      - button "Import Word document" [ref=e375] [cursor=pointer]:
                        - img [ref=e376]
                      - button "Insert Embed" [ref=e384] [cursor=pointer]:
                        - img [ref=e385]
                    - generic [ref=e398]:
                      - button "Numbered List" [ref=e399] [cursor=pointer]:
                        - img [ref=e400]
                      - button "Bullet List" [ref=e404] [cursor=pointer]:
                        - img [ref=e405]
                      - button "Checklist" [ref=e406] [cursor=pointer]:
                        - img [ref=e407]
                    - button "Split Section" [ref=e412] [cursor=pointer]:
                      - img [ref=e413]
                    - button "Clear Formatting" [ref=e416] [cursor=pointer]:
                      - img [ref=e417]
                  - generic [ref=e422]:
                    - paragraph [ref=e424]: هذا هو الوصف
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e425]: المحتوى بالعربي
              - generic [ref=e427]:
                - generic [ref=e428]: About Market
                - generic [ref=e430]:
                  - textbox "About" [ref=e431]: OLMAz04Js
                  - group
                - paragraph [ref=e432]: Enter About
              - generic [ref=e434]:
                - generic [ref=e435]: معلومات عن المنطقة
                - generic [ref=e437]:
                  - textbox "الوصف.." [ref=e438]: هذا هو الوصف
                  - group
                - paragraph [ref=e439]: أدخل الوصف
            - generic [ref=e441]:
              - button "clear" [ref=e442] [cursor=pointer]
              - button "submit" [disabled]
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
  49 |             await this.page.waitForTimeout(3000);
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
  61 |         await this.selectfromDropdown(this.page, this.geoLocation, areaData.geolocations);
  62 |         await this.uploadAttachment(this.page, this.coverImage);
  63 |         await this.uploadAttachment(this.page, this.profileImage);
  64 |         await this.uploadAttachment(this.page, this.horizontalImage);
  65 |         await this.randomStringgenerator(this.page, this.description);
  66 |         await this.ARData(this.page, this.descriptionar); 
  67 |         await this.randomStringgenerator(this.page, this.about);
  68 |         await this.ARData(this.page, this.aboutar);
  69 |         await this.submitBtn.click();
  70 |         console.log('Country finally added successfully');
  71 | 
  72 |     }
  73 | 
  74 |     async verifyAddedcountry(){
> 75 |         await this.page.waitForTimeout(3000);
     |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  76 |         await expect(this.page.getByRole('cell', { name: this.addedCountry, exact: true })).toBeVisible();
  77 |         console.log(`The ${this.addedCountry} country is added and verified successfully`);
  78 |     }
  79 | }
```