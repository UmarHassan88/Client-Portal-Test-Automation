# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Area\Country\AddCountry.spec.js >> This test creates and manages a new country
- Location: tests\Area\Country\AddCountry.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'replace')
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
        - generic [ref=e136]:
          - generic [ref=e137]: aidadmin
          - generic [ref=e138]: admin@aqaryinvestment.com
      - generic [ref=e139]:
        - button [ref=e140] [cursor=pointer]:
          - img [ref=e141]
        - button [ref=e143] [cursor=pointer]:
          - img [ref=e144]
        - button [ref=e147] [cursor=pointer]:
          - img [ref=e148]
        - button [ref=e153] [cursor=pointer]:
          - img [ref=e154]
    - main [ref=e156]:
      - generic [ref=e158]:
        - navigation "breadcrumb" [ref=e159]:
          - list [ref=e160]:
            - listitem [ref=e161]:
              - paragraph [ref=e162]: Manage Area
        - heading "Manage Area" [level=3] [ref=e165]
      - generic [ref=e166]:
        - generic [ref=e167]:
          - link "Add country" [ref=e168] [cursor=pointer]:
            - /url: /dashboard/area/country/add
          - link "Manage country" [ref=e169] [cursor=pointer]:
            - /url: /dashboard/area/country/manage
          - link "Manage Deleted country" [ref=e170] [cursor=pointer]:
            - /url: /dashboard/area/country/deleted
        - generic [ref=e171]:
          - paragraph [ref=e175]: Manage Area
          - generic [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e180]:
                - generic [ref=e181]:
                  - text: Country
                  - generic [ref=e182]: "*"
                - generic [ref=e185]:
                  - combobox "Select Country" [expanded] [active] [ref=e186]
                  - button "Close" [ref=e188] [cursor=pointer]:
                    - img [ref=e189]
                  - group
                - paragraph [ref=e191]: Country is required
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - text: Geo Location
                  - generic [ref=e196]: Beta
                - generic [ref=e199]:
                  - combobox "Search geo locations" [ref=e200]
                  - button "Open" [ref=e202] [cursor=pointer]:
                    - img [ref=e203]
                  - group
                - paragraph [ref=e205]: New field currently in testing — will replace the location fields above once ready
              - generic [ref=e207]:
                - generic [ref=e208]:
                  - text: Upload Cover Image
                  - generic [ref=e209]: "*"
                - generic [ref=e211]:
                  - button "Choose File" [ref=e212]
                  - group
                - paragraph [ref=e213]: Please upload your file
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - text: Profile Image
                  - generic [ref=e217]: "*"
                - generic [ref=e219]:
                  - button "Choose File" [ref=e220]
                  - group
                - paragraph [ref=e221]: Please upload your file
              - generic [ref=e223]:
                - generic [ref=e224]:
                  - text: Horizontal Cover Image
                  - generic [ref=e225]: "*"
                - generic [ref=e227]:
                  - button "Choose File" [ref=e228]
                  - group
                - paragraph [ref=e229]: Please upload your file
              - generic [ref=e231]:
                - generic [ref=e232]: Description
                - generic [ref=e233]:
                  - generic "Editor Toolbar" [ref=e234]:
                    - generic "Text heading" [ref=e236]:
                      - button "Normal" [ref=e237] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e238]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e241]:
                      - button "Bold" [ref=e242] [cursor=pointer]:
                        - img [ref=e243]
                      - button "Italic" [ref=e246] [cursor=pointer]:
                        - img [ref=e247]
                      - button "Underline" [ref=e249] [cursor=pointer]:
                        - img [ref=e250]
                      - button "Align Left" [ref=e253] [cursor=pointer]:
                        - img [ref=e254]
                      - button "Align Center" [ref=e255] [cursor=pointer]:
                        - img [ref=e256]
                      - button "Align Right" [ref=e257] [cursor=pointer]:
                        - img [ref=e258]
                      - button "Justify" [ref=e259] [cursor=pointer]:
                        - img [ref=e260]
                    - generic [ref=e261]:
                      - button "Insert Link" [ref=e262] [cursor=pointer]:
                        - img [ref=e263]
                      - button "Insert Image" [ref=e267] [cursor=pointer]:
                        - img [ref=e268]
                      - button "Import Word document" [ref=e272] [cursor=pointer]:
                        - img [ref=e273]
                      - button "Insert Embed" [ref=e281] [cursor=pointer]:
                        - img [ref=e282]
                    - generic [ref=e295]:
                      - button "Numbered List" [ref=e296] [cursor=pointer]:
                        - img [ref=e297]
                      - button "Bullet List" [ref=e301] [cursor=pointer]:
                        - img [ref=e302]
                      - button "Checklist" [ref=e303] [cursor=pointer]:
                        - img [ref=e304]
                    - button "Split Section" [ref=e309] [cursor=pointer]:
                      - img [ref=e310]
                    - button "Clear Formatting" [ref=e313] [cursor=pointer]:
                      - img [ref=e314]
                  - generic [ref=e319]:
                    - generic [ref=e320]:
                      - text: Compose an epic...
                      - paragraph [ref=e321]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e322]: Enter description
              - generic [ref=e324]:
                - generic [ref=e325]: المحتوى بالعربي
                - generic [ref=e326]:
                  - generic "Editor Toolbar" [ref=e327]:
                    - generic "Text heading" [ref=e329]:
                      - button "Normal" [ref=e330] [cursor=pointer]:
                        - text: Normal
                        - img [ref=e331]
                      - text: Normal Heading 1 Heading 2 Heading 3 Heading 4 (main) Heading 5 (sub) Heading 6
                    - generic [ref=e334]:
                      - button "Bold" [ref=e335] [cursor=pointer]:
                        - img [ref=e336]
                      - button "Italic" [ref=e339] [cursor=pointer]:
                        - img [ref=e340]
                      - button "Underline" [ref=e342] [cursor=pointer]:
                        - img [ref=e343]
                      - button "Align Left" [ref=e346] [cursor=pointer]:
                        - img [ref=e347]
                      - button "Align Center" [ref=e348] [cursor=pointer]:
                        - img [ref=e349]
                      - button "Align Right" [ref=e350] [cursor=pointer]:
                        - img [ref=e351]
                      - button "Justify" [ref=e352] [cursor=pointer]:
                        - img [ref=e353]
                    - generic [ref=e354]:
                      - button "Insert Link" [ref=e355] [cursor=pointer]:
                        - img [ref=e356]
                      - button "Insert Image" [ref=e360] [cursor=pointer]:
                        - img [ref=e361]
                      - button "Import Word document" [ref=e365] [cursor=pointer]:
                        - img [ref=e366]
                      - button "Insert Embed" [ref=e374] [cursor=pointer]:
                        - img [ref=e375]
                    - generic [ref=e388]:
                      - button "Numbered List" [ref=e389] [cursor=pointer]:
                        - img [ref=e390]
                      - button "Bullet List" [ref=e394] [cursor=pointer]:
                        - img [ref=e395]
                      - button "Checklist" [ref=e396] [cursor=pointer]:
                        - img [ref=e397]
                    - button "Split Section" [ref=e402] [cursor=pointer]:
                      - img [ref=e403]
                    - button "Clear Formatting" [ref=e406] [cursor=pointer]:
                      - img [ref=e407]
                  - generic [ref=e412]:
                    - generic [ref=e413]:
                      - text: Compose an epic...
                      - paragraph [ref=e414]
                    - text: "Visit URL: EditRemove"
                - paragraph [ref=e415]: المحتوى بالعربي
              - generic [ref=e417]:
                - generic [ref=e418]: About Market
                - generic [ref=e420]:
                  - textbox "About" [ref=e421]
                  - group
                - paragraph [ref=e422]: Enter About
              - generic [ref=e424]:
                - generic [ref=e425]: معلومات عن المنطقة
                - generic [ref=e427]:
                  - textbox "الوصف.." [ref=e428]
                  - group
                - paragraph [ref=e429]: أدخل الوصف
            - generic [ref=e431]:
              - button "clear" [ref=e432] [cursor=pointer]
              - button "submit" [ref=e433] [cursor=pointer]: submit
  - listbox [ref=e435]:
    - option "United Arab Emirates" [ref=e436] [cursor=pointer]
    - option "Egypt" [ref=e437] [cursor=pointer]
    - option "Botswana" [ref=e438] [cursor=pointer]
    - option "Panama" [ref=e439] [cursor=pointer]
    - option "NewYork" [ref=e440] [cursor=pointer]
    - option "Australia 111" [ref=e441] [cursor=pointer]
    - option "TTTTTTTTTTTTT" [ref=e442] [cursor=pointer]
    - option "ppppppp" [ref=e443] [cursor=pointer]
    - option "New Gregy56" [ref=e444] [cursor=pointer]
    - option "Martin Benjamin" [ref=e445] [cursor=pointer]
    - option "ITlaya" [ref=e446] [cursor=pointer]
    - option "HII" [ref=e447] [cursor=pointer]
    - option "Yeo Jefferson" [ref=e448] [cursor=pointer]
    - option "New OMAN" [ref=e449] [cursor=pointer]
    - option "New OMAN a" [ref=e450] [cursor=pointer]
    - option "sasd" [ref=e451] [cursor=pointer]
    - option "ccc" [ref=e452] [cursor=pointer]
    - option "ccca" [ref=e453] [cursor=pointer]
    - option "cccas" [ref=e454] [cursor=pointer]
    - option "cccasw" [ref=e455] [cursor=pointer]
    - option "cccaswerw" [ref=e456] [cursor=pointer]
    - option "sadfkls" [ref=e457] [cursor=pointer]
    - option "sadfklsd" [ref=e458] [cursor=pointer]
    - option "ccx" [ref=e459] [cursor=pointer]
    - option "asd" [ref=e460] [cursor=pointer]
    - option "NewTest" [ref=e461] [cursor=pointer]
    - option "Playwright test country 1781595818585-0" [ref=e462] [cursor=pointer]
    - option "Playwright test country 1781595825488-1" [ref=e463] [cursor=pointer]
    - option "Playwright test country 1781595825521-0" [ref=e464] [cursor=pointer]
    - option "Playwright test country 1781595825508-2" [ref=e465] [cursor=pointer]
    - option "Playwright test country 1781596099577-1" [ref=e466] [cursor=pointer]
    - option "Playwright test country 1781597108770-1" [ref=e467] [cursor=pointer]
    - option "Playwright test country 1781597214403-2" [ref=e468] [cursor=pointer]
    - option "Playwright test country 1781597229257-3" [ref=e469] [cursor=pointer]
    - option "Playwright test country 1781597252707-5" [ref=e470] [cursor=pointer]
    - option "Playwright test country 1781597287653-6" [ref=e471] [cursor=pointer]
    - option "Playwright test country 1781597297480-7" [ref=e472] [cursor=pointer]
    - option "Playwright test country 1781597382808-8" [ref=e473] [cursor=pointer]
    - option "Playwright test country 1781597388597-9" [ref=e474] [cursor=pointer]
    - option "Playwright test country 1781597521254-13" [ref=e475] [cursor=pointer]
    - option "Playwright test country 1781597524754-14" [ref=e476] [cursor=pointer]
    - option "Playwright test country 1781597998210-22" [ref=e477] [cursor=pointer]
    - option "Playwright test country 1781598144263-24" [ref=e478] [cursor=pointer]
    - option "Playwright test country 1781598282995-26" [ref=e479] [cursor=pointer]
    - option "Playwright test country 1781598361412-27" [ref=e480] [cursor=pointer]
    - option "New Zealdand" [ref=e481] [cursor=pointer]
    - option "Playwright test country 1781598870550-36" [ref=e482] [cursor=pointer]
    - option "Playwright test country 1781599043275-38" [ref=e483] [cursor=pointer]
    - option "Playwright test country 1781602426631-55" [ref=e484] [cursor=pointer]
    - option "Playwright test country 1781602444119-56" [ref=e485] [cursor=pointer]
    - option "Playwright test country 1781602603342-60" [ref=e486] [cursor=pointer]
    - option "Playwright test country 1781602609832-61" [ref=e487] [cursor=pointer]
    - option "Playwright test country 1781602772246-62" [ref=e488] [cursor=pointer]
    - option "Playwright test country 1781602827669-63" [ref=e489] [cursor=pointer]
    - option "Playwright test country 1781603248207-67" [ref=e490] [cursor=pointer]
    - option "Playwright test country 1781603268180-68" [ref=e491] [cursor=pointer]
    - option "Playwright test country 1781603271545-69" [ref=e492] [cursor=pointer]
    - option "Playwright test country 1781603399910-72" [ref=e493] [cursor=pointer]
    - option "Barazil" [ref=e494] [cursor=pointer]
    - option "Inadfia" [ref=e495] [cursor=pointer]
    - option "Brazzil" [ref=e496] [cursor=pointer]
    - option "Brafazil" [ref=e497] [cursor=pointer]
    - option "Brafaaaazil" [ref=e498] [cursor=pointer]
    - option "Playwright test country 1781614453527-145" [ref=e499] [cursor=pointer]
    - option "Playwright test country 1781614543057-150" [ref=e500] [cursor=pointer]
    - option "Playwright test country 1781614667344-154" [ref=e501] [cursor=pointer]
    - option "Playwright test country 1781676446056-0" [ref=e502] [cursor=pointer]
    - option "Playwright test country 1781676468918-1" [ref=e503] [cursor=pointer]
    - option "Playwright test country 1781696147998-64" [ref=e504] [cursor=pointer]
    - option "Playwright test country 1781759761339-0" [ref=e505] [cursor=pointer]
    - option "Playwright test country 1781759962226-0" [ref=e506] [cursor=pointer]
    - option "Playwright test country 1781760433821-2" [ref=e507] [cursor=pointer]
    - option "Playwright test country 1781760510102-4" [ref=e508] [cursor=pointer]
    - option "Playwright test country 1781760576965-7" [ref=e509] [cursor=pointer]
    - option "Åland Islands uG6mrW04" [ref=e510] [cursor=pointer]
    - option "Isle of Man IGWNg5bC" [ref=e511] [cursor=pointer]
    - option "Moldova pyvyKuYu" [ref=e512] [cursor=pointer]
    - option "France jQIK35HZ" [ref=e513] [cursor=pointer]
    - option "Czechia 3m6w7YSO" [ref=e514] [cursor=pointer]
    - option "Paraguay AN8qIqh6" [ref=e515] [cursor=pointer]
    - option "Jersey O0VlwjsV" [ref=e516] [cursor=pointer]
    - option "Mali YKL09nOU" [ref=e517] [cursor=pointer]
    - option "Bolivia xnGvM6sR" [ref=e518] [cursor=pointer]
    - option "Lao People's Democratic Republic bTW8lEjR" [ref=e519] [cursor=pointer]
    - option "Test frightened futon 178176176654354" [ref=e520] [cursor=pointer]
    - option "Thasmenia4564564" [ref=e521] [cursor=pointer]
    - option "Norway 1782971050047" [ref=e522] [cursor=pointer]
    - option "Germany 1782971100405" [ref=e523] [cursor=pointer]
    - option "South Sudan 1782971234218" [ref=e524] [cursor=pointer]
    - option "Ghana 1782971490011" [ref=e525] [cursor=pointer]
    - option "Jordan 1782972095592" [ref=e526] [cursor=pointer]
    - option "Christmas Island 1782972941732" [ref=e527] [cursor=pointer]
    - option "Côte d'Ivoire 1782973167080" [ref=e528] [cursor=pointer]
    - option "YYYYYYYYY" [ref=e529] [cursor=pointer]
    - option "WWWWWWWW" [ref=e530] [cursor=pointer]
    - option "Morocco 1782980212583" [ref=e531] [cursor=pointer]
    - option "Morocco 1782980458655" [ref=e532] [cursor=pointer]
    - option "Chad 1782980787680" [ref=e533] [cursor=pointer]
    - option "Yemen 1782983643607" [ref=e534] [cursor=pointer]
    - option "Maldives 1782984023833" [ref=e535] [cursor=pointer]
    - option "Åland Islands 1782985158563" [ref=e536] [cursor=pointer]
    - option "North Macedonia 1782985294615" [ref=e537] [cursor=pointer]
    - option "Cyprus 1782985673562" [ref=e538] [cursor=pointer]
    - option "Bulgaria 1782985762642" [ref=e539] [cursor=pointer]
    - option "Malawi 1782985788179" [ref=e540] [cursor=pointer]
    - option "Bulgaria 1782985823251" [ref=e541] [cursor=pointer]
    - option "Moldova 1782986346071" [ref=e542] [cursor=pointer]
    - option "Australia 1782986386007" [ref=e543] [cursor=pointer]
    - option "Namibia 1782986668331" [ref=e544] [cursor=pointer]
    - option "Åland Islands 1782986843517" [ref=e545] [cursor=pointer]
    - option "Lebanon 1782987875081" [ref=e546] [cursor=pointer]
    - option "Haiti 1782988468203" [ref=e547] [cursor=pointer]
    - option "Sweden 1782988675715" [ref=e548] [cursor=pointer]
    - option "Turkmenistan 1782988913458" [ref=e549] [cursor=pointer]
    - option "Holy See (Vatican City State) 1782988947467" [ref=e550] [cursor=pointer]
    - option "Norway 1782989033163" [ref=e551] [cursor=pointer]
    - option "Palau 1782989103036" [ref=e552] [cursor=pointer]
    - option "palestine 1783323869510" [ref=e553] [cursor=pointer]
    - option "wwwwwwwwww" [ref=e554] [cursor=pointer]
    - option "qwe" [ref=e555] [cursor=pointer]
    - option "Seychelles 1783420949095" [ref=e556] [cursor=pointer]
    - option "Zimbabwe 1783421151212" [ref=e557] [cursor=pointer]
    - option "Turks and Caicos Islands 1783421206944" [ref=e558] [cursor=pointer]
    - option "Turkmenistan 1783421606709" [ref=e559] [cursor=pointer]
    - option "Marshall Islands 1783421692331" [ref=e560] [cursor=pointer]
    - option "Greenland 1783422494599" [ref=e561] [cursor=pointer]
    - option "Syrian Arab Republic 1783422681508" [ref=e562] [cursor=pointer]
    - option "Turkmenistan 1783423222086" [ref=e563] [cursor=pointer]
    - option "Myanmar 1783423511347" [ref=e564] [cursor=pointer]
    - option "Cape Verde 1783423869893" [ref=e565] [cursor=pointer]
    - option "Bahamas 1783424201537" [ref=e566] [cursor=pointer]
    - option "Papua New Guinea 1783424586260" [ref=e567] [cursor=pointer]
    - option "Bulgaria 1783425382260" [ref=e568] [cursor=pointer]
    - option "Mongolia 1783425440726" [ref=e569] [cursor=pointer]
    - option "Niger 1783425492196" [ref=e570] [cursor=pointer]
    - option "Bahamas 1783490340055" [ref=e571] [cursor=pointer]
    - option "Saint Vincent and the Grenadines 1783490384469" [ref=e572] [cursor=pointer]
    - option "Indonesia 1783496229168" [ref=e573] [cursor=pointer]
    - option "inzimam country" [ref=e574] [cursor=pointer]
    - option "Ghana 1783943260333" [ref=e575] [cursor=pointer]
    - option "Madagascar 1784037063151" [ref=e576] [cursor=pointer]
    - option "Mongolia 1784037148119" [ref=e577] [cursor=pointer]
    - option "Central African Republic 1784266443671" [ref=e578] [cursor=pointer]
    - option "Pitcairn Islands 1784266472037" [ref=e579] [cursor=pointer]
    - option "Jersey 1784269170651" [ref=e580] [cursor=pointer]
    - option "Turkmenistan 1784366273979" [ref=e581] [cursor=pointer]
    - option "Palau 1784367821258" [ref=e582] [cursor=pointer]
    - option "United Kingdom 1784369787400" [ref=e583] [cursor=pointer]
    - option "Slovenia 1784370271550" [ref=e584] [cursor=pointer]
    - option "Barbados 1784370289533" [ref=e585] [cursor=pointer]
    - option "Jersey 1784370349884" [ref=e586] [cursor=pointer]
    - option "Gabon 1784379086579" [ref=e587] [cursor=pointer]
    - option "Kyrgyz Republic 1784379183618" [ref=e588] [cursor=pointer]
    - option "Hong Kong 1784379277358" [ref=e589] [cursor=pointer]
    - option "Guernsey 1786539075816" [ref=e590] [cursor=pointer]
    - option "Kuwait 1786539138947" [ref=e591] [cursor=pointer]
    - option "Belgium 1786599976370" [ref=e592] [cursor=pointer]
    - option "Greenland 1786600587306" [ref=e593] [cursor=pointer]
    - option "Moldova 1786601060130" [ref=e594] [cursor=pointer]
    - option "Tunisia 1786601121753" [ref=e595] [cursor=pointer]
    - option "Ethiopia 1786601161822" [ref=e596] [cursor=pointer]
    - option "Guadeloupe 1786603392486" [ref=e597] [cursor=pointer]
    - option "Anguilla 1786603925547" [ref=e598] [cursor=pointer]
    - option "Barbados 1786603950022" [ref=e599] [cursor=pointer]
    - option "Kazakhstan 1786604443820" [ref=e600] [cursor=pointer]
    - option "Bangladesh 1786605693991" [ref=e601] [cursor=pointer]
    - option "Togo 1786605882094" [ref=e602] [cursor=pointer]
    - option "New Zealand 1786605884293" [ref=e603] [cursor=pointer]
    - option "Suriname 1786605886501" [ref=e604] [cursor=pointer]
    - option "French Polynesia 1786606485176" [ref=e605] [cursor=pointer]
    - option "Sierra Leone 1786606487285" [ref=e606] [cursor=pointer]
    - option "Lebanon 1786606489403" [ref=e607] [cursor=pointer]
    - option "Zambia 1786607440340" [ref=e608] [cursor=pointer]
    - option "Namibia 1786607442321" [ref=e609] [cursor=pointer]
    - option "Morocco 1786607444378" [ref=e610] [cursor=pointer]
    - option "Samoa 1786608066025" [ref=e611] [cursor=pointer]
    - option "Niue 1786682131066" [ref=e612] [cursor=pointer]
    - option "Tunisia 1786767100793" [ref=e613] [cursor=pointer]
    - option "Germany 1786960407795" [ref=e614] [cursor=pointer]
    - option "Democratic People's Republic of Korea 1786974225423" [ref=e615] [cursor=pointer]
    - option "Sweden 1787026618433" [ref=e616] [cursor=pointer]
    - option "Sierra Leone 1787113035158" [ref=e617] [cursor=pointer]
    - option "Marshall Islands 1787199315306" [ref=e618] [cursor=pointer]
    - option "Guinea 1787285706423" [ref=e619] [cursor=pointer]
    - option "Dominica 1787304892021" [ref=e620] [cursor=pointer]
    - option "Suriname 1787306867366" [ref=e621] [cursor=pointer]
    - option "Sudan 1787372035116" [ref=e622] [cursor=pointer]
    - option "Democratic Republic of the Congo 1787458588805" [ref=e623] [cursor=pointer]
    - option "Palestine 1787545051490" [ref=e624] [cursor=pointer]
    - option "Isle of Man 1787631380781" [ref=e625] [cursor=pointer]
    - option "Lao People's Democratic Republic 1787663163772" [ref=e626] [cursor=pointer]
    - option "French Southern Territories 1787717744399" [ref=e627] [cursor=pointer]
    - option "Democratic People's Republic of Korea 1787736342393" [ref=e628] [cursor=pointer]
    - option "New Caledonia 1787736643296" [ref=e629] [cursor=pointer]
    - option "United States of America 1787810674701" [ref=e630] [cursor=pointer]
    - option "Belarus 1787823004519" [ref=e631] [cursor=pointer]
    - option "Samoa 1787823050207" [ref=e632] [cursor=pointer]
    - option "Fiji 1787898866445" [ref=e633] [cursor=pointer]
    - option "Tanzania 1787976345277" [ref=e634] [cursor=pointer]
    - option "Germany 1788062801373" [ref=e635] [cursor=pointer]
    - option "Angola 1788149178767" [ref=e636] [cursor=pointer]
    - option "Angola 1788159998195" [ref=e637] [cursor=pointer]
    - option "Saint Pierre and Miquelon 1788168680143" [ref=e638] [cursor=pointer]
    - option "Palestine 1788169102524" [ref=e639] [cursor=pointer]
    - option "Niger 1788235584160" [ref=e640] [cursor=pointer]
    - option "Kazakhstan 1788321993901" [ref=e641] [cursor=pointer]
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
  9  |     await locator.setInputFiles('pages/media/image.png');
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
> 49 |     const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
     |                           ^ TypeError: Cannot read properties of undefined (reading 'replace')
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