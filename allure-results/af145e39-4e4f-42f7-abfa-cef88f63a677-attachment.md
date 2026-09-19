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
- generic [ref=e1]:
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
                  - combobox "Select Country" [active] [ref=e196]: sadfkls
                  - generic [ref=e197]:
                    - button "Clear" [ref=e198] [cursor=pointer]:
                      - img [ref=e199]
                    - button "Open" [ref=e201] [cursor=pointer]:
                      - img [ref=e202]
                  - group
                - paragraph [ref=e204]: company already has a location guide in Available status
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - text: Geo Location
                  - generic [ref=e209]: Beta
                - generic [ref=e212]:
                  - combobox "Search geo locations" [ref=e213]
                  - button "Open" [ref=e215] [cursor=pointer]:
                    - img [ref=e216]
                  - group
                - paragraph [ref=e218]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - text: Upload Cover Image
                  - generic [ref=e222]: "*"
                - generic [ref=e224]:
                  - button "Choose File" [ref=e225]
                  - group
                - paragraph [ref=e226]: Please upload your file
              - generic [ref=e228]:
                - generic [ref=e229]:
                  - text: Profile Image
                  - generic [ref=e230]: "*"
                - generic [ref=e232]:
                  - button "Choose File" [ref=e233]
                  - group
                - paragraph [ref=e234]: Please upload your file
              - generic [ref=e236]:
                - generic [ref=e237]:
                  - text: Horizontal Cover Image
                  - generic [ref=e238]: "*"
                - generic [ref=e240]:
                  - button "Choose File" [ref=e241]
                  - group
                - paragraph [ref=e242]: Please upload your file
              - generic [ref=e244]:
                - generic [ref=e245]: Description
                - generic [ref=e246]:
                  - generic "Editor Toolbar" [ref=e247]:
                    - generic "Text heading" [ref=e249]:
                      - button "Normal" [ref=e250] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e251]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e254]:
                      - button "Bold" [ref=e255] [cursor=pointer]:
                        - img [ref=e256]
                      - button "Italic" [ref=e259] [cursor=pointer]:
                        - img [ref=e260]
                      - button "Underline" [ref=e262] [cursor=pointer]:
                        - img [ref=e263]
                      - button "Align Left" [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button "Align Center" [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                      - button "Align Right" [ref=e270] [cursor=pointer]:
                        - img [ref=e271]
                      - button "Justify" [ref=e272] [cursor=pointer]:
                        - img [ref=e273]
                    - generic [ref=e274]:
                      - button "Insert Link" [ref=e275] [cursor=pointer]:
                        - img [ref=e276]
                      - button "Insert Image" [ref=e280] [cursor=pointer]:
                        - img [ref=e281]
                      - button "Import Word document" [ref=e285] [cursor=pointer]:
                        - img [ref=e286]
                      - button "Insert Embed" [ref=e294] [cursor=pointer]:
                        - img [ref=e295]
                    - generic [ref=e308]:
                      - button "Numbered List" [ref=e309] [cursor=pointer]:
                        - img [ref=e310]
                      - button "Bullet List" [ref=e314] [cursor=pointer]:
                        - img [ref=e315]
                      - button "Checklist" [ref=e316] [cursor=pointer]:
                        - img [ref=e317]
                    - button "Split Section" [ref=e322] [cursor=pointer]:
                      - img [ref=e323]
                    - button "Clear Formatting" [ref=e326] [cursor=pointer]:
                      - img [ref=e327]
                  - generic [ref=e332]:
                    - generic [ref=e333]:
                      - text: Compose an epic...
                      - paragraph [ref=e334]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e335]: Enter description
              - generic [ref=e337]:
                - generic [ref=e338]: المحتوى بالعربي
                - generic [ref=e339]:
                  - generic "Editor Toolbar" [ref=e340]:
                    - generic "Text heading" [ref=e342]:
                      - button "Normal" [ref=e343] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e344]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e347]:
                      - button "Bold" [ref=e348] [cursor=pointer]:
                        - img [ref=e349]
                      - button "Italic" [ref=e352] [cursor=pointer]:
                        - img [ref=e353]
                      - button "Underline" [ref=e355] [cursor=pointer]:
                        - img [ref=e356]
                      - button "Align Left" [ref=e359] [cursor=pointer]:
                        - img [ref=e360]
                      - button "Align Center" [ref=e361] [cursor=pointer]:
                        - img [ref=e362]
                      - button "Align Right" [ref=e363] [cursor=pointer]:
                        - img [ref=e364]
                      - button "Justify" [ref=e365] [cursor=pointer]:
                        - img [ref=e366]
                    - generic [ref=e367]:
                      - button "Insert Link" [ref=e368] [cursor=pointer]:
                        - img [ref=e369]
                      - button "Insert Image" [ref=e373] [cursor=pointer]:
                        - img [ref=e374]
                      - button "Import Word document" [ref=e378] [cursor=pointer]:
                        - img [ref=e379]
                      - button "Insert Embed" [ref=e387] [cursor=pointer]:
                        - img [ref=e388]
                    - generic [ref=e401]:
                      - button "Numbered List" [ref=e402] [cursor=pointer]:
                        - img [ref=e403]
                      - button "Bullet List" [ref=e407] [cursor=pointer]:
                        - img [ref=e408]
                      - button "Checklist" [ref=e409] [cursor=pointer]:
                        - img [ref=e410]
                    - button "Split Section" [ref=e415] [cursor=pointer]:
                      - img [ref=e416]
                    - button "Clear Formatting" [ref=e419] [cursor=pointer]:
                      - img [ref=e420]
                  - generic [ref=e425]:
                    - generic [ref=e426]:
                      - text: Compose an epic...
                      - paragraph [ref=e427]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e428]: المحتوى بالعربي
              - generic [ref=e430]:
                - generic [ref=e431]: About Market
                - generic [ref=e433]:
                  - textbox "About" [ref=e434]
                  - group
                - paragraph [ref=e435]: Enter About
              - generic [ref=e437]:
                - generic [ref=e438]: معلومات عن المنطقة
                - generic [ref=e440]:
                  - textbox "الوصف.." [ref=e441]
                  - group
                - paragraph [ref=e442]: أدخل الوصف
            - generic [ref=e444]:
              - button "clear" [ref=e445] [cursor=pointer]
              - button "submit" [ref=e446] [cursor=pointer]: submit
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
> 49 |             await this.page.waitForTimeout(3000);
     |                             ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
  75 |         await this.page.waitForTimeout(10000);
  76 |         await expect(this.page.getByRole('cell', { name: this.addedCountry, exact: true })).toBeVisible();
  77 |         console.log(`The ${this.addedCountry} country is added and verified successfully`);
  78 |     }
  79 | }
```