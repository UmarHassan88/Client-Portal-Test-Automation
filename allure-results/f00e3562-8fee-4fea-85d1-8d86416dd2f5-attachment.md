# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Notification.spec.js >> This test test automates the Notification Section
- Location: tests\Listing\Marketing\Notification.spec.js:4:5

# Error details

```
Error: locator.setInputFiles: Error: Node is not an HTMLInputElement
Call log:
  - waiting for locator('label').filter({ hasText: 'Drag & drop or click to' })
    - locator resolved to <label for="file" role="button" override="[object Object]" class="sc-bRKDuR bCZExY  ">…</label>

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
        - generic [ref=e184]:
          - generic [ref=e185]: aidadmin
          - generic [ref=e186]: admin@aqaryinvestment.com
      - generic [ref=e187]:
        - button [ref=e188] [cursor=pointer]:
          - img [ref=e189]
        - button [ref=e191] [cursor=pointer]:
          - img [ref=e192]
        - button [ref=e195] [cursor=pointer]:
          - img [ref=e196]
        - button [ref=e201] [cursor=pointer]:
          - img [ref=e202]
    - main [ref=e204]:
      - generic [ref=e206]:
        - navigation [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - paragraph [ref=e210]: Manage Ads
        - generic [ref=e211]:
          - heading [level=3] [ref=e213]: Marketing
          - heading [level=4] [ref=e214]: Create, manage, and track push notifications and banners
      - tablist [ref=e217]:
        - tab [selected] [ref=e218] [cursor=pointer]: Notifications
        - tab [ref=e219] [cursor=pointer]: Banners
      - generic [ref=e221]:
        - generic [ref=e222]:
          - paragraph [ref=e225]: Manage Notifications
          - button [ref=e227] [cursor=pointer]:
            - img [ref=e229]
            - text: Create Notification
        - generic [ref=e231]:
          - generic [ref=e232]:
            - generic [ref=e235]:
              - textbox [ref=e236]:
                - /placeholder: Search
              - group
            - button [ref=e239] [cursor=pointer]:
              - img [ref=e241]
              - text: Export
          - generic [ref=e243]:
            - table [ref=e245]:
              - rowgroup [ref=e246]:
                - row [ref=e247]:
                  - columnheader [ref=e248]:
                    - generic [ref=e249]:
                      - generic [ref=e251]: Notification Title
                      - button [ref=e253] [cursor=pointer]:
                        - img [ref=e254]
                  - columnheader [ref=e256]:
                    - generic [ref=e257]:
                      - generic [ref=e259]: Audience
                      - button [ref=e261] [cursor=pointer]:
                        - img [ref=e262]
                  - columnheader [ref=e264]:
                    - generic [ref=e265]:
                      - generic [ref=e267]: Status
                      - button [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                  - columnheader [ref=e272]:
                    - generic [ref=e273]:
                      - generic [ref=e275]: Push Date & Time
                      - button [ref=e277] [cursor=pointer]:
                        - img [ref=e278]
                  - columnheader [ref=e280]:
                    - generic [ref=e284]: Actions
              - rowgroup [ref=e285]:
                - row [ref=e286]:
                  - cell [ref=e287]: Updated conscendo nulla cubo thymbra 1786534265243
                  - cell [ref=e288]: Custom
                  - cell [ref=e289]:
                    - generic [ref=e291]: Sent
                  - cell [ref=e292]: 12 Aug 2026, 03:31 PM
                  - cell [ref=e293]:
                    - generic [ref=e294]:
                      - button [ref=e296] [cursor=pointer]:
                        - img [ref=e297]
                      - button [ref=e301] [cursor=pointer]:
                        - img [ref=e302]
                        - text: Re-Push
                      - button [ref=e307] [cursor=pointer]:
                        - img [ref=e308]
                      - button [ref=e313] [cursor=pointer]:
                        - img [ref=e314]
                - row [ref=e316]:
                  - cell [ref=e317]: Updated dens pax vivo corrupti 1786534234441
                  - cell [ref=e318]: Custom
                  - cell [ref=e319]:
                    - generic [ref=e321]: Sent
                  - cell [ref=e322]: 12 Aug 2026, 03:30 PM
                  - cell [ref=e323]:
                    - generic [ref=e324]:
                      - button [ref=e326] [cursor=pointer]:
                        - img [ref=e327]
                      - button [ref=e331] [cursor=pointer]:
                        - img [ref=e332]
                        - text: Re-Push
                      - button [ref=e337] [cursor=pointer]:
                        - img [ref=e338]
                      - button [ref=e343] [cursor=pointer]:
                        - img [ref=e344]
                - row [ref=e346]:
                  - cell [ref=e347]: Updated tergum adaugeo arto civis 1786534169298
                  - cell [ref=e348]: Custom
                  - cell [ref=e349]:
                    - generic [ref=e351]: Sent
                  - cell [ref=e352]: 12 Aug 2026, 03:29 PM
                  - cell [ref=e353]:
                    - generic [ref=e354]:
                      - button [ref=e356] [cursor=pointer]:
                        - img [ref=e357]
                      - button [ref=e361] [cursor=pointer]:
                        - img [ref=e362]
                        - text: Re-Push
                      - button [ref=e367] [cursor=pointer]:
                        - img [ref=e368]
                      - button [ref=e373] [cursor=pointer]:
                        - img [ref=e374]
                - row [ref=e376]:
                  - cell [ref=e377]: Updated decretum vicinus trado turpis 1786534058929
                  - cell [ref=e378]: All
                  - cell [ref=e379]:
                    - generic [ref=e381]: Sent
                  - cell [ref=e382]: 12 Aug 2026, 03:27 PM
                  - cell [ref=e383]:
                    - generic [ref=e384]:
                      - button [ref=e386] [cursor=pointer]:
                        - img [ref=e387]
                      - button [ref=e391] [cursor=pointer]:
                        - img [ref=e392]
                        - text: Re-Push
                      - button [ref=e397] [cursor=pointer]:
                        - img [ref=e398]
                      - button [ref=e403] [cursor=pointer]:
                        - img [ref=e404]
                - row [ref=e406]:
                  - cell [ref=e407]: Updated una inventore verumtamen caritas 1786534017110
                  - cell [ref=e408]: All
                  - cell [ref=e409]:
                    - generic [ref=e411]: Sent
                  - cell [ref=e412]: 12 Aug 2026, 03:26 PM
                  - cell [ref=e413]:
                    - generic [ref=e414]:
                      - button [ref=e416] [cursor=pointer]:
                        - img [ref=e417]
                      - button [ref=e421] [cursor=pointer]:
                        - img [ref=e422]
                        - text: Re-Push
                      - button [ref=e427] [cursor=pointer]:
                        - img [ref=e428]
                      - button [ref=e433] [cursor=pointer]:
                        - img [ref=e434]
                - row [ref=e436]:
                  - cell [ref=e437]: autus speciosus aperte ocer 1786533923336
                  - cell [ref=e438]: Custom
                  - cell [ref=e439]:
                    - generic [ref=e441]: Sent
                  - cell [ref=e442]: 12 Aug 2026, 03:25 PM
                  - cell [ref=e443]:
                    - generic [ref=e444]:
                      - button [ref=e446] [cursor=pointer]:
                        - img [ref=e447]
                      - button [ref=e451] [cursor=pointer]:
                        - img [ref=e452]
                        - text: Re-Push
                      - button [ref=e457] [cursor=pointer]:
                        - img [ref=e458]
                      - button [ref=e463] [cursor=pointer]:
                        - img [ref=e464]
                - row [ref=e466]:
                  - cell [ref=e467]: atrocitas uredo conitor adipiscor 1786533866814
                  - cell [ref=e468]: Custom
                  - cell [ref=e469]:
                    - generic [ref=e471]: Sent
                  - cell [ref=e472]: 12 Aug 2026, 03:24 PM
                  - cell [ref=e473]:
                    - generic [ref=e474]:
                      - button [ref=e476] [cursor=pointer]:
                        - img [ref=e477]
                      - button [ref=e481] [cursor=pointer]:
                        - img [ref=e482]
                        - text: Re-Push
                      - button [ref=e487] [cursor=pointer]:
                        - img [ref=e488]
                      - button [ref=e493] [cursor=pointer]:
                        - img [ref=e494]
                - row [ref=e496]:
                  - cell [ref=e497]: Updated avaritia ustulo asperiores corrupti 1786533522202
                  - cell [ref=e498]: Custom
                  - cell [ref=e499]:
                    - generic [ref=e501]: Sent
                  - cell [ref=e502]: 12 Aug 2026, 03:18 PM
                  - cell [ref=e503]:
                    - generic [ref=e504]:
                      - button [ref=e506] [cursor=pointer]:
                        - img [ref=e507]
                      - button [ref=e511] [cursor=pointer]:
                        - img [ref=e512]
                        - text: Re-Push
                      - button [ref=e517] [cursor=pointer]:
                        - img [ref=e518]
                      - button [ref=e523] [cursor=pointer]:
                        - img [ref=e524]
                - row [ref=e526]:
                  - cell [ref=e527]: Updated textus volubilis totus xiphias 1786533174470
                  - cell [ref=e528]: All
                  - cell [ref=e529]:
                    - generic [ref=e531]: Sent
                  - cell [ref=e532]: 12 Aug 2026, 03:12 PM
                  - cell [ref=e533]:
                    - generic [ref=e534]:
                      - button [ref=e536] [cursor=pointer]:
                        - img [ref=e537]
                      - button [ref=e541] [cursor=pointer]:
                        - img [ref=e542]
                        - text: Re-Push
                      - button [ref=e547] [cursor=pointer]:
                        - img [ref=e548]
                      - button [ref=e553] [cursor=pointer]:
                        - img [ref=e554]
                - row [ref=e556]:
                  - cell [ref=e557]: Updated crux rem temptatio desolo 1786532421735
                  - cell [ref=e558]: Custom
                  - cell [ref=e559]:
                    - generic [ref=e561]: Sent
                  - cell [ref=e562]: 12 Aug 2026, 03:00 PM
                  - cell [ref=e563]:
                    - generic [ref=e564]:
                      - button [ref=e566] [cursor=pointer]:
                        - img [ref=e567]
                      - button [ref=e571] [cursor=pointer]:
                        - img [ref=e572]
                        - text: Re-Push
                      - button [ref=e577] [cursor=pointer]:
                        - img [ref=e578]
                      - button [ref=e583] [cursor=pointer]:
                        - img [ref=e584]
            - generic [ref=e589]:
              - generic [ref=e590]:
                - generic [ref=e591]: Rows per page
                - generic [ref=e592]:
                  - combobox [ref=e593] [cursor=pointer]: "10"
                  - textbox: "10"
                  - img
              - generic [ref=e594]: 1-10 of 47
              - generic [ref=e595]:
                - generic [ref=e596]:
                  - button [disabled]:
                    - img
                - generic [ref=e597]:
                  - button [disabled]:
                    - img
                - button [ref=e599] [cursor=pointer]:
                  - img [ref=e600]
                - button [ref=e603] [cursor=pointer]:
                  - img [ref=e604]
  - dialog [ref=e607]:
    - generic [ref=e608]:
      - paragraph [ref=e609]: Create Notification
      - button [ref=e610] [cursor=pointer]:
        - img [ref=e611]
    - generic [ref=e614]:
      - generic [ref=e615]:
        - heading "Notification" [level=4] [ref=e617]
        - generic [ref=e619]:
          - generic [ref=e620]:
            - text: Notification Title EN
            - generic [ref=e621]: "*"
          - generic [ref=e623]:
            - textbox "Enter notification title" [ref=e624]: Check out our new Listings
            - group
          - paragraph [ref=e625]: Please enter notification title
        - generic [ref=e627]:
          - generic [ref=e628]: Notification Title AR
          - generic [ref=e630]:
            - textbox "Enter notification title" [ref=e631]: Ys2oDy8g0
            - group
          - paragraph [ref=e632]: Please enter notification title
        - generic [ref=e634]:
          - generic [ref=e635]:
            - text: Notification Body EN
            - generic [ref=e636]: "*"
          - generic [ref=e638]:
            - textbox "Enter notification body" [ref=e639]: Check out our new Listings
            - group
          - paragraph [ref=e640]: Please enter notificationbody
        - generic [ref=e642]:
          - generic [ref=e643]: Notification Body AR
          - generic [ref=e645]:
            - textbox "Enter notification body AR" [ref=e646]: EPB7j7ucD
            - group
          - paragraph [ref=e647]: Please enter notificationbody
        - generic [ref=e649]:
          - generic [ref=e650]: Category
          - generic [ref=e653]:
            - combobox "Select category" [active] [ref=e654]: marketing
            - generic [ref=e655]:
              - button "Clear" [ref=e656] [cursor=pointer]:
                - img [ref=e657]
              - button "Open" [ref=e659] [cursor=pointer]:
                - img [ref=e660]
            - group
          - paragraph [ref=e662]: Please Select Category
        - generic [ref=e664]:
          - generic [ref=e665]: Description Image
          - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB" [ref=e666]:
            - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB"
            - generic [ref=e667] [cursor=pointer]:
              - img [ref=e669]
              - paragraph [ref=e671]: Drag & drop or click to upload
              - paragraph [ref=e672]: PDF, JPG, PNG up to 2MB
          - paragraph [ref=e673]: Select ad media file
        - generic [ref=e675]:
          - generic [ref=e676]: Redirect Link
          - generic [ref=e678]:
            - textbox "Enter redirect link" [ref=e679]
            - group
          - paragraph [ref=e680]: Please enter redirect link
        - generic [ref=e683]:
          - generic [ref=e684]: Date and Time
          - tablist [ref=e687]:
            - tab "Push Now" [selected] [ref=e688] [cursor=pointer]
            - tab "Schedule" [ref=e689] [cursor=pointer]
            - tab "Routine" [ref=e690] [cursor=pointer]
        - generic [ref=e693]:
          - generic [ref=e694]:
            - generic [ref=e695]: Audience
            - tablist [ref=e698]:
              - tab "Users" [selected] [ref=e699] [cursor=pointer]
              - tab "Platforms" [ref=e700] [cursor=pointer]
          - generic [ref=e703]:
            - generic [ref=e706]:
              - combobox "Select users" [ref=e707]
              - button "Open" [ref=e709] [cursor=pointer]:
                - img [ref=e710]
              - group
            - paragraph [ref=e712]: Please Select users
      - generic [ref=e713]:
        - button "Cancel" [ref=e714] [cursor=pointer]
        - button "submit" [ref=e715] [cursor=pointer]: submit
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class Helpers {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |     }
  7  | 
  8  | async uploadAttachment(page, locator){
> 9  |     await locator.setInputFiles('pages/media/image.png');
     |     ^ Error: locator.setInputFiles: Error: Node is not an HTMLInputElement
  10 |     console.log('Attachment Uploaded Successfully');
  11 | }
  12 | 
  13 | /** Random future date as MM/DD/YYYY (matches MUI date placeholders). */
  14 | randomCalendarDate(daysAheadMin = 1, daysAheadMax = 365) {
  15 |     const daysAhead = Math.floor(Math.random() * (daysAheadMax - daysAheadMin + 1)) + daysAheadMin;
  16 |     const date = new Date();
  17 |     date.setDate(date.getDate() + daysAhead);
  18 |     const mm = String(date.getMonth() + 1).padStart(2, '0');
  19 |     const dd = String(date.getDate()).padStart(2, '0');
  20 |     const yyyy = date.getFullYear();
  21 |     return `${mm}/${dd}/${yyyy}`;
  22 | }
  23 | 
  24 | /** Fill MUI DateField Month/Day/Year spinbuttons with an MM/DD/YYYY string. */
  25 | async fillMuiCalendarDate(monthSpinbutton, dateStr) {
  26 |     const [mm, dd, yyyy] = dateStr.split('/');
  27 |     await monthSpinbutton.click();
  28 |     // MUI auto-advances sections as digits are typed — do not use fill()
  29 |     await this.page.keyboard.type(`${mm}${dd}${yyyy}`, { delay: 40 });
  30 | }
  31 | 
  32 | async randomStringgenerator(page, locator){
  33 |     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  34 |     let result = '';
  35 |     for (let i = 0; i < 9; i++) {
  36 |         result += characters.charAt(Math.floor(Math.random() * characters.length));
  37 |     }
  38 |     await locator.fill(result);
  39 | }
  40 | 
  41 | async randomIntgenerator(page, locator){
  42 |     // Keep amounts in a realistic range for coin top-ups
  43 |     const result = Math.floor(Math.random() * 99999) + 1;
  44 |     await locator.fill(result.toString());
  45 | }
  46 | 
  47 | async selectfromDropdown(page, locator, value) {
  48 |     await locator.click();
  49 |     const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  50 |     const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).first();
  51 |     try {
  52 |         await option.click({ timeout: 5000 });
  53 |     } catch {
  54 |         // Custom selects without role="option": filter by typing, then confirm (avoid ArrowDown — it can skip the only match)
  55 |         await page.keyboard.type(value, { delay: 40 });
  56 |         await page.keyboard.press('Enter');
  57 |     }
  58 | }
  59 | 
  60 | async mandatoryFieldValidation(page, btn, locator){
  61 |     await btn.click();
  62 |     await expect(locator).toHaveClass(/Mui-error/);
  63 | }
  64 | }
```