# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Banners.spec.js >> This test creates a new banner
- Location: tests\Listing\Marketing\Banners.spec.js:4:5

# Error details

```
ReferenceError: q is not defined
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
        - generic [ref=e210]:
          - heading [level=3] [ref=e212]: Marketing
          - heading [level=4] [ref=e213]: Create, manage, and track push notifications and banners
      - tablist [ref=e216]:
        - tab [ref=e217] [cursor=pointer]: Notifications
        - tab [selected] [ref=e218] [cursor=pointer]: Banners
      - generic [ref=e220]:
        - generic [ref=e221]:
          - paragraph [ref=e224]: Manage Banners
          - button [ref=e226] [cursor=pointer]:
            - img [ref=e228]
            - text: Create Banner
        - generic [ref=e230]:
          - generic [ref=e231]:
            - generic [ref=e234]:
              - textbox [ref=e235]:
                - /placeholder: Search
              - group
            - button [ref=e238] [cursor=pointer]:
              - img [ref=e240]
              - text: Export
          - generic [ref=e242]:
            - table [ref=e244]:
              - rowgroup [ref=e245]:
                - row [ref=e246]:
                  - columnheader [ref=e247]:
                    - generic [ref=e248]:
                      - generic [ref=e250]: Banner Title
                      - button [ref=e252] [cursor=pointer]:
                        - img [ref=e253]
                  - columnheader [ref=e255]:
                    - generic [ref=e256]:
                      - generic [ref=e258]: Ratio
                      - button [ref=e260] [cursor=pointer]:
                        - img [ref=e261]
                  - columnheader [ref=e263]:
                    - generic [ref=e264]:
                      - generic [ref=e266]: Platform
                      - button [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                  - columnheader [ref=e271]:
                    - generic [ref=e272]:
                      - generic [ref=e274]: Language
                      - button [ref=e276] [cursor=pointer]:
                        - img [ref=e277]
                  - columnheader [ref=e279]:
                    - generic [ref=e280]:
                      - generic [ref=e282]: Redirect Link
                      - button [ref=e284] [cursor=pointer]:
                        - img [ref=e285]
                  - columnheader [ref=e287]:
                    - generic [ref=e288]:
                      - generic [ref=e290]: Status
                      - button [ref=e292] [cursor=pointer]:
                        - img [ref=e293]
                  - columnheader [ref=e295]:
                    - generic [ref=e296]:
                      - generic [ref=e298]: Date & Time
                      - button [ref=e300] [cursor=pointer]:
                        - img [ref=e301]
                  - columnheader [ref=e303]:
                    - generic [ref=e307]: Actions
              - rowgroup [ref=e308]:
                - row [ref=e309]:
                  - cell [ref=e310]:
                    - generic [ref=e311]:
                      - img [ref=e313]
                      - paragraph [ref=e314]: mZi8tIOxX
                  - cell [ref=e315]: 1:1
                  - cell [ref=e316]: website
                  - cell [ref=e317]: en
                  - cell [ref=e318]: _
                  - cell [ref=e319]:
                    - generic [ref=e321]: pending_quality_approval
                  - cell [ref=e322]:
                    - generic [ref=e323]:
                      - generic [ref=e324]:
                        - paragraph [ref=e325]: "Created:"
                        - paragraph [ref=e326]: Aug 15, 2026 - 04:14 PM
                      - generic [ref=e327]:
                        - paragraph [ref=e328]: "Updated:"
                        - paragraph [ref=e329]: Aug 15, 2026 - 04:14 PM
                  - cell [ref=e330]:
                    - generic [ref=e331]:
                      - button [ref=e333] [cursor=pointer]:
                        - img [ref=e334]
                      - button [ref=e338] [cursor=pointer]:
                        - img [ref=e339]
                      - button [ref=e344] [cursor=pointer]:
                        - img [ref=e345]
                - row [ref=e347]:
                  - cell [ref=e348]:
                    - generic [ref=e349]:
                      - img [ref=e351]
                      - paragraph [ref=e352]: Updated Compatible fault-tolerant synergy 1786765640382
                  - cell [ref=e353]: 1:1
                  - cell [ref=e354]: mobile
                  - cell [ref=e355]: en
                  - cell [ref=e356]:
                    - link [ref=e357] [cursor=pointer]:
                      - /url: https://sociable-disposer.info
                      - text: Updated Compatible fault-tolerant synergy 1786765640382
                  - cell [ref=e358]:
                    - generic [ref=e360]: pending_quality_approval
                  - cell [ref=e361]:
                    - generic [ref=e362]:
                      - generic [ref=e363]:
                        - paragraph [ref=e364]: "Created:"
                        - paragraph [ref=e365]: Aug 15, 2026 - 07:47 AM
                      - generic [ref=e366]:
                        - paragraph [ref=e367]: "Updated:"
                        - paragraph [ref=e368]: Aug 15, 2026 - 07:47 AM
                  - cell [ref=e369]:
                    - generic [ref=e370]:
                      - button [ref=e372] [cursor=pointer]:
                        - img [ref=e373]
                      - button [ref=e377] [cursor=pointer]:
                        - img [ref=e378]
                      - button [ref=e383] [cursor=pointer]:
                        - img [ref=e384]
                - row [ref=e386]:
                  - cell [ref=e387]:
                    - generic [ref=e388]:
                      - img [ref=e390]
                      - paragraph [ref=e391]: Updated Distributed homogeneous website 1786681018227
                  - cell [ref=e392]: 16:9
                  - cell [ref=e393]: mobile
                  - cell [ref=e394]: en
                  - cell [ref=e395]:
                    - link [ref=e396] [cursor=pointer]:
                      - /url: https://steel-birdbath.com
                      - text: Updated Distributed homogeneous website 1786681018227
                  - cell [ref=e397]:
                    - generic [ref=e399]: pending_quality_approval
                  - cell [ref=e400]:
                    - generic [ref=e401]:
                      - generic [ref=e402]:
                        - paragraph [ref=e403]: "Created:"
                        - paragraph [ref=e404]: Aug 14, 2026 - 08:16 AM
                      - generic [ref=e405]:
                        - paragraph [ref=e406]: "Updated:"
                        - paragraph [ref=e407]: Aug 14, 2026 - 08:16 AM
                  - cell [ref=e408]:
                    - generic [ref=e409]:
                      - button [ref=e411] [cursor=pointer]:
                        - img [ref=e412]
                      - button [ref=e416] [cursor=pointer]:
                        - img [ref=e417]
                      - button [ref=e422] [cursor=pointer]:
                        - img [ref=e423]
                - row [ref=e425]:
                  - cell [ref=e426]:
                    - generic [ref=e427]:
                      - img [ref=e429]
                      - paragraph [ref=e430]: Updated Operative 24 hour infrastructure 1786622444655
                  - cell [ref=e431]: 1:1
                  - cell [ref=e432]: mobile
                  - cell [ref=e433]: ar
                  - cell [ref=e434]:
                    - link [ref=e435] [cursor=pointer]:
                      - /url: https://snoopy-lobster.com
                      - text: Updated Operative 24 hour infrastructure 1786622444655
                  - cell [ref=e436]:
                    - generic [ref=e438]: pending_quality_approval
                  - cell [ref=e439]:
                    - generic [ref=e440]:
                      - generic [ref=e441]:
                        - paragraph [ref=e442]: "Created:"
                        - paragraph [ref=e443]: Aug 13, 2026 - 04:00 PM
                      - generic [ref=e444]:
                        - paragraph [ref=e445]: "Updated:"
                        - paragraph [ref=e446]: Aug 13, 2026 - 04:00 PM
                  - cell [ref=e447]:
                    - generic [ref=e448]:
                      - button [ref=e450] [cursor=pointer]:
                        - img [ref=e451]
                      - button [ref=e455] [cursor=pointer]:
                        - img [ref=e456]
                      - button [ref=e461] [cursor=pointer]:
                        - img [ref=e462]
                - row [ref=e464]:
                  - cell [ref=e465]:
                    - generic [ref=e466]:
                      - img [ref=e468]
                      - paragraph [ref=e469]: Updated Self-enabling clear-thinking access 1786619278072
                  - cell [ref=e470]: 1:1
                  - cell [ref=e471]: website
                  - cell [ref=e472]: ar
                  - cell [ref=e473]:
                    - link [ref=e474] [cursor=pointer]:
                      - /url: https://decisive-horst.com/
                      - text: Updated Self-enabling clear-thinking access 1786619278072
                  - cell [ref=e475]:
                    - generic [ref=e477]: pending_quality_approval
                  - cell [ref=e478]:
                    - generic [ref=e479]:
                      - generic [ref=e480]:
                        - paragraph [ref=e481]: "Created:"
                        - paragraph [ref=e482]: Aug 13, 2026 - 03:07 PM
                      - generic [ref=e483]:
                        - paragraph [ref=e484]: "Updated:"
                        - paragraph [ref=e485]: Aug 13, 2026 - 03:07 PM
                  - cell [ref=e486]:
                    - generic [ref=e487]:
                      - button [ref=e489] [cursor=pointer]:
                        - img [ref=e490]
                      - button [ref=e494] [cursor=pointer]:
                        - img [ref=e495]
                      - button [ref=e500] [cursor=pointer]:
                        - img [ref=e501]
                - row [ref=e503]:
                  - cell [ref=e504]:
                    - generic [ref=e505]:
                      - img [ref=e507]
                      - paragraph [ref=e508]: Updated Public-key human-resource projection 1786618704802
                  - cell [ref=e509]: 1:1
                  - cell [ref=e510]: mobile
                  - cell [ref=e511]: ar
                  - cell [ref=e512]:
                    - link [ref=e513] [cursor=pointer]:
                      - /url: https://spirited-ravioli.name
                      - text: Updated Public-key human-resource projection 1786618704802
                  - cell [ref=e514]:
                    - generic [ref=e516]: pending_quality_approval
                  - cell [ref=e517]:
                    - generic [ref=e518]:
                      - generic [ref=e519]:
                        - paragraph [ref=e520]: "Created:"
                        - paragraph [ref=e521]: Aug 13, 2026 - 03:01 PM
                      - generic [ref=e522]:
                        - paragraph [ref=e523]: "Updated:"
                        - paragraph [ref=e524]: Aug 13, 2026 - 03:01 PM
                  - cell [ref=e525]:
                    - generic [ref=e526]:
                      - button [ref=e528] [cursor=pointer]:
                        - img [ref=e529]
                      - button [ref=e533] [cursor=pointer]:
                        - img [ref=e534]
                      - button [ref=e539] [cursor=pointer]:
                        - img [ref=e540]
                - row [ref=e542]:
                  - cell [ref=e543]:
                    - generic [ref=e544]:
                      - img [ref=e546]
                      - paragraph [ref=e547]: Updated Persistent coherent internet solution 1786618600735
                  - cell [ref=e548]: 16:9
                  - cell [ref=e549]: mobile
                  - cell [ref=e550]: en
                  - cell [ref=e551]:
                    - link [ref=e552] [cursor=pointer]:
                      - /url: https://clear-cut-minion.com/
                      - text: Updated Persistent coherent internet solution 1786618600735
                  - cell [ref=e553]:
                    - generic [ref=e555]: pending_quality_approval
                  - cell [ref=e556]:
                    - generic [ref=e557]:
                      - generic [ref=e558]:
                        - paragraph [ref=e559]: "Created:"
                        - paragraph [ref=e560]: Aug 13, 2026 - 02:56 PM
                      - generic [ref=e561]:
                        - paragraph [ref=e562]: "Updated:"
                        - paragraph [ref=e563]: Aug 13, 2026 - 02:56 PM
                  - cell [ref=e564]:
                    - generic [ref=e565]:
                      - button [ref=e567] [cursor=pointer]:
                        - img [ref=e568]
                      - button [ref=e572] [cursor=pointer]:
                        - img [ref=e573]
                      - button [ref=e578] [cursor=pointer]:
                        - img [ref=e579]
                - row [ref=e581]:
                  - cell [ref=e582]:
                    - generic [ref=e583]:
                      - img [ref=e585]
                      - paragraph [ref=e586]: Updated Stand-alone interactive system engine 1786618158435
                  - cell [ref=e587]: 1:1
                  - cell [ref=e588]: website
                  - cell [ref=e589]: ar
                  - cell [ref=e590]:
                    - link [ref=e591] [cursor=pointer]:
                      - /url: https://mean-cinema.org
                      - text: Updated Stand-alone interactive system engine 1786618158435
                  - cell [ref=e592]:
                    - generic [ref=e594]: pending_quality_approval
                  - cell [ref=e595]:
                    - generic [ref=e596]:
                      - generic [ref=e597]:
                        - paragraph [ref=e598]: "Created:"
                        - paragraph [ref=e599]: Aug 13, 2026 - 02:52 PM
                      - generic [ref=e600]:
                        - paragraph [ref=e601]: "Updated:"
                        - paragraph [ref=e602]: Aug 13, 2026 - 02:52 PM
                  - cell [ref=e603]:
                    - generic [ref=e604]:
                      - button [ref=e606] [cursor=pointer]:
                        - img [ref=e607]
                      - button [ref=e611] [cursor=pointer]:
                        - img [ref=e612]
                      - button [ref=e617] [cursor=pointer]:
                        - img [ref=e618]
                - row [ref=e620]:
                  - cell [ref=e621]:
                    - generic [ref=e622]:
                      - img [ref=e624]
                      - paragraph [ref=e625]: Updated Organized attitude-oriented pricing structure 1786618039892
                  - cell [ref=e626]: 1:1
                  - cell [ref=e627]: mobile
                  - cell [ref=e628]: ar
                  - cell [ref=e629]:
                    - link [ref=e630] [cursor=pointer]:
                      - /url: https://twin-annual.info
                      - text: Updated Organized attitude-oriented pricing structure 1786618039892
                  - cell [ref=e631]:
                    - generic [ref=e633]: pending_quality_approval
                  - cell [ref=e634]:
                    - generic [ref=e635]:
                      - generic [ref=e636]:
                        - paragraph [ref=e637]: "Created:"
                        - paragraph [ref=e638]: Aug 13, 2026 - 02:47 PM
                      - generic [ref=e639]:
                        - paragraph [ref=e640]: "Updated:"
                        - paragraph [ref=e641]: Aug 13, 2026 - 02:47 PM
                  - cell [ref=e642]:
                    - generic [ref=e643]:
                      - button [ref=e645] [cursor=pointer]:
                        - img [ref=e646]
                      - button [ref=e650] [cursor=pointer]:
                        - img [ref=e651]
                      - button [ref=e656] [cursor=pointer]:
                        - img [ref=e657]
                - row [ref=e659]:
                  - cell [ref=e660]:
                    - generic [ref=e661]:
                      - img [ref=e663]
                      - paragraph [ref=e664]: Updated Grass-roots contextually-based capability 1786617699212
                  - cell [ref=e665]: 1:1
                  - cell [ref=e666]: website
                  - cell [ref=e667]: en
                  - cell [ref=e668]:
                    - link [ref=e669] [cursor=pointer]:
                      - /url: https://average-presume.info
                      - text: Updated Grass-roots contextually-based capability 1786617699212
                  - cell [ref=e670]:
                    - generic [ref=e672]: pending_quality_approval
                  - cell [ref=e673]:
                    - generic [ref=e674]:
                      - generic [ref=e675]:
                        - paragraph [ref=e676]: "Created:"
                        - paragraph [ref=e677]: Aug 13, 2026 - 02:44 PM
                      - generic [ref=e678]:
                        - paragraph [ref=e679]: "Updated:"
                        - paragraph [ref=e680]: Aug 13, 2026 - 02:44 PM
                  - cell [ref=e681]:
                    - generic [ref=e682]:
                      - button [ref=e684] [cursor=pointer]:
                        - img [ref=e685]
                      - button [ref=e689] [cursor=pointer]:
                        - img [ref=e690]
                      - button [ref=e695] [cursor=pointer]:
                        - img [ref=e696]
            - generic [ref=e701]:
              - generic [ref=e702]:
                - generic [ref=e703]: Rows per page
                - generic [ref=e704]:
                  - combobox [ref=e705] [cursor=pointer]: "10"
                  - textbox: "10"
                  - img
              - generic [ref=e706]: 1-10 of 73
              - generic [ref=e707]:
                - generic [ref=e708]:
                  - button [disabled]:
                    - img
                - generic [ref=e709]:
                  - button [disabled]:
                    - img
                - button [ref=e711] [cursor=pointer]:
                  - img [ref=e712]
                - button [ref=e715] [cursor=pointer]:
                  - img [ref=e716]
  - dialog [active] [ref=e719]:
    - generic [ref=e720]:
      - paragraph [ref=e721]: Create Banner
      - button [ref=e722] [cursor=pointer]:
        - img [ref=e723]
    - generic [ref=e726]:
      - generic [ref=e727]:
        - heading "Banners" [level=4] [ref=e729]
        - generic [ref=e731]:
          - generic [ref=e732]:
            - text: Banner Title
            - generic [ref=e733]: "*"
          - generic [ref=e735]:
            - textbox "Enter banner title" [ref=e736]
            - group
          - paragraph [ref=e737]: Banner title must be at least 3 characters
        - generic [ref=e739]:
          - generic [ref=e740]:
            - text: Banner Ratio
            - generic [ref=e741]: "*"
          - generic [ref=e744]:
            - combobox "Select banner ratio" [ref=e745]
            - button "Open" [ref=e747] [cursor=pointer]:
              - img [ref=e748]
            - group
          - paragraph [ref=e750]: Select banner ratio
        - generic [ref=e752]:
          - generic [ref=e753]:
            - text: Platform
            - generic [ref=e754]: "*"
          - generic [ref=e757]:
            - combobox "Select platform" [ref=e758]
            - button "Open" [ref=e760] [cursor=pointer]:
              - img [ref=e761]
            - group
          - paragraph [ref=e763]: Please Select platform
        - generic [ref=e765]:
          - generic [ref=e766]:
            - text: Language
            - generic [ref=e767]: "*"
          - generic [ref=e770]:
            - combobox "Select language" [ref=e771]
            - button "Open" [ref=e773] [cursor=pointer]:
              - img [ref=e774]
            - group
          - paragraph [ref=e776]: Select language
        - generic [ref=e778]:
          - generic [ref=e779]:
            - text: Upload Design
            - generic [ref=e780]: "*"
          - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB" [ref=e781]:
            - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB"
            - generic [ref=e782] [cursor=pointer]:
              - img [ref=e784]
              - paragraph [ref=e786]: Drag & drop or click to upload
              - paragraph [ref=e787]: PDF, JPG, PNG up to 2MB
          - paragraph [ref=e788]: Max file size is 2MB
        - generic [ref=e790]:
          - generic [ref=e791]: Redirect Link
          - generic [ref=e793]:
            - textbox "Enter redirect link" [ref=e794]
            - group
          - paragraph [ref=e795]: Please enter redirect link
        - generic [ref=e797]:
          - generic [ref=e798]: Description
          - generic [ref=e800]:
            - textbox "Enter description" [ref=e801]
            - group
          - paragraph [ref=e802]: Please enter description
      - generic [ref=e804]:
        - button "Cancel" [ref=e805] [cursor=pointer]
        - button "submit" [ref=e806] [cursor=pointer]: submit
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { Helpers } from "./ReusableFunctions/helpers";
  3  | import { Listing } from "./Listing";
  4  | 
  5  | export class Banners extends Helpers {
  6  | 
  7  |     constructor(page) {
  8  |         super(page);
  9  |         this.page = page;
  10 |         this.bannersTab = page.getByRole('tab', { name: 'Banners' });
  11 |         this.createBannerBtn = page.getByRole('button', { name: 'Create Banner' });
  12 |         this.assertBannertext = page.getByRole('dialog').getByText('Create Banner');
  13 |         this.submitBtn = page.getByRole('button', { name: 'submit' })
  14 | 
  15 |         //Mandatory Fields Locators
  16 |         this.bannertitleMandatory = page.getByText('Banner Title *');
  17 |         this.bannerRatioMandatory = page.getByText('Banner Ratio *');
  18 |         this.platformMandatory = page.getByText('Platform *');
  19 |         this.languageMandatory = page.getByText('Language *');
  20 |         this.designAttachmentMandatory = page.getByText('Upload Design *');
  21 | 
  22 | 
  23 | 
  24 |         this.bannerTitle = page.getByRole('textbox', { name: 'Enter banner title' });
  25 |         this.bannerRatio = page.getByRole('combobox', { name: 'Select banner ratio' });
  26 |         this.platform = page.getByRole('combobox', { name: 'Select platform' });
  27 |         this.language = page.getByRole('combobox', { name: 'Select language' });
  28 |         this.designAttachment = page.locator('#file, input[type="file"]').first();
  29 |         this.redirectLink = page.getByRole('textbox', { name: 'Enter redirect link' });
  30 |         this.description = page.getByRole('textbox', { name: 'Enter description' });
  31 |         this.search = page.getByRole('textbox', { name: 'Search' });
  32 | 
  33 |     }
  34 | 
  35 |     async mandatoryFields() {
  36 |         const listInstance = new Listing(this.page);
  37 |         await listInstance.navigatetoMarketing();
  38 |         await expect(this.bannersTab).toBeVisible();
  39 |         await this.bannersTab.click();
  40 |         await expect(this.createBannerBtn).toBeVisible();
  41 |         await this.createBannerBtn.click();
  42 |         await expect(this.assertBannertext).toBeVisible();
  43 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.bannertitleMandatory);
  44 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.bannerRatioMandatory);
  45 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.platformMandatory);
  46 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.languageMandatory);
> 47 |         await this.mandatoryFieldValidation(this.page, this.submitBtn, this.designAttachmentMandatory);q
     |                                                                                                        ^ ReferenceError: q is not defined
  48 |         console.log('Mandatory Fields Verified successfully');
  49 |     }
  50 | 
  51 |     async createBanner() {
  52 | 
  53 |         await this.randomStringgenerator(this.page, this.bannerTitle);
  54 |         this.bannertitleInput = await this.bannerTitle.inputValue();
  55 |         await this.selectfromDropdown(this.page, this.bannerRatio, '1:1');
  56 |         await this.selectfromDropdown(this.page, this.platform, 'Website');
  57 |         await this.selectfromDropdown(this.page, this.language, 'En');
  58 |         await this.uploadAttachment(this.page, this.designAttachment);
  59 |         await this.randomStringgenerator(this.page, this.redirectLink);
  60 |         await this.randomStringgenerator(this.page, this.description);
  61 |         await this.submitBtn.click();
  62 |         console.log('Banner created successfully');
  63 | 
  64 |         // await expect(this.page.getByText('Banner created successfully')).toBeVisible();
  65 | 
  66 | 
  67 |     }
  68 | 
  69 |     async verifyCreatedBanner() {
  70 |         await this.search.fill(this.bannertitleInput);
  71 |         await expect(this.page.getByRole('cell', { name: this.bannertitleInput }).getByRole('paragraph')).toBeVisible();
  72 |         console.log('Banner Verified successfully');
  73 |     }
  74 | }
```