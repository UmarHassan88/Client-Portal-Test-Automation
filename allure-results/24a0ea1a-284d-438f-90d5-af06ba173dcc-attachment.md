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
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Al Reem Island') to be visible

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
                  - combobox "Select Country" [ref=e206]: United Arab Emirates
                  - button "Open" [ref=e208] [cursor=pointer]:
                    - img [ref=e209]
                  - group
                - paragraph [ref=e211]: company already has a location guide in Deleted status
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
                - paragraph [ref=e233]: Please upload your file
              - generic [ref=e235]:
                - generic [ref=e236]:
                  - text: Profile Image
                  - generic [ref=e237]: "*"
                - generic [ref=e239]:
                  - button "Choose File" [ref=e240]
                  - group
                - paragraph [ref=e241]: Please upload your file
              - generic [ref=e243]:
                - generic [ref=e244]:
                  - text: Horizontal Cover Image
                  - generic [ref=e245]: "*"
                - generic [ref=e247]:
                  - button "Choose File" [ref=e248]
                  - group
                - paragraph [ref=e249]: Please upload your file
              - generic [ref=e251]:
                - generic [ref=e252]: Description
                - generic [ref=e253]:
                  - generic "Editor Toolbar" [ref=e254]:
                    - generic "Text heading" [ref=e256]:
                      - button "Normal" [ref=e257] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e258]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e261]:
                      - button "Bold" [ref=e262] [cursor=pointer]:
                        - img [ref=e263]
                      - button "Italic" [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button "Underline" [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                      - button "Align Left" [ref=e273] [cursor=pointer]:
                        - img [ref=e274]
                      - button "Align Center" [ref=e275] [cursor=pointer]:
                        - img [ref=e276]
                      - button "Align Right" [ref=e277] [cursor=pointer]:
                        - img [ref=e278]
                      - button "Justify" [ref=e279] [cursor=pointer]:
                        - img [ref=e280]
                    - generic [ref=e281]:
                      - button "Insert Link" [ref=e282] [cursor=pointer]:
                        - img [ref=e283]
                      - button "Insert Image" [ref=e287] [cursor=pointer]:
                        - img [ref=e288]
                      - button "Import Word document" [ref=e292] [cursor=pointer]:
                        - img [ref=e293]
                      - button "Insert Embed" [ref=e301] [cursor=pointer]:
                        - img [ref=e302]
                    - generic [ref=e315]:
                      - button "Numbered List" [ref=e316] [cursor=pointer]:
                        - img [ref=e317]
                      - button "Bullet List" [ref=e321] [cursor=pointer]:
                        - img [ref=e322]
                      - button "Checklist" [ref=e323] [cursor=pointer]:
                        - img [ref=e324]
                    - button "Split Section" [ref=e329] [cursor=pointer]:
                      - img [ref=e330]
                    - button "Clear Formatting" [ref=e333] [cursor=pointer]:
                      - img [ref=e334]
                  - generic [ref=e339]:
                    - generic [ref=e340]:
                      - text: Compose an epic...
                      - paragraph [ref=e341]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e342]: Enter description
              - generic [ref=e344]:
                - generic [ref=e345]: المحتوى بالعربي
                - generic [ref=e346]:
                  - generic "Editor Toolbar" [ref=e347]:
                    - generic "Text heading" [ref=e349]:
                      - button "Normal" [ref=e350] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e351]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e354]:
                      - button "Bold" [ref=e355] [cursor=pointer]:
                        - img [ref=e356]
                      - button "Italic" [ref=e359] [cursor=pointer]:
                        - img [ref=e360]
                      - button "Underline" [ref=e362] [cursor=pointer]:
                        - img [ref=e363]
                      - button "Align Left" [ref=e366] [cursor=pointer]:
                        - img [ref=e367]
                      - button "Align Center" [ref=e368] [cursor=pointer]:
                        - img [ref=e369]
                      - button "Align Right" [pressed] [ref=e370] [cursor=pointer]:
                        - img [ref=e371]
                      - button "Justify" [ref=e372] [cursor=pointer]:
                        - img [ref=e373]
                    - generic [ref=e374]:
                      - button "Insert Link" [ref=e375] [cursor=pointer]:
                        - img [ref=e376]
                      - button "Insert Image" [ref=e380] [cursor=pointer]:
                        - img [ref=e381]
                      - button "Import Word document" [ref=e385] [cursor=pointer]:
                        - img [ref=e386]
                      - button "Insert Embed" [ref=e394] [cursor=pointer]:
                        - img [ref=e395]
                    - generic [ref=e408]:
                      - button "Numbered List" [ref=e409] [cursor=pointer]:
                        - img [ref=e410]
                      - button "Bullet List" [ref=e414] [cursor=pointer]:
                        - img [ref=e415]
                      - button "Checklist" [ref=e416] [cursor=pointer]:
                        - img [ref=e417]
                    - button "Split Section" [ref=e422] [cursor=pointer]:
                      - img [ref=e423]
                    - button "Clear Formatting" [ref=e426] [cursor=pointer]:
                      - img [ref=e427]
                  - generic [ref=e432]:
                    - generic [active] [ref=e433]:
                      - text: Compose an epic...
                      - paragraph [ref=e434]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e435]: المحتوى بالعربي
              - generic [ref=e437]:
                - generic [ref=e438]: About Market
                - generic [ref=e440]:
                  - textbox "About" [ref=e441]
                  - group
                - paragraph [ref=e442]: Enter About
              - generic [ref=e444]:
                - generic [ref=e445]: معلومات عن المنطقة
                - generic [ref=e447]:
                  - textbox "الوصف.." [ref=e448]
                  - group
                - paragraph [ref=e449]: أدخل الوصف
            - generic [ref=e451]:
              - button "clear" [ref=e452] [cursor=pointer]
              - button "submit" [ref=e453] [cursor=pointer]: submit
```

# Test source

```ts
  1  | import { Helpers } from "./ReusableFunctions/helpers";
  2  | import { expect } from "@playwright/test";
  3  | import { Area } from "./Area";
  4  | 
  5  | export class Country extends Helpers {
  6  |     constructor(page){
  7  |         super(page);
  8  |         this.page = page;
  9  |         this.addCountrytab = page.getByRole('link', { name: 'Add country' })
  10 |         this.manageCountrytab = page.getByRole('link', { name: 'Manage country' });
  11 |         this.deletedCountrytab = page.getByRole('link', { name: 'Manage Deleted country' })
  12 | 
  13 |         //Mandatory Fields Locators
  14 |         this.submitBtn = page.getByRole('button', { name: 'submit' })
  15 |         this.countryNameMandatory = page.getByText('Country *');
  16 |         this.coverImageMandatory = page.getByText('Upload Cover Image *');
  17 |         this.profileImageMandatory = page.getByText('Profile Image *');
  18 |         this.horizontalMandatory = page.getByText('Horizontal Cover Image *');
  19 | 
  20 |         //Add Country Locators
  21 |         this.countryName = page.getByRole('combobox', { name: 'Select Country' });
  22 |         this.geoLocation = page.getByRole('combobox', { name: 'Search geo locations' });
  23 |         // this.coverImage = page.
  24 | 
  25 |     }
  26 |     async mandatoryFields(){
  27 |         const areaInstance = new Area(this.page);
  28 |         await areaInstance.navigatetoCountryPage();
  29 |         await expect(this.manageCountrytab).toBeEnabled();
  30 |         await this.addCountrytab.click();
  31 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryNameMandatory);
  32 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.coverImageMandatory);
  33 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.profileImageMandatory);
  34 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.horizontalMandatory);    
  35 | 
  36 |     }
  37 | 
  38 |     async addCountry(){
  39 |         const geolocationText = 'Al Reem Island'
  40 |         await this.selectfromDropdown(this.page, this.countryName, 'United Arab Emirates');
  41 |         await this.geoLocation.fill(geolocationText);
> 42 |         await this.page.waitForSelector(`text=${geolocationText}`);
     |                         ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  43 |         await this.selectfromDropdown(this.page, this.geoLocation, geolocationText);
  44 |     }
  45 | }
```