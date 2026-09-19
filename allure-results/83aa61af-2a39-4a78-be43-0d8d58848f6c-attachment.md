# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
TypeError: Assignment to constant variable.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - button "Admin" [ref=e120]:
            - img [ref=e122]
            - generic [ref=e130]: Admin
        - separator [ref=e131]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e132] [cursor=pointer]:
        - img [ref=e134]
        - generic [ref=e135]:
          - generic [ref=e136]: aidadmin
          - generic [ref=e137]: admin@aqaryinvestment.com
      - generic [ref=e138]:
        - button [ref=e139] [cursor=pointer]:
          - img [ref=e140]
        - button [ref=e142] [cursor=pointer]:
          - img [ref=e143]
        - button [ref=e146] [cursor=pointer]:
          - img [ref=e147]
        - button [ref=e152] [cursor=pointer]:
          - img [ref=e153]
    - main [ref=e155]:
      - generic [ref=e157]:
        - navigation "breadcrumb" [ref=e158]:
          - list [ref=e159]:
            - listitem [ref=e160]:
              - paragraph [ref=e161]: Manage Area
        - heading "Manage Area" [level=3] [ref=e164]
      - generic [ref=e165]:
        - generic [ref=e166]:
          - link "Add country" [ref=e167] [cursor=pointer]:
            - /url: /dashboard/area/country/add
          - link "Manage country" [ref=e168] [cursor=pointer]:
            - /url: /dashboard/area/country/manage
          - link "Manage Deleted country" [ref=e169] [cursor=pointer]:
            - /url: /dashboard/area/country/deleted
        - generic [ref=e170]:
          - paragraph [ref=e174]: Manage Area
          - generic [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e179]:
                - generic [ref=e180]:
                  - text: Country
                  - generic [ref=e181]: "*"
                - generic [ref=e184]:
                  - combobox "Select Country" [active] [ref=e185]: United Arab Emirates
                  - generic [ref=e186]:
                    - button "Clear" [ref=e187] [cursor=pointer]:
                      - img [ref=e188]
                    - button "Open" [ref=e190] [cursor=pointer]:
                      - img [ref=e191]
                  - group
                - paragraph [ref=e193]: Country is required
              - generic [ref=e195]:
                - generic [ref=e196]:
                  - text: Geo Location
                  - generic [ref=e198]: Beta
                - generic [ref=e201]:
                  - combobox "Search geo locations" [ref=e202]
                  - button "Open" [ref=e204] [cursor=pointer]:
                    - img [ref=e205]
                  - group
                - paragraph [ref=e207]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e209]:
                - generic [ref=e210]:
                  - text: Upload Cover Image
                  - generic [ref=e211]: "*"
                - generic [ref=e213]:
                  - button "Choose File" [ref=e214]
                  - group
                - paragraph [ref=e215]: Please upload your file
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - text: Profile Image
                  - generic [ref=e219]: "*"
                - generic [ref=e221]:
                  - button "Choose File" [ref=e222]
                  - group
                - paragraph [ref=e223]: Please upload your file
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - text: Horizontal Cover Image
                  - generic [ref=e227]: "*"
                - generic [ref=e229]:
                  - button "Choose File" [ref=e230]
                  - group
                - paragraph [ref=e231]: Please upload your file
              - generic [ref=e233]:
                - generic [ref=e234]: Description
                - generic [ref=e235]:
                  - generic "Editor Toolbar" [ref=e236]:
                    - generic "Text heading" [ref=e238]:
                      - button "Normal" [ref=e239] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e240]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e243]:
                      - button "Bold" [ref=e244] [cursor=pointer]:
                        - img [ref=e245]
                      - button "Italic" [ref=e248] [cursor=pointer]:
                        - img [ref=e249]
                      - button "Underline" [ref=e251] [cursor=pointer]:
                        - img [ref=e252]
                      - button "Align Left" [ref=e255] [cursor=pointer]:
                        - img [ref=e256]
                      - button "Align Center" [ref=e257] [cursor=pointer]:
                        - img [ref=e258]
                      - button "Align Right" [ref=e259] [cursor=pointer]:
                        - img [ref=e260]
                      - button "Justify" [ref=e261] [cursor=pointer]:
                        - img [ref=e262]
                    - generic [ref=e263]:
                      - button "Insert Link" [ref=e264] [cursor=pointer]:
                        - img [ref=e265]
                      - button "Insert Image" [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                      - button "Import Word document" [ref=e274] [cursor=pointer]:
                        - img [ref=e275]
                      - button "Insert Embed" [ref=e283] [cursor=pointer]:
                        - img [ref=e284]
                    - generic [ref=e297]:
                      - button "Numbered List" [ref=e298] [cursor=pointer]:
                        - img [ref=e299]
                      - button "Bullet List" [ref=e303] [cursor=pointer]:
                        - img [ref=e304]
                      - button "Checklist" [ref=e305] [cursor=pointer]:
                        - img [ref=e306]
                    - button "Split Section" [ref=e311] [cursor=pointer]:
                      - img [ref=e312]
                    - button "Clear Formatting" [ref=e315] [cursor=pointer]:
                      - img [ref=e316]
                  - generic [ref=e321]:
                    - generic [ref=e322]:
                      - text: Compose an epic...
                      - paragraph [ref=e323]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e324]: Enter description
              - generic [ref=e326]:
                - generic [ref=e327]: المحتوى بالعربي
                - generic [ref=e328]:
                  - generic "Editor Toolbar" [ref=e329]:
                    - generic "Text heading" [ref=e331]:
                      - button "Normal" [ref=e332] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e333]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e336]:
                      - button "Bold" [ref=e337] [cursor=pointer]:
                        - img [ref=e338]
                      - button "Italic" [ref=e341] [cursor=pointer]:
                        - img [ref=e342]
                      - button "Underline" [ref=e344] [cursor=pointer]:
                        - img [ref=e345]
                      - button "Align Left" [ref=e348] [cursor=pointer]:
                        - img [ref=e349]
                      - button "Align Center" [ref=e350] [cursor=pointer]:
                        - img [ref=e351]
                      - button "Align Right" [ref=e352] [cursor=pointer]:
                        - img [ref=e353]
                      - button "Justify" [ref=e354] [cursor=pointer]:
                        - img [ref=e355]
                    - generic [ref=e356]:
                      - button "Insert Link" [ref=e357] [cursor=pointer]:
                        - img [ref=e358]
                      - button "Insert Image" [ref=e362] [cursor=pointer]:
                        - img [ref=e363]
                      - button "Import Word document" [ref=e367] [cursor=pointer]:
                        - img [ref=e368]
                      - button "Insert Embed" [ref=e376] [cursor=pointer]:
                        - img [ref=e377]
                    - generic [ref=e390]:
                      - button "Numbered List" [ref=e391] [cursor=pointer]:
                        - img [ref=e392]
                      - button "Bullet List" [ref=e396] [cursor=pointer]:
                        - img [ref=e397]
                      - button "Checklist" [ref=e398] [cursor=pointer]:
                        - img [ref=e399]
                    - button "Split Section" [ref=e404] [cursor=pointer]:
                      - img [ref=e405]
                    - button "Clear Formatting" [ref=e408] [cursor=pointer]:
                      - img [ref=e409]
                  - generic [ref=e414]:
                    - generic [ref=e415]:
                      - text: Compose an epic...
                      - paragraph [ref=e416]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e417]: المحتوى بالعربي
              - generic [ref=e419]:
                - generic [ref=e420]: About Market
                - generic [ref=e422]:
                  - textbox "About" [ref=e423]
                  - group
                - paragraph [ref=e424]: Enter About
              - generic [ref=e426]:
                - generic [ref=e427]: معلومات عن المنطقة
                - generic [ref=e429]:
                  - textbox "الوصف.." [ref=e430]
                  - group
                - paragraph [ref=e431]: أدخل الوصف
            - generic [ref=e433]:
              - button "clear" [ref=e434] [cursor=pointer]
              - button "submit" [ref=e435] [cursor=pointer]: submit
```

# Test source

```ts
  1  | import { Helpers } from "./ReusableFunctions/helpers";
  2  | import { expect } from "@playwright/test";
  3  | import { Area } from "./Area";
  4  | const areaData = require('./test-data/AreaData');
  5  | 
  6  | export class Country extends Helpers {
  7  |     constructor(page){
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
  25 |         // this.coverImage = page.
  26 | 
  27 |     }
  28 |     async mandatoryFields(){
  29 |         const areaInstance = new Area(this.page);
  30 |         await areaInstance.navigatetoCountryPage();
  31 |         await expect(this.manageCountrytab).toBeEnabled();
  32 |         await this.addCountrytab.click();
  33 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryNameMandatory);
  34 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.coverImageMandatory);
  35 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.profileImageMandatory);
  36 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.horizontalMandatory);    
  37 |         
  38 | 
  39 |     }
  40 | 
  41 |     async addCountry(){
> 42 |         for (const country = 0; country < areaData.countries.length; country++) {
     |                                                                             ^ TypeError: Assignment to constant variable.
  43 |             await this.selectfromDropdown(this.page, this.countryName, areaData.countries[country]);
  44 |             if(await this.countrystatusValidation.isVisible()){
  45 |                 country++;
  46 |             }
  47 |             else{
  48 |             console.log('Country added successfully');
  49 |         }}
  50 |         const geolocationText = 'Al Reem Island'
  51 |         await this.geoLocation.fill(geolocationText);
  52 |         await this.selectfromDropdown(this.page, this.geoLocation, areaData.geolocations);
  53 |     }
  54 | }
```