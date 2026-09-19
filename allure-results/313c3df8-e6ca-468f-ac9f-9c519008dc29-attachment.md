# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'countries')
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
                  - combobox "Select Country" [ref=e185]
                  - button "Open" [ref=e187] [cursor=pointer]:
                    - img [ref=e188]
                  - group
                - paragraph [ref=e190]: Country is required
              - generic [ref=e192]:
                - generic [ref=e193]:
                  - text: Geo Location
                  - generic [ref=e195]: Beta
                - generic [ref=e198]:
                  - combobox "Search geo locations" [ref=e199]
                  - button "Open" [ref=e201] [cursor=pointer]:
                    - img [ref=e202]
                  - group
                - paragraph [ref=e204]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - text: Upload Cover Image
                  - generic [ref=e208]: "*"
                - generic [ref=e210]:
                  - button "Choose File" [ref=e211]
                  - group
                - paragraph [ref=e212]: Please upload your file
              - generic [ref=e214]:
                - generic [ref=e215]:
                  - text: Profile Image
                  - generic [ref=e216]: "*"
                - generic [ref=e218]:
                  - button "Choose File" [ref=e219]
                  - group
                - paragraph [ref=e220]: Please upload your file
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - text: Horizontal Cover Image
                  - generic [ref=e224]: "*"
                - generic [ref=e226]:
                  - button "Choose File" [ref=e227]
                  - group
                - paragraph [ref=e228]: Please upload your file
              - generic [ref=e230]:
                - generic [ref=e231]: Description
                - generic [ref=e232]:
                  - generic "Editor Toolbar" [ref=e233]:
                    - generic "Text heading" [ref=e235]:
                      - button "Normal" [ref=e236] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e237]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e240]:
                      - button "Bold" [ref=e241] [cursor=pointer]:
                        - img [ref=e242]
                      - button "Italic" [ref=e245] [cursor=pointer]:
                        - img [ref=e246]
                      - button "Underline" [ref=e248] [cursor=pointer]:
                        - img [ref=e249]
                      - button "Align Left" [ref=e252] [cursor=pointer]:
                        - img [ref=e253]
                      - button "Align Center" [ref=e254] [cursor=pointer]:
                        - img [ref=e255]
                      - button "Align Right" [ref=e256] [cursor=pointer]:
                        - img [ref=e257]
                      - button "Justify" [ref=e258] [cursor=pointer]:
                        - img [ref=e259]
                    - generic [ref=e260]:
                      - button "Insert Link" [ref=e261] [cursor=pointer]:
                        - img [ref=e262]
                      - button "Insert Image" [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button "Import Word document" [ref=e271] [cursor=pointer]:
                        - img [ref=e272]
                      - button "Insert Embed" [ref=e280] [cursor=pointer]:
                        - img [ref=e281]
                    - generic [ref=e294]:
                      - button "Numbered List" [ref=e295] [cursor=pointer]:
                        - img [ref=e296]
                      - button "Bullet List" [ref=e300] [cursor=pointer]:
                        - img [ref=e301]
                      - button "Checklist" [ref=e302] [cursor=pointer]:
                        - img [ref=e303]
                    - button "Split Section" [ref=e308] [cursor=pointer]:
                      - img [ref=e309]
                    - button "Clear Formatting" [ref=e312] [cursor=pointer]:
                      - img [ref=e313]
                  - generic [ref=e318]:
                    - generic [ref=e319]:
                      - text: Compose an epic...
                      - paragraph [ref=e320]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e321]: Enter description
              - generic [ref=e323]:
                - generic [ref=e324]: المحتوى بالعربي
                - generic [ref=e325]:
                  - generic "Editor Toolbar" [ref=e326]:
                    - generic "Text heading" [ref=e328]:
                      - button "Normal" [ref=e329] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e330]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e333]:
                      - button "Bold" [ref=e334] [cursor=pointer]:
                        - img [ref=e335]
                      - button "Italic" [ref=e338] [cursor=pointer]:
                        - img [ref=e339]
                      - button "Underline" [ref=e341] [cursor=pointer]:
                        - img [ref=e342]
                      - button "Align Left" [ref=e345] [cursor=pointer]:
                        - img [ref=e346]
                      - button "Align Center" [ref=e347] [cursor=pointer]:
                        - img [ref=e348]
                      - button "Align Right" [pressed] [ref=e349] [cursor=pointer]:
                        - img [ref=e350]
                      - button "Justify" [ref=e351] [cursor=pointer]:
                        - img [ref=e352]
                    - generic [ref=e353]:
                      - button "Insert Link" [ref=e354] [cursor=pointer]:
                        - img [ref=e355]
                      - button "Insert Image" [ref=e359] [cursor=pointer]:
                        - img [ref=e360]
                      - button "Import Word document" [ref=e364] [cursor=pointer]:
                        - img [ref=e365]
                      - button "Insert Embed" [ref=e373] [cursor=pointer]:
                        - img [ref=e374]
                    - generic [ref=e387]:
                      - button "Numbered List" [ref=e388] [cursor=pointer]:
                        - img [ref=e389]
                      - button "Bullet List" [ref=e393] [cursor=pointer]:
                        - img [ref=e394]
                      - button "Checklist" [ref=e395] [cursor=pointer]:
                        - img [ref=e396]
                    - button "Split Section" [ref=e401] [cursor=pointer]:
                      - img [ref=e402]
                    - button "Clear Formatting" [ref=e405] [cursor=pointer]:
                      - img [ref=e406]
                  - generic [ref=e411]:
                    - generic [ref=e412]:
                      - text: Compose an epic...
                      - paragraph [ref=e413]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e414]: المحتوى بالعربي
              - generic [ref=e416]:
                - generic [ref=e417]: About Market
                - generic [ref=e419]:
                  - textbox "About" [ref=e420]
                  - group
                - paragraph [ref=e421]: Enter About
              - generic [ref=e423]:
                - generic [ref=e424]: معلومات عن المنطقة
                - generic [ref=e426]:
                  - textbox "الوصف.." [ref=e427]
                  - group
                - paragraph [ref=e428]: أدخل الوصف
            - generic [ref=e430]:
              - button "clear" [ref=e431] [cursor=pointer]
              - button "submit" [ref=e432] [cursor=pointer]: submit
```

# Test source

```ts
  1  | import { Helpers } from "./ReusableFunctions/helpers";
  2  | import { expect } from "@playwright/test";
  3  | import { Area } from "./Area";
  4  | const loginData = require('./test-data/AreaData');
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
  24 |         // this.coverImage = page.
  25 | 
  26 |     }
  27 |     async mandatoryFields(){
  28 |         const areaInstance = new Area(this.page);
  29 |         await areaInstance.navigatetoCountryPage();
  30 |         await expect(this.manageCountrytab).toBeEnabled();
  31 |         await this.addCountrytab.click();
  32 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryNameMandatory);
  33 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.coverImageMandatory);
  34 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.profileImageMandatory);
  35 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.horizontalMandatory);    
  36 | 
  37 |     }
  38 | 
  39 |     async addCountry(){
  40 |         const geolocationText = 'Al Reem Island'
> 41 |         await this.selectfromDropdown(this.page, this.countryName, loginData.locationsData.countries[0]);
     |                                                                                            ^ TypeError: Cannot read properties of undefined (reading 'countries')
  42 |         await this.geoLocation.fill(geolocationText);
  43 |         // await this.page.waitForSelector(`text=${geolocationText}`);
  44 |         await this.selectfromDropdown(this.page, this.geoLocation, geolocationText);
  45 |     }
  46 | }
```