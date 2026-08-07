# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Ads\ManageAds.spec.js >> This test automates and manages the Ads section
- Location: tests\Listing\Ads\ManageAds.spec.js:4:5

# Error details

```
ReferenceError: randomTextGenerator is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - alert [ref=e2]
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /dashboard/account/me
          - img [ref=e7]
        - button [ref=e9] [cursor=pointer]:
          - img [ref=e10]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button [ref=e15]:
            - img [ref=e17]
            - generic [ref=e24]: Main Menu
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button [ref=e27]:
            - img [ref=e29]
            - generic [ref=e35]: Listing
          - link [ref=e39] [cursor=pointer]:
            - /url: /dashboard/listing/property
            - button [ref=e41]:
              - img [ref=e43]
              - generic [ref=e48]: Property
          - link [ref=e52] [cursor=pointer]:
            - /url: /dashboard/listing/unit
            - button [ref=e54]:
              - img [ref=e56]
              - generic [ref=e60]: Unit
          - link [ref=e64] [cursor=pointer]:
            - /url: /dashboard/listing/services
            - button [ref=e66]:
              - img [ref=e68]
              - generic [ref=e72]: Services
          - link [ref=e76] [cursor=pointer]:
            - /url: /dashboard/listing/ads
            - button [ref=e78]:
              - img [ref=e80]
              - generic [ref=e84]: Ads
          - link [ref=e88] [cursor=pointer]:
            - /url: /dashboard/listing/marketing/notifications
            - button [ref=e90]:
              - img [ref=e92]
              - generic [ref=e96]: Marketing
          - link [ref=e100] [cursor=pointer]:
            - /url: /dashboard/listing/requests
            - button [ref=e102]:
              - img [ref=e104]
              - generic [ref=e113]: Listing Requests
          - link [ref=e117] [cursor=pointer]:
            - /url: /dashboard/listing/apikeys
            - button [ref=e119]:
              - img [ref=e121]
              - generic [ref=e125]: Api Keys & Webhooks
        - separator [ref=e126]
        - navigation [ref=e127]:
          - button [ref=e128]:
            - img [ref=e130]
            - generic [ref=e135]: Area
        - separator [ref=e136]
        - navigation [ref=e137]:
          - button [ref=e138]:
            - img [ref=e140]
            - generic [ref=e145]: Blogs
        - separator [ref=e146]
        - navigation [ref=e147]:
          - button [ref=e148]:
            - img [ref=e150]
            - generic [ref=e156]: Profiles
        - separator [ref=e157]
        - navigation [ref=e158]:
          - button [ref=e159]:
            - img [ref=e161]
            - generic [ref=e169]: Admin
        - separator [ref=e170]
        - navigation [ref=e171]:
          - button [ref=e172]:
            - img [ref=e174]
            - generic [ref=e178]: System Health
        - separator [ref=e179]
      - button [ref=e180] [cursor=pointer]:
        - img [ref=e182]
        - generic [ref=e183]:
          - generic [ref=e184]: aidadmin
          - generic [ref=e185]: admin@aqaryinvestment.com
      - generic [ref=e186]:
        - button [ref=e187] [cursor=pointer]:
          - img [ref=e188]
        - button [ref=e190] [cursor=pointer]:
          - img [ref=e191]
        - button [ref=e194] [cursor=pointer]:
          - img [ref=e195]
        - button [ref=e200] [cursor=pointer]:
          - img [ref=e201]
    - main [ref=e203]:
      - generic [ref=e205]:
        - navigation [ref=e206]:
          - list [ref=e207]:
            - listitem [ref=e208]:
              - paragraph [ref=e209]: Manage Ads
        - heading [level=3] [ref=e212]: Manage Ads
      - generic [ref=e214]:
        - generic [ref=e215]:
          - paragraph [ref=e218]: Ads list
          - button [ref=e220] [cursor=pointer]:
            - img [ref=e222]
            - text: Create Ad
        - generic [ref=e224]:
          - generic [ref=e225]:
            - generic [ref=e228]:
              - textbox [ref=e229]:
                - /placeholder: Search
              - group
            - button [ref=e232] [cursor=pointer]:
              - img [ref=e234]
              - text: Export
          - generic [ref=e236]:
            - table [ref=e238]:
              - rowgroup [ref=e239]:
                - row [ref=e240]:
                  - columnheader [ref=e241]:
                    - generic [ref=e242]:
                      - generic [ref=e244]: Ad Title
                      - button [ref=e246] [cursor=pointer]:
                        - img [ref=e247]
                  - columnheader [ref=e249]:
                    - generic [ref=e250]:
                      - generic [ref=e252]: Platform
                      - button [ref=e254] [cursor=pointer]:
                        - img [ref=e255]
                  - columnheader [ref=e257]:
                    - generic [ref=e258]:
                      - generic [ref=e260]: Language
                      - button [ref=e262] [cursor=pointer]:
                        - img [ref=e263]
                  - columnheader [ref=e265]:
                    - generic [ref=e266]:
                      - generic [ref=e268]: Direction
                      - button [ref=e270] [cursor=pointer]:
                        - img [ref=e271]
                  - columnheader [ref=e273]:
                    - generic [ref=e274]:
                      - generic [ref=e276]: Design
                      - button [ref=e278] [cursor=pointer]:
                        - img [ref=e279]
                  - columnheader [ref=e281]:
                    - generic [ref=e282]:
                      - generic [ref=e284]: Redirect Link
                      - button [ref=e286] [cursor=pointer]:
                        - img [ref=e287]
                  - columnheader [ref=e289]:
                    - generic [ref=e290]:
                      - generic [ref=e292]: Show Ad
                      - button [ref=e294] [cursor=pointer]:
                        - img [ref=e295]
                  - columnheader [ref=e297]:
                    - generic [ref=e298]:
                      - generic [ref=e300]: Date & Time
                      - button [ref=e302] [cursor=pointer]:
                        - img [ref=e303]
                  - columnheader [ref=e305]:
                    - generic [ref=e309]: Actions
              - rowgroup [ref=e310]:
                - row [ref=e311]:
                  - cell [ref=e312]: cultivate extensible experiences 1785751483839
                  - cell [ref=e313]: website
                  - cell [ref=e314]: en
                  - cell [ref=e315]: vertical
                  - cell [ref=e316]:
                    - generic [ref=e317]:
                      - img [ref=e318]
                      - button [ref=e320] [cursor=pointer]:
                        - img [ref=e321]
                  - cell [ref=e324]:
                    - link [ref=e325] [cursor=pointer]:
                      - /url: https://proud-devil.com/
                      - text: Link
                  - cell [ref=e326]:
                    - switch [checked] [ref=e329] [cursor=pointer]
                  - cell [ref=e332]:
                    - generic [ref=e333]:
                      - generic [ref=e334]:
                        - paragraph [ref=e335]: "Created:"
                        - paragraph [ref=e336]: Aug 03, 2026 - 02:08 PM
                      - generic [ref=e337]:
                        - paragraph [ref=e338]: "Updated:"
                        - paragraph [ref=e339]: Aug 03, 2026 - 02:08 PM
                  - cell [ref=e340]:
                    - generic [ref=e341]:
                      - button [ref=e343] [cursor=pointer]:
                        - img [ref=e344]
                      - button [ref=e349] [cursor=pointer]:
                        - img [ref=e350]
                - row [ref=e352]:
                  - cell [ref=e353]: GTYGTYGTYGTYGTY
                  - cell [ref=e354]: mobile
                  - cell [ref=e355]: ar
                  - cell [ref=e356]: vertical
                  - cell [ref=e357]:
                    - generic [ref=e358]:
                      - img [ref=e359]
                      - button [ref=e361] [cursor=pointer]:
                        - img [ref=e362]
                  - cell [ref=e365]:
                    - link [ref=e366] [cursor=pointer]:
                      - /url: " https://aqaryaid.com/ar/listing/sale/listingProject/5555"
                      - text: Link
                  - cell [ref=e367]:
                    - switch [checked] [ref=e370] [cursor=pointer]
                  - cell [ref=e373]:
                    - generic [ref=e374]:
                      - generic [ref=e375]:
                        - paragraph [ref=e376]: "Created:"
                        - paragraph [ref=e377]: Jun 04, 2026 - 01:56 PM
                      - generic [ref=e378]:
                        - paragraph [ref=e379]: "Updated:"
                        - paragraph [ref=e380]: Jul 02, 2026 - 02:07 PM
                  - cell [ref=e381]:
                    - generic [ref=e382]:
                      - button [ref=e384] [cursor=pointer]:
                        - img [ref=e385]
                      - button [ref=e390] [cursor=pointer]:
                        - img [ref=e391]
                - row [ref=e393]:
                  - cell [ref=e394]: Ad 1785749819750
                  - cell [ref=e395]: website
                  - cell [ref=e396]: en
                  - cell [ref=e397]: vertical
                  - cell [ref=e398]:
                    - generic [ref=e399]:
                      - img [ref=e400]
                      - button [ref=e402] [cursor=pointer]:
                        - img [ref=e403]
                  - cell [ref=e406]:
                    - link [ref=e407] [cursor=pointer]:
                      - /url: https://example.com/updated
                      - text: Link
                  - cell [ref=e408]:
                    - switch [ref=e411] [cursor=pointer]
                  - cell [ref=e414]:
                    - generic [ref=e415]:
                      - generic [ref=e416]:
                        - paragraph [ref=e417]: "Created:"
                        - paragraph [ref=e418]: Aug 03, 2026 - 01:40 PM
                      - generic [ref=e419]:
                        - paragraph [ref=e420]: "Updated:"
                        - paragraph [ref=e421]: Aug 03, 2026 - 01:40 PM
                  - cell [ref=e422]:
                    - generic [ref=e423]:
                      - button [ref=e425] [cursor=pointer]:
                        - img [ref=e426]
                      - button [ref=e431] [cursor=pointer]:
                        - img [ref=e432]
                - row [ref=e434]:
                  - cell [ref=e435]: collaborate intuitive paradigms 1785749856386
                  - cell [ref=e436]: website
                  - cell [ref=e437]: ar
                  - cell [ref=e438]: horizontal
                  - cell [ref=e439]:
                    - generic [ref=e440]:
                      - img [ref=e441]
                      - button [ref=e443] [cursor=pointer]:
                        - img [ref=e444]
                  - cell [ref=e447]:
                    - link [ref=e448] [cursor=pointer]:
                      - /url: https://infamous-summary.com/
                      - text: Link
                  - cell [ref=e449]:
                    - switch [ref=e452] [cursor=pointer]
                  - cell [ref=e455]:
                    - generic [ref=e456]:
                      - generic [ref=e457]:
                        - paragraph [ref=e458]: "Created:"
                        - paragraph [ref=e459]: Aug 03, 2026 - 01:41 PM
                      - generic [ref=e460]:
                        - paragraph [ref=e461]: "Updated:"
                        - paragraph [ref=e462]: Aug 03, 2026 - 01:41 PM
                  - cell [ref=e463]:
                    - generic [ref=e464]:
                      - button [ref=e466] [cursor=pointer]:
                        - img [ref=e467]
                      - button [ref=e472] [cursor=pointer]:
                        - img [ref=e473]
                - row [ref=e475]:
                  - cell [ref=e476]: redefine best-of-breed functionalities 1785751348013
                  - cell [ref=e477]: mobile
                  - cell [ref=e478]: ar
                  - cell [ref=e479]: vertical
                  - cell [ref=e480]:
                    - generic [ref=e481]:
                      - img [ref=e482]
                      - button [ref=e484] [cursor=pointer]:
                        - img [ref=e485]
                  - cell [ref=e488]:
                    - link [ref=e489] [cursor=pointer]:
                      - /url: https://poor-gallery.com
                      - text: Link
                  - cell [ref=e490]:
                    - switch [checked] [ref=e493] [cursor=pointer]
                  - cell [ref=e496]:
                    - generic [ref=e497]:
                      - generic [ref=e498]:
                        - paragraph [ref=e499]: "Created:"
                        - paragraph [ref=e500]: Aug 03, 2026 - 02:06 PM
                      - generic [ref=e501]:
                        - paragraph [ref=e502]: "Updated:"
                        - paragraph [ref=e503]: Aug 03, 2026 - 02:06 PM
                  - cell [ref=e504]:
                    - generic [ref=e505]:
                      - button [ref=e507] [cursor=pointer]:
                        - img [ref=e508]
                      - button [ref=e513] [cursor=pointer]:
                        - img [ref=e514]
                - row [ref=e516]:
                  - cell [ref=e517]: tttttt
                  - cell [ref=e518]: website
                  - cell [ref=e519]: en
                  - cell [ref=e520]: vertical
                  - cell [ref=e521]:
                    - generic [ref=e522]:
                      - img [ref=e523]
                      - button [ref=e525] [cursor=pointer]:
                        - img [ref=e526]
                  - cell [ref=e529]: _
                  - cell [ref=e530]:
                    - switch [ref=e533] [cursor=pointer]
                  - cell [ref=e536]:
                    - generic [ref=e537]:
                      - generic [ref=e538]:
                        - paragraph [ref=e539]: "Created:"
                        - paragraph [ref=e540]: Jun 04, 2026 - 01:51 PM
                      - generic [ref=e541]:
                        - paragraph [ref=e542]: "Updated:"
                        - paragraph [ref=e543]: Jun 04, 2026 - 01:51 PM
                  - cell [ref=e544]:
                    - generic [ref=e545]:
                      - button [ref=e547] [cursor=pointer]:
                        - img [ref=e548]
                      - button [ref=e553] [cursor=pointer]:
                        - img [ref=e554]
                - row [ref=e556]:
                  - cell [ref=e557]: GTYGTYGTYGTYGTY
                  - cell [ref=e558]: mobile
                  - cell [ref=e559]: ar
                  - cell [ref=e560]: vertical
                  - cell [ref=e561]:
                    - generic [ref=e562]:
                      - img [ref=e563]
                      - button [ref=e565] [cursor=pointer]:
                        - img [ref=e566]
                  - cell [ref=e569]:
                    - link [ref=e570] [cursor=pointer]:
                      - /url: " https://aqaryaid.com/ar/listing/sale/listingProject/5555"
                      - text: Link
                  - cell [ref=e571]:
                    - switch [checked] [ref=e574] [cursor=pointer]
                  - cell [ref=e577]:
                    - generic [ref=e578]:
                      - generic [ref=e579]:
                        - paragraph [ref=e580]: "Created:"
                        - paragraph [ref=e581]: Jun 05, 2026 - 05:12 PM
                      - generic [ref=e582]:
                        - paragraph [ref=e583]: "Updated:"
                        - paragraph [ref=e584]: Jun 05, 2026 - 05:12 PM
                  - cell [ref=e585]:
                    - generic [ref=e586]:
                      - button [ref=e588] [cursor=pointer]:
                        - img [ref=e589]
                      - button [ref=e594] [cursor=pointer]:
                        - img [ref=e595]
                - row [ref=e597]:
                  - cell [ref=e598]: GTYGTYGTYGTYGTY
                  - cell [ref=e599]: mobile
                  - cell [ref=e600]: ar
                  - cell [ref=e601]: vertical
                  - cell [ref=e602]:
                    - generic [ref=e603]:
                      - img [ref=e604]
                      - button [ref=e606] [cursor=pointer]:
                        - img [ref=e607]
                  - cell [ref=e610]:
                    - link [ref=e611] [cursor=pointer]:
                      - /url: " https://aqaryaid.com/ar/listing/sale/listingProject/5555"
                      - text: Link
                  - cell [ref=e612]:
                    - switch [checked] [ref=e615] [cursor=pointer]
                  - cell [ref=e618]:
                    - generic [ref=e619]:
                      - generic [ref=e620]:
                        - paragraph [ref=e621]: "Created:"
                        - paragraph [ref=e622]: Jun 06, 2026 - 11:56 AM
                      - generic [ref=e623]:
                        - paragraph [ref=e624]: "Updated:"
                        - paragraph [ref=e625]: Jun 06, 2026 - 11:56 AM
                  - cell [ref=e626]:
                    - generic [ref=e627]:
                      - button [ref=e629] [cursor=pointer]:
                        - img [ref=e630]
                      - button [ref=e635] [cursor=pointer]:
                        - img [ref=e636]
                - row [ref=e638]:
                  - cell [ref=e639]: xxxxxxxxxxxxxxx
                  - cell [ref=e640]: website
                  - cell [ref=e641]: en
                  - cell [ref=e642]: vertical
                  - cell [ref=e643]:
                    - generic [ref=e644]:
                      - img [ref=e645]
                      - button [ref=e647] [cursor=pointer]:
                        - img [ref=e648]
                  - cell [ref=e651]:
                    - link [ref=e652] [cursor=pointer]:
                      - /url: https://aqaryaid.com/ar/listieeng/sale/listingProject/353
                      - text: Link
                  - cell [ref=e653]:
                    - switch [checked] [ref=e656] [cursor=pointer]
                  - cell [ref=e659]:
                    - generic [ref=e660]:
                      - generic [ref=e661]:
                        - paragraph [ref=e662]: "Created:"
                        - paragraph [ref=e663]: Jun 09, 2026 - 02:59 PM
                      - generic [ref=e664]:
                        - paragraph [ref=e665]: "Updated:"
                        - paragraph [ref=e666]: Jun 09, 2026 - 02:59 PM
                  - cell [ref=e667]:
                    - generic [ref=e668]:
                      - button [ref=e670] [cursor=pointer]:
                        - img [ref=e671]
                      - button [ref=e676] [cursor=pointer]:
                        - img [ref=e677]
                - row [ref=e679]:
                  - cell [ref=e680]: jgytutt
                  - cell [ref=e681]: website
                  - cell [ref=e682]: en
                  - cell [ref=e683]: vertical
                  - cell [ref=e684]:
                    - generic [ref=e685]:
                      - img [ref=e686]
                      - button [ref=e688] [cursor=pointer]:
                        - img [ref=e689]
                  - cell [ref=e692]:
                    - link [ref=e693] [cursor=pointer]:
                      - /url: https://chatgpt.com/
                      - text: Link
                  - cell [ref=e694]:
                    - switch [checked] [ref=e697] [cursor=pointer]
                  - cell [ref=e700]:
                    - generic [ref=e701]:
                      - generic [ref=e702]:
                        - paragraph [ref=e703]: "Created:"
                        - paragraph [ref=e704]: Jun 10, 2026 - 02:39 PM
                      - generic [ref=e705]:
                        - paragraph [ref=e706]: "Updated:"
                        - paragraph [ref=e707]: Jun 10, 2026 - 02:39 PM
                  - cell [ref=e708]:
                    - generic [ref=e709]:
                      - button [ref=e711] [cursor=pointer]:
                        - img [ref=e712]
                      - button [ref=e717] [cursor=pointer]:
                        - img [ref=e718]
            - generic [ref=e723]:
              - generic [ref=e724]:
                - generic [ref=e725]: Rows per page
                - generic [ref=e726]:
                  - combobox [ref=e727] [cursor=pointer]: "10"
                  - textbox: "10"
                  - img
              - generic [ref=e728]: 1-10 of 95
              - generic [ref=e729]:
                - generic [ref=e730]:
                  - button [disabled]:
                    - img
                - generic [ref=e731]:
                  - button [disabled]:
                    - img
                - button [ref=e733] [cursor=pointer]:
                  - img [ref=e734]
                - button [ref=e737] [cursor=pointer]:
                  - img [ref=e738]
  - dialog [active] [ref=e741]:
    - generic [ref=e742]:
      - paragraph [ref=e743]: Create Ad
      - button [ref=e744] [cursor=pointer]:
        - img [ref=e745]
    - generic [ref=e748]:
      - generic [ref=e749]:
        - heading "Ad" [level=4] [ref=e751]
        - generic [ref=e753]:
          - generic [ref=e754]:
            - text: Ad Title
            - generic [ref=e755]: "*"
          - generic [ref=e757]:
            - textbox "Enter ad title" [ref=e758]
            - group
          - paragraph [ref=e759]: Ad title must be at least 3 characters
        - generic [ref=e761]:
          - generic [ref=e762]:
            - text: Platform
            - generic [ref=e763]: "*"
          - generic [ref=e766]:
            - combobox "Select platform" [ref=e767]
            - button "Open" [ref=e769] [cursor=pointer]:
              - img [ref=e770]
            - group
          - paragraph [ref=e772]: Please Select platform
        - generic [ref=e774]:
          - generic [ref=e775]:
            - text: Language
            - generic [ref=e776]: "*"
          - generic [ref=e779]:
            - combobox "Select language" [ref=e780]
            - button "Open" [ref=e782] [cursor=pointer]:
              - img [ref=e783]
            - group
          - paragraph [ref=e785]: Select language
        - generic [ref=e787]:
          - generic [ref=e788]:
            - text: Direction
            - generic [ref=e789]: "*"
          - generic [ref=e792]:
            - combobox "Select direction" [ref=e793]
            - button "Open" [ref=e795] [cursor=pointer]:
              - img [ref=e796]
            - group
          - paragraph [ref=e798]: Please Select direction
        - generic [ref=e800]:
          - generic [ref=e801]:
            - text: Upload Ad
            - generic [ref=e802]: "*"
          - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB" [ref=e803]:
            - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB"
            - generic [ref=e804] [cursor=pointer]:
              - img [ref=e806]
              - paragraph [ref=e808]: Drag & drop or click to upload
              - paragraph [ref=e809]: PDF, JPG, PNG up to 2MB
          - paragraph [ref=e810]: Max file size is 2MB
        - generic [ref=e812] [cursor=pointer]:
          - switch "Show Ad" [checked] [ref=e815]
          - generic [ref=e818]: Show Ad
        - generic [ref=e820]:
          - generic [ref=e821]: Redirect Link
          - generic [ref=e823]:
            - textbox "Enter redirect link" [ref=e824]
            - group
          - paragraph [ref=e825]: Please enter redirect link
        - generic [ref=e827]:
          - generic [ref=e828]:
            - text: Description
            - generic [ref=e829]: "*"
          - generic [ref=e831]:
            - textbox "Enter description" [ref=e832]
            - group
          - paragraph [ref=e833]: Description is required.
      - generic [ref=e835]:
        - button "Cancel" [ref=e836] [cursor=pointer]
        - button "submit" [ref=e837] [cursor=pointer]: submit
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
> 36 |         await randomTextGenerator(this.page, this.adTitle);
     |         ^ ReferenceError: randomTextGenerator is not defined
  37 |         await dropdownSelection(this.page, this.platform, 'Website');
  38 |         await dropdownSelection(this.page, this.language, 'En');
  39 |         await dropdownSelection(this.page, this.direction, 'Horizontal');
  40 |         await this.uploadAd.click();
  41 |         await this.page.locator('input[type="file"]').setInputFiles('test-file.txt');
  42 |         await this.showAd.click();
  43 |         await randomTextGenerator(this.page, this.redirectLink);
  44 |         await randomTextGenerator(this.page, this.description);
  45 |         await this.submitBtn.click();
  46 |         await expect(this.page.getByText('Ad created successfully')).toBeVisible();
  47 |         // await this.mandatoryFieldValidation(this.page, this.submitBtn, this.mandatoryPlatform); 
  48 | 
  49 | 
  50 |     }
  51 | }
  52 | 
```