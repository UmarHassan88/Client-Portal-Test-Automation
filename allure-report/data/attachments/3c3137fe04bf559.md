# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\Leadership.spec.js >> Test Automation for: Leadership page
- Location: tests\Admin\Accounts\Leadership.spec.js:10:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
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
          - img "List international logo" [ref=e7]
        - button "open drawer" [ref=e9] [cursor=pointer]
      - paragraph [ref=e12]: Management Platform
      - generic [ref=e13]:
        - navigation [ref=e14]:
          - button "Main Menu" [ref=e15]
        - separator [ref=e25]
        - navigation [ref=e26]:
          - button "Listing" [ref=e27]
        - separator [ref=e36]
        - navigation [ref=e37]:
          - button "Area" [ref=e38]
        - separator [ref=e46]
        - navigation [ref=e47]:
          - button "Blogs" [ref=e48]
        - separator [ref=e56]
        - navigation [ref=e57]:
          - button "Profiles" [ref=e58]
        - separator [ref=e67]
        - navigation [ref=e68]:
          - button "Admin" [ref=e69]
          - link [ref=e83] [cursor=pointer]:
            - /url: /dashboard/account/me
            - button "accounts" [ref=e85]
          - link [ref=e98] [cursor=pointer]:
            - /url: /dashboard/admin/licenses
            - button "License" [ref=e100]
          - link [ref=e110] [cursor=pointer]:
            - /url: /dashboard/admin/subscription
            - button "Subscription" [ref=e112]
          - link [ref=e122] [cursor=pointer]:
            - /url: /dashboard/admin/coins
            - button "Coins" [ref=e124]
          - link [ref=e138] [cursor=pointer]:
            - /url: /dashboard/admin/watermark/view
            - button "Watermark" [ref=e140]
          - link [ref=e150] [cursor=pointer]:
            - /url: /dashboard/admin/control_panel/sections
            - button "Control Panel" [ref=e152]
          - link [ref=e164] [cursor=pointer]:
            - /url: /dashboard/admin/faq
            - button "FAQ" [ref=e166]
        - separator [ref=e175]
        - navigation [ref=e176]:
          - button "System Health" [ref=e177]
        - separator [ref=e184]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e185] [cursor=pointer]:
        - generic [ref=e188]:
          - generic [ref=e189]: aidadmin
          - generic [ref=e190]: admin@aqaryinvestment.com
      - generic [ref=e191]:
        - button [ref=e192] [cursor=pointer]
        - button [ref=e195] [cursor=pointer]
        - button [ref=e199] [cursor=pointer]
        - button [ref=e205] [cursor=pointer]
    - main [ref=e208]:
      - generic [ref=e210]:
        - navigation "breadcrumb" [ref=e211]:
          - list [ref=e212]:
            - listitem [ref=e213]:
              - paragraph [ref=e214]: Accounts
        - heading "Accounts" [level=3] [ref=e217]
      - tablist [ref=e220]:
        - tab "My Profile" [ref=e221] [cursor=pointer]
        - tab "Company Users" [ref=e227] [cursor=pointer]
        - tab "Company Profile" [ref=e233] [cursor=pointer]
        - tab "Leadership" [selected] [ref=e242] [cursor=pointer]
      - generic [ref=e249]:
        - generic [ref=e254]:
          - heading "Leadership" [level=6] [ref=e256]
          - generic [ref=e263]:
            - paragraph [ref=e264]: Active Profiles
            - paragraph [ref=e265]: "17"
          - generic [ref=e271]:
            - paragraph [ref=e272]: Total Leaders
            - paragraph [ref=e273]: "45"
          - separator [ref=e275]
          - heading "General Info" [level=6] [ref=e277]
          - generic [ref=e279]:
            - generic [ref=e280]:
              - text: Name
              - generic [ref=e281]: "*"
            - generic [ref=e283]:
              - generic [ref=e285]:
                - combobox [ref=e286] [cursor=pointer]: Mr.
                - textbox: Mr.
                - group
              - textbox "Enter Name" [ref=e287]: Santiago
              - group
            - paragraph [ref=e288]: Please enter first name
          - generic [ref=e290]:
            - generic [ref=e291]: Name AR
            - generic [ref=e293]:
              - generic [ref=e295]:
                - combobox [ref=e296] [cursor=pointer]: Mr.
                - textbox: Mr.
                - group
              - textbox "Enter Name" [ref=e297]: Ewell
              - group
            - paragraph [ref=e298]: Please enter first name
          - generic [ref=e300]:
            - generic [ref=e301]:
              - text: Designation
              - generic [ref=e302]: "*"
            - generic [ref=e304]:
              - textbox "Designation" [ref=e305]: Dynamic Quality Architect
              - group
            - paragraph [ref=e306]: Please Enter Designation
          - generic [ref=e308]:
            - generic [ref=e309]: Designation Ar
            - generic [ref=e311]:
              - textbox "Designation" [ref=e312]: Forward Marketing Manager
              - group
            - paragraph [ref=e313]: Please Enter Designation Ar
          - generic [ref=e315]:
            - generic [ref=e316]:
              - text: About EN
              - generic [ref=e317]: "*"
            - generic [ref=e319]:
              - textbox "About" [ref=e320]: Commemoro celo acceptus eius argentum vos magnam crur. Adsidue ulterius crepusculum vindico vetus. Cibus amor volutabrum velit talio repellendus utrum demergo pecus.
              - group
            - paragraph [ref=e321]: Enter About
          - generic [ref=e323]:
            - generic [ref=e324]: About AR
            - generic [ref=e326]:
              - textbox "About AR" [active] [ref=e327]: Saepe tactus cubo caritas debitis alveus talus. Cruciamentum stabilis arcesso. Acsi desipio auctor.
              - group
            - paragraph [ref=e328]: About AR
          - generic [ref=e330]:
            - generic [ref=e331]: Profile Picture
            - button [ref=e332]:
              - button "Drag & drop or click to upload PDF, JPG, PNG up to 2MB"
              - generic [ref=e333] [cursor=pointer]:
                - paragraph [ref=e337]: Drag & drop or click to upload
                - paragraph [ref=e338]: PDF, JPG, PNG up to 2MB
        - button "Add & Save" [ref=e341] [cursor=pointer]
        - generic [ref=e344]:
          - paragraph [ref=e348]: Leadership Profiles
          - generic [ref=e350]:
            - generic [ref=e352]:
              - img "vghjfhgj" [ref=e354]
              - generic [ref=e355]:
                - paragraph [ref=e356]: vghjfhgj
                - paragraph [ref=e357]: gfhdfthftujr
                - paragraph [ref=e358]: rftyrtuty7sertysfdgdfgdfgfdsadf
                - generic [ref=e359]:
                  - button [ref=e360] [cursor=pointer]
                  - button [ref=e363] [cursor=pointer]
                  - generic [ref=e366] [cursor=pointer]:
                    - switch "Show Live" [ref=e369]
                    - generic [ref=e372]: Show Live
            - generic [ref=e374]:
              - img "Mr Asrif mario" [ref=e376]
              - generic [ref=e377]:
                - paragraph [ref=e378]: Mr Asrif mario
                - paragraph [ref=e379]: CEO
                - paragraph [ref=e380]: Chief technical Officer
                - generic [ref=e381]:
                  - button [ref=e382] [cursor=pointer]
                  - button [ref=e385] [cursor=pointer]
                  - generic [ref=e388] [cursor=pointer]:
                    - switch "Show Live" [ref=e391]
                    - generic [ref=e394]: Show Live
            - generic [ref=e396]:
              - img "channa de slivajkhjkstdsyeye" [ref=e398]
              - generic [ref=e399]:
                - paragraph [ref=e400]: channa de slivajkhjkstdsyeye
                - paragraph [ref=e401]: CTO
                - paragraph [ref=e402]: manageddd
                - generic [ref=e403]:
                  - button [ref=e404] [cursor=pointer]
                  - button [ref=e407] [cursor=pointer]
                  - generic [ref=e410] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e413]
                    - generic [ref=e416]: Show Live
            - generic [ref=e418]:
              - img "fgfgfhfgfcvhfvjhgbk,jnhbkjkhkhoooooooooppppp" [ref=e420]
              - generic [ref=e421]:
                - paragraph [ref=e422]: fgfgfhfgfcvhfvjhgbk,jnhbkjkhkhoooooooooppppp
                - paragraph [ref=e423]: yyyyyyyyyyyyyyyytttttttttttttttttttooooooooooooooppppppppppp
                - paragraph [ref=e424]: yyyyyyyyyyyyyyytttttttttttttttttttoooooooooooooopppppppppppyyyyyyyyyyyyyyytttttttttttttttttttoooooooooooooopppppppppppyyyyyyyyyyyyyyytttttttttttttttttttooooooooooooooppppppppppp
                - generic [ref=e425]:
                  - button [ref=e426] [cursor=pointer]
                  - button [ref=e429] [cursor=pointer]
                  - generic [ref=e432] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e435]
                    - generic [ref=e438]: Show Live
            - generic [ref=e440]:
              - img "Ms. ewd" [ref=e442]
              - generic [ref=e443]:
                - paragraph [ref=e444]: Ms. ewd
                - paragraph [ref=e445]: desd
                - paragraph [ref=e446]: This is ewd
                - generic [ref=e447]:
                  - button [ref=e448] [cursor=pointer]
                  - button [ref=e451] [cursor=pointer]
                  - generic [ref=e454] [cursor=pointer]:
                    - switch "Show Live" [ref=e457]
                    - generic [ref=e460]: Show Live
            - generic [ref=e462]:
              - img "ewd" [ref=e464]
              - generic [ref=e465]:
                - paragraph [ref=e466]: ewd
                - paragraph [ref=e467]: desd
                - paragraph [ref=e468]: This is ewd
                - generic [ref=e469]:
                  - button [ref=e470] [cursor=pointer]
                  - button [ref=e473] [cursor=pointer]
                  - generic [ref=e476] [cursor=pointer]:
                    - switch "Show Live" [ref=e479]
                    - generic [ref=e482]: Show Live
            - generic [ref=e484]:
              - img "Test Leader" [ref=e486]
              - generic [ref=e487]:
                - paragraph [ref=e488]: Test Leader
                - paragraph [ref=e489]: Tester
                - paragraph [ref=e490]: This is test leader
                - generic [ref=e491]:
                  - button [ref=e492] [cursor=pointer]
                  - button [ref=e495] [cursor=pointer]
                  - generic [ref=e498] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e501]
                    - generic [ref=e504]: Show Live
            - generic [ref=e506]:
              - img "Test Leader" [ref=e508]
              - generic [ref=e509]:
                - paragraph [ref=e510]: Test Leader
                - paragraph [ref=e511]: QA
                - paragraph [ref=e512]: This is test leader
                - generic [ref=e513]:
                  - button [ref=e514] [cursor=pointer]
                  - button [ref=e517] [cursor=pointer]
                  - generic [ref=e520] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e523]
                    - generic [ref=e526]: Show Live
            - generic [ref=e528]:
              - img "Lead" [ref=e530]
              - generic [ref=e531]:
                - paragraph [ref=e532]: Lead
                - paragraph [ref=e533]: QA
                - paragraph [ref=e534]: This is lead
                - generic [ref=e535]:
                  - button [ref=e536] [cursor=pointer]
                  - button [ref=e539] [cursor=pointer]
                  - generic [ref=e542] [cursor=pointer]:
                    - switch "Show Live" [ref=e545]
                    - generic [ref=e548]: Show Live
            - generic [ref=e550]:
              - img "Mr Lead" [ref=e552]
              - generic [ref=e553]:
                - paragraph [ref=e554]: Mr Lead
                - paragraph [ref=e555]: QA
                - paragraph [ref=e556]: This is lead
                - generic [ref=e557]:
                  - button [ref=e558] [cursor=pointer]
                  - button [ref=e561] [cursor=pointer]
                  - generic [ref=e564] [cursor=pointer]:
                    - switch "Show Live" [ref=e567]
                    - generic [ref=e570]: Show Live
            - generic [ref=e572]:
              - img "Mr. Retest Leader 22" [ref=e574]
              - generic [ref=e575]:
                - paragraph [ref=e576]: Mr. Retest Leader 22
                - paragraph [ref=e577]: Chief Executive Officer
                - paragraph [ref=e578]: This is leader
                - generic [ref=e579]:
                  - button [ref=e580] [cursor=pointer]
                  - button [ref=e583] [cursor=pointer]
                  - generic [ref=e586] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e589]
                    - generic [ref=e592]: Show Live
            - generic [ref=e594]:
              - img "Mr. chathurani" [ref=e596]
              - generic [ref=e597]:
                - paragraph [ref=e598]: Mr. chathurani
                - paragraph [ref=e599]: chathurani
                - paragraph [ref=e600]: ttt
                - generic [ref=e601]:
                  - button [ref=e602] [cursor=pointer]
                  - button [ref=e605] [cursor=pointer]
                  - generic [ref=e608] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e611]
                    - generic [ref=e614]: Show Live
            - generic [ref=e616]:
              - img "Mrs. rrrrrrrr" [ref=e618]
              - generic [ref=e619]:
                - paragraph [ref=e620]: Mrs. rrrrrrrr
                - paragraph [ref=e621]: rtrdete
                - paragraph [ref=e622]: rterter
                - generic [ref=e623]:
                  - button [ref=e624] [cursor=pointer]
                  - button [ref=e627] [cursor=pointer]
                  - generic [ref=e630] [cursor=pointer]:
                    - switch "Show Live" [ref=e633]
                    - generic [ref=e636]: Show Live
            - generic [ref=e638]:
              - img "Mr. Consuelo" [ref=e640]
              - generic [ref=e641]:
                - paragraph [ref=e642]: Mr. Consuelo
                - paragraph [ref=e643]: Product Usability Designer
                - paragraph [ref=e644]: Facere defero alter thermae casus thalassinus clibanus curiositas. Caelestis vulariter ustilo cumque adulescens supra. Volubilis unus vehemens vergo coaegresco acceptus tum coepi urbanus.
                - generic [ref=e645]:
                  - button [ref=e646] [cursor=pointer]
                  - button [ref=e649] [cursor=pointer]
                  - generic [ref=e652] [cursor=pointer]:
                    - switch "Show Live" [ref=e655]
                    - generic [ref=e658]: Show Live
            - generic [ref=e660]:
              - img "Mr. Carmen" [ref=e662]
              - generic [ref=e663]:
                - paragraph [ref=e664]: Mr. Carmen
                - paragraph [ref=e665]: District Intranet Planner
                - paragraph [ref=e666]: Degero sollers conqueror. Suscipio cena delego teneo brevis vir voluptatum. Amor alius arma alter eum explicabo animadverto.
                - generic [ref=e667]:
                  - button [ref=e668] [cursor=pointer]
                  - button [ref=e671] [cursor=pointer]
                  - generic [ref=e674] [cursor=pointer]:
                    - switch "Show Live" [ref=e677]
                    - generic [ref=e680]: Show Live
            - generic [ref=e682]:
              - img "Mr. Ashly" [ref=e684]
              - generic [ref=e685]:
                - paragraph [ref=e686]: Mr. Ashly
                - paragraph [ref=e687]: Global Security Agent
                - paragraph [ref=e688]: Vapulus custodia cubitum auctor decipio benigne pecto avarus velut tenax. Ultio somniculosus agnitio suspendo victoria. Comprehendo tempora casso.
                - generic [ref=e689]:
                  - button [ref=e690] [cursor=pointer]
                  - button [ref=e693] [cursor=pointer]
                  - generic [ref=e696] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e699]
                    - generic [ref=e702]: Show Live
            - generic [ref=e704]:
              - img "Mr. Carolina" [ref=e706]
              - generic [ref=e707]:
                - paragraph [ref=e708]: Mr. Carolina
                - paragraph [ref=e709]: Dynamic Intranet Executive
                - paragraph [ref=e710]: Confero tersus ubi cultellus tui odit comburo verbera. Aperiam tempora ars vulnero. Aufero defero deleo vomer.
                - generic [ref=e711]:
                  - button [ref=e712] [cursor=pointer]
                  - button [ref=e715] [cursor=pointer]
                  - generic [ref=e718] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e721]
                    - generic [ref=e724]: Show Live
            - generic [ref=e726]:
              - img "Mr. Brenth" [ref=e728]
              - generic [ref=e729]:
                - paragraph [ref=e730]: Mr. Brenth
                - paragraph [ref=e731]: Global Response Orchestrator
                - paragraph [ref=e732]: Correptius advenio ter umerus vado confido. Conventus eligendi vetus vorax studio amiculum atavus alveus volup. Quos cura velum eos vociferor theatrum abukjtor.
                - generic [ref=e733]:
                  - button [ref=e734] [cursor=pointer]
                  - button [ref=e737] [cursor=pointer]
                  - generic [ref=e740] [cursor=pointer]:
                    - switch "Show Live" [ref=e743]
                    - generic [ref=e746]: Show Live
            - generic [ref=e748]:
              - img "Mr. Logan" [ref=e750]
              - generic [ref=e751]:
                - paragraph [ref=e752]: Mr. Logan
                - paragraph [ref=e753]: Senior Brand Planner
                - paragraph [ref=e754]: Speculum audacia certe vilicus concedo autus blandior pariatur theca agnitio. Demulceo animus ventito acceptus cumque utrimque averto capillus ceno. Appositus creta sperno aequus verbum taceo tersus.
                - generic [ref=e755]:
                  - button [ref=e756] [cursor=pointer]
                  - button [ref=e759] [cursor=pointer]
                  - generic [ref=e762] [cursor=pointer]:
                    - switch "Show Live" [ref=e765]
                    - generic [ref=e768]: Show Live
            - generic [ref=e770]:
              - img "Mr. Marlon" [ref=e772]
              - generic [ref=e773]:
                - paragraph [ref=e774]: Mr. Marlon
                - paragraph [ref=e775]: Principal Web Executive
                - paragraph [ref=e776]: Thermae dedico temperantia. Comptus voluntarius civitas campana acervus curatio collum. Concido cuius utilis vulariter utrimque sed vetus vinitor curtus.
                - generic [ref=e777]:
                  - button [ref=e778] [cursor=pointer]
                  - button [ref=e781] [cursor=pointer]
                  - generic [ref=e784] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e787]
                    - generic [ref=e790]: Show Live
            - generic [ref=e792]:
              - img "Mr. Brad" [ref=e794]
              - generic [ref=e795]:
                - paragraph [ref=e796]: Mr. Brad
                - paragraph [ref=e797]: Central Brand Specialist
                - paragraph [ref=e798]: Coerceo arx argentum videlicet vestigium. Collum volutabrum caste. Suppono claro valens sufficio.
                - generic [ref=e799]:
                  - button [ref=e800] [cursor=pointer]
                  - button [ref=e803] [cursor=pointer]
                  - generic [ref=e806] [cursor=pointer]:
                    - switch "Show Live" [ref=e809]
                    - generic [ref=e812]: Show Live
            - generic [ref=e814]:
              - img "Mr. Peter" [ref=e816]
              - generic [ref=e817]:
                - paragraph [ref=e818]: Mr. Peter
                - paragraph [ref=e819]: Legacy Security Designer
                - paragraph [ref=e820]: Deripio administratio tripudio libero. Venustas suus aliquam ciminatio est tremo quae creator timidus. Repellendus architecto aptus antepono quidem.
                - generic [ref=e821]:
                  - button [ref=e822] [cursor=pointer]
                  - button [ref=e825] [cursor=pointer]
                  - generic [ref=e828] [cursor=pointer]:
                    - switch "Show Live" [ref=e831]
                    - generic [ref=e834]: Show Live
            - generic [ref=e836]:
              - img "Mr. Helga" [ref=e838]
              - generic [ref=e839]:
                - paragraph [ref=e840]: Mr. Helga
                - paragraph [ref=e841]: Dynamic Interactions Liaison
                - paragraph [ref=e842]: Astrum colligo crux super cognomen caput appono apparatus amiculum vergo. Balbus vomica calculus adipisci. Cernuus acervus deleo tutamen armarium beatae enim id quis.
                - generic [ref=e843]:
                  - button [ref=e844] [cursor=pointer]
                  - button [ref=e847] [cursor=pointer]
                  - generic [ref=e850] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e853]
                    - generic [ref=e856]: Show Live
            - generic [ref=e858]:
              - img "Brenth" [ref=e860]
              - generic [ref=e861]:
                - paragraph [ref=e862]: Brenth
                - paragraph [ref=e863]: Global Response Orchestrator
                - paragraph [ref=e864]: About EN *Enter About About AR About Enter About About AR About AR Profile Picture
                - generic [ref=e865]:
                  - button [ref=e866] [cursor=pointer]
                  - button [ref=e869] [cursor=pointer]
                  - generic [ref=e872] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e875]
                    - generic [ref=e878]: Show Live
            - generic [ref=e880]:
              - img "sdfsdfgsd" [ref=e882]
              - generic [ref=e883]:
                - paragraph [ref=e884]: sdfsdfgsd
                - paragraph [ref=e885]: sdd dgdd gfd
                - paragraph [ref=e886]: fsghssdgs gsdgds
                - generic [ref=e887]:
                  - button [ref=e888] [cursor=pointer]
                  - button [ref=e891] [cursor=pointer]
                  - generic [ref=e894] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e897]
                    - generic [ref=e900]: Show Live
            - generic [ref=e902]:
              - img "Mr. Name Name AR" [ref=e904]
              - generic [ref=e905]:
                - paragraph [ref=e906]: Mr. Name Name AR
                - paragraph [ref=e907]: Designation *
                - paragraph [ref=e908]: Please Enter Designation Ar Please Enter Designation Ar Total Leaders Total Leaders Total Leaders Total Leaders Total Leaders Total Leaders
                - generic [ref=e909]:
                  - button [ref=e910] [cursor=pointer]
                  - button [ref=e913] [cursor=pointer]
                  - generic [ref=e916] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e919]
                    - generic [ref=e922]: Show Live
            - generic [ref=e924]:
              - img "Mr Probe 2 1784722681007" [ref=e926]
              - generic [ref=e927]:
                - paragraph [ref=e928]: Mr Probe 2 1784722681007
                - paragraph [ref=e929]: CEO
                - paragraph [ref=e930]: About
                - generic [ref=e931]:
                  - button [ref=e932] [cursor=pointer]
                  - button [ref=e935] [cursor=pointer]
                  - generic [ref=e938] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e941]
                    - generic [ref=e944]: Show Live
            - generic [ref=e946]:
              - img "Mrs Updated May Goldner 1784722716447" [ref=e948]
              - generic [ref=e949]:
                - paragraph [ref=e950]: Mrs Updated May Goldner 1784722716447
                - paragraph [ref=e951]: Regional Branding Orchestrator
                - paragraph [ref=e952]: Updated Aetas vulgo utor ter natus. Dolore adversus acsi deprimo aestus. Coadunatio ademptio clarus tamquam decet aegre deficio defluo.
                - generic [ref=e953]:
                  - button [ref=e954] [cursor=pointer]
                  - button [ref=e957] [cursor=pointer]
                  - generic [ref=e960] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e963]
                    - generic [ref=e966]: Show Live
            - generic [ref=e968]:
              - img "Dr Updated Percy Zemlak 1784722747360" [ref=e970]
              - generic [ref=e971]:
                - paragraph [ref=e972]: Dr Updated Percy Zemlak 1784722747360
                - paragraph [ref=e973]: Legacy Mobility Representative
                - paragraph [ref=e974]: Updated Sunt coniuratio adulescens denuncio. Incidunt quia adhaero adicio adflicto versus terreo appello. Bibo dens abeo cogito sordeo carpo.
                - generic [ref=e975]:
                  - button [ref=e976] [cursor=pointer]
                  - button [ref=e979] [cursor=pointer]
                  - generic [ref=e982] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e985]
                    - generic [ref=e988]: Show Live
            - generic [ref=e990]:
              - img "Mr Test TEst Test Mr. Isabella Connelly 1784722838141" [ref=e992]
              - generic [ref=e993]:
                - paragraph [ref=e994]: Mr Test TEst Test Mr. Isabella Connelly 1784722838141
                - paragraph [ref=e995]: Chief Factors Technician
                - paragraph [ref=e996]: Updated Aliquam contego vox ambulo tepesco suscipit aperte dolores blandior nisi. Vae adipiscor distinctio spes aestas ambitus tum eos. Amaritudo dicta causa decens terror.
                - generic [ref=e997]:
                  - button [ref=e998] [cursor=pointer]
                  - button [ref=e1001] [cursor=pointer]
                  - generic [ref=e1004] [cursor=pointer]:
                    - switch "Show Live" [checked] [ref=e1007]
                    - generic [ref=e1010]: Show Live
            - generic [ref=e1012]:
              - img "Mrs Cletus Jacobson I 1785750751146" [ref=e1014]
              - generic [ref=e1015]:
                - paragraph [ref=e1016]: Mrs Cletus Jacobson I 1785750751146
                - paragraph [ref=e1017]: Direct Solutions Engineer
                - paragraph [ref=e1018]: Updated Ante ustilo derelinquo triduana exercitationem succedo aliqua delicate. Tersus rerum aetas natus spiculum ventus. Facilis utrimque quos fuga abbas perspiciatis ater non trucido.
                - generic [ref=e1019]:
                  - button [ref=e1020] [cursor=pointer]
                  - button [ref=e1023] [cursor=pointer]
                  - generic [ref=e1026] [cursor=pointer]:
                    - switch "Show Live" [ref=e1029]
                    - generic [ref=e1032]: Show Live
            - generic [ref=e1034]:
              - img "Mr. Edward" [ref=e1036]
              - generic [ref=e1037]:
                - paragraph [ref=e1038]: Mr. Edward
                - paragraph [ref=e1039]: Principal Program Specialist
                - paragraph [ref=e1040]: Audio solum avaritia. Atqui ater absens atavus ante libero cumque neque voluptate. Magnam maiores aegre acer cinis clibanus calco thesis id combibo.
                - generic [ref=e1041]:
                  - button [ref=e1042] [cursor=pointer]
                  - button [ref=e1045] [cursor=pointer]
                  - generic [ref=e1048] [cursor=pointer]:
                    - switch "Show Live" [ref=e1051]
                    - generic [ref=e1054]: Show Live
            - generic [ref=e1056]:
              - img "Mr. Patti" [ref=e1058]
              - generic [ref=e1059]:
                - paragraph [ref=e1060]: Mr. Patti
                - paragraph [ref=e1061]: Legacy Intranet Consultant
                - paragraph [ref=e1062]: Explicabo harum alo. Conforto architecto ducimus uter vociferor eaque adulatio ex. Caput temeritas comburo cubicularis at votum denego.
                - generic [ref=e1063]:
                  - button [ref=e1064] [cursor=pointer]
                  - button [ref=e1067] [cursor=pointer]
                  - generic [ref=e1070] [cursor=pointer]:
                    - switch "Show Live" [ref=e1073]
                    - generic [ref=e1076]: Show Live
            - generic [ref=e1078]:
              - img "Mr. Billie" [ref=e1080]
              - generic [ref=e1081]:
                - paragraph [ref=e1082]: Mr. Billie
                - paragraph [ref=e1083]: Global Factors Supervisor
                - paragraph [ref=e1084]: Tam labore peior solum vestigium addo temeritas delinquo. Comes alias suspendo. Aliqua aetas creator confugo clementia.
                - generic [ref=e1085]:
                  - button [ref=e1086] [cursor=pointer]
                  - button [ref=e1089] [cursor=pointer]
                  - generic [ref=e1092] [cursor=pointer]:
                    - switch "Show Live" [ref=e1095]
                    - generic [ref=e1098]: Show Live
            - generic [ref=e1100]:
              - img "Mr. Corine" [ref=e1102]
              - generic [ref=e1103]:
                - paragraph [ref=e1104]: Mr. Corine
                - paragraph [ref=e1105]: Central Branding Assistant
                - paragraph [ref=e1106]: Verbera verus laborum magnam venustas voluptatem sortitus. Consequuntur comitatus vereor. Turba dedecor agnitio acquiro.
                - generic [ref=e1107]:
                  - button [ref=e1108] [cursor=pointer]
                  - button [ref=e1111] [cursor=pointer]
                  - generic [ref=e1114] [cursor=pointer]:
                    - switch "Show Live" [ref=e1117]
                    - generic [ref=e1120]: Show Live
            - generic [ref=e1122]:
              - img "Mr. Coleman" [ref=e1124]
              - generic [ref=e1125]:
                - paragraph [ref=e1126]: Mr. Coleman
                - paragraph [ref=e1127]: Central Solutions Orchestrator
                - paragraph [ref=e1128]: Adipiscor combibo ustilo aufero tremo ara sto tremo. Dicta arcesso coerceo aqua crux. Cur atavus video ambitus thymum capto.
                - generic [ref=e1129]:
                  - button [ref=e1130] [cursor=pointer]
                  - button [ref=e1133] [cursor=pointer]
                  - generic [ref=e1136] [cursor=pointer]:
                    - switch "Show Live" [ref=e1139]
                    - generic [ref=e1142]: Show Live
            - generic [ref=e1144]:
              - img "Mr. Debbie" [ref=e1146]
              - generic [ref=e1147]:
                - paragraph [ref=e1148]: Mr. Debbie
                - paragraph [ref=e1149]: Dynamic Markets Manager
                - paragraph [ref=e1150]: Auxilium vae desolo explicabo porro saepe summa voluntarius tum deripio. Cultellus textus ascit. Alias nemo calco thema optio virtus considero.
                - generic [ref=e1151]:
                  - button [ref=e1152] [cursor=pointer]
                  - button [ref=e1155] [cursor=pointer]
                  - generic [ref=e1158] [cursor=pointer]:
                    - switch "Show Live" [ref=e1161]
                    - generic [ref=e1164]: Show Live
            - generic [ref=e1166]:
              - img "Mr. Derrick" [ref=e1168]
              - generic [ref=e1169]:
                - paragraph [ref=e1170]: Mr. Derrick
                - paragraph [ref=e1171]: Lead Security Developer
                - paragraph [ref=e1172]: Decor antiquus iure basium ut temporibus conservo vindico velut. Vicinus delicate cursim ipsum tutis non varietas statim. Comprehendo curriculum commemoro suffoco armarium defungo circumvenio cicuta arbustum praesentium.
                - generic [ref=e1173]:
                  - button [ref=e1174] [cursor=pointer]
                  - button [ref=e1177] [cursor=pointer]
                  - generic [ref=e1180] [cursor=pointer]:
                    - switch "Show Live" [ref=e1183]
                    - generic [ref=e1186]: Show Live
            - generic [ref=e1188]:
              - img "Mr. Cory" [ref=e1190]
              - generic [ref=e1191]:
                - paragraph [ref=e1192]: Mr. Cory
                - paragraph [ref=e1193]: Global Usability Administrator
                - paragraph [ref=e1194]: Sollers copiose caput vester creator thymbra cursus. Tersus comptus velit soluta. Tergum trucido totam beatus non ea alioqui coniecto usitas uter.
                - generic [ref=e1195]:
                  - button [ref=e1196] [cursor=pointer]
                  - button [ref=e1199] [cursor=pointer]
                  - generic [ref=e1202] [cursor=pointer]:
                    - switch "Show Live" [ref=e1205]
                    - generic [ref=e1208]: Show Live
            - generic [ref=e1210]:
              - img "Mr. Christina" [ref=e1212]
              - generic [ref=e1213]:
                - paragraph [ref=e1214]: Mr. Christina
                - paragraph [ref=e1215]: Product Marketing Agent
                - paragraph [ref=e1216]: Voluptatibus admoveo cohibeo iure. Suspendo stillicidium uredo torqueo admoneo tonsor. Ocer curvo terga curia ubi voluptas solitudo numquam dicta.
                - generic [ref=e1217]:
                  - button [ref=e1218] [cursor=pointer]
                  - button [ref=e1221] [cursor=pointer]
                  - generic [ref=e1224] [cursor=pointer]:
                    - switch "Show Live" [ref=e1227]
                    - generic [ref=e1230]: Show Live
            - generic [ref=e1232]:
              - img "Mr. Emily" [ref=e1234]
              - generic [ref=e1235]:
                - paragraph [ref=e1236]: Mr. Emily
                - paragraph [ref=e1237]: Dynamic Factors Planner
                - paragraph [ref=e1238]: Voco videlicet aggredior adfectus deprecator id. Desino antea benevolentia adinventitias comptus degero quae vis. Corona aeneus chirographum consequatur civitas stella possimus.
                - generic [ref=e1239]:
                  - button [ref=e1240] [cursor=pointer]
                  - button [ref=e1243] [cursor=pointer]
                  - generic [ref=e1246] [cursor=pointer]:
                    - switch "Show Live" [ref=e1249]
                    - generic [ref=e1252]: Show Live
            - generic [ref=e1254]:
              - img "Mrs Haylie Lesch 1785750750892" [ref=e1256]
              - generic [ref=e1257]:
                - paragraph [ref=e1258]: Mrs Haylie Lesch 1785750750892
                - paragraph [ref=e1259]: Legacy Implementation Associate
                - paragraph [ref=e1260]: Ater via acsi denique adaugeo. Apud acer sumo distinctio adipisci antepono desipio. Ea quod stipes vix adsidue doloribus arguo.
                - generic [ref=e1261]:
                  - button [ref=e1262] [cursor=pointer]
                  - button [ref=e1265] [cursor=pointer]
                  - generic [ref=e1268] [cursor=pointer]:
                    - switch "Show Live" [ref=e1271]
                    - generic [ref=e1274]: Show Live
            - generic [ref=e1276]:
              - img "Mr Rodrick Stark 1785751483894" [ref=e1278]
              - generic [ref=e1279]:
                - paragraph [ref=e1280]: Mr Rodrick Stark 1785751483894
                - paragraph [ref=e1281]: Customer Division Representative
                - paragraph [ref=e1282]: Updated Amo adeo repudiandae timor delicate tandem circumvenio solio cruciamentum. Astrum thermae claudeo illo cohors aliqua virtus. Thorax abscido sapiente averto cariosus.
                - generic [ref=e1283]:
                  - button [ref=e1284] [cursor=pointer]
                  - button [ref=e1287] [cursor=pointer]
                  - generic [ref=e1290] [cursor=pointer]:
                    - switch "Show Live" [ref=e1293]
                    - generic [ref=e1296]: Show Live
            - generic [ref=e1298]:
              - img "Mr. Sylvia" [ref=e1300]
              - generic [ref=e1301]:
                - paragraph [ref=e1302]: Mr. Sylvia
                - paragraph [ref=e1303]: Regional Creative Assistant
                - paragraph [ref=e1304]: Triduana thesis at voluntarius subseco civitas animi. Dignissimos tergiversatio vomito adnuo. Appello umquam alienus veritas.
                - generic [ref=e1305]:
                  - button [ref=e1306] [cursor=pointer]
                  - button [ref=e1309] [cursor=pointer]
                  - generic [ref=e1312] [cursor=pointer]:
                    - switch "Show Live" [ref=e1315]
                    - generic [ref=e1318]: Show Live
            - generic [ref=e1320]:
              - img "Mr. Katheryn" [ref=e1322]
              - generic [ref=e1323]:
                - paragraph [ref=e1324]: Mr. Katheryn
                - paragraph [ref=e1325]: International Marketing Administrator
                - paragraph [ref=e1326]: Casus adfero absorbeo appono villa quasi acies omnis. Eveniet turpis aufero acquiro conspergo soluta unus adicio theatrum. Sint succedo velut.
                - generic [ref=e1327]:
                  - button [ref=e1328] [cursor=pointer]
                  - button [ref=e1331] [cursor=pointer]
                  - generic [ref=e1334] [cursor=pointer]:
                    - switch "Show Live" [ref=e1337]
                    - generic [ref=e1340]: Show Live
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
> 9  |     await locator.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
     |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
  10 | }
  11 | 
  12 | /** Random future date as MM/DD/YYYY (matches MUI date placeholders). */
  13 | randomCalendarDate(daysAheadMin = 1, daysAheadMax = 365) {
  14 |     const daysAhead = Math.floor(Math.random() * (daysAheadMax - daysAheadMin + 1)) + daysAheadMin;
  15 |     const date = new Date();
  16 |     date.setDate(date.getDate() + daysAhead);
  17 |     const mm = String(date.getMonth() + 1).padStart(2, '0');
  18 |     const dd = String(date.getDate()).padStart(2, '0');
  19 |     const yyyy = date.getFullYear();
  20 |     return `${mm}/${dd}/${yyyy}`;
  21 | }
  22 | 
  23 | /** Fill MUI DateField Month/Day/Year spinbuttons with an MM/DD/YYYY string. */
  24 | async fillMuiCalendarDate(monthSpinbutton, dateStr) {
  25 |     const [mm, dd, yyyy] = dateStr.split('/');
  26 |     await monthSpinbutton.click();
  27 |     // MUI auto-advances sections as digits are typed — do not use fill()
  28 |     await this.page.keyboard.type(`${mm}${dd}${yyyy}`, { delay: 40 });
  29 | }
  30 | 
  31 | async randomStringgenerator(page, locator){
  32 |     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  33 |     let result = '';
  34 |     for (let i = 0; i < 9; i++) {
  35 |         result += characters.charAt(Math.floor(Math.random() * characters.length));
  36 |     }
  37 |     await locator.fill(result);
  38 | }
  39 | 
  40 | async randomIntgenerator(page, locator){
  41 |     // Keep amounts in a realistic range for coin top-ups
  42 |     const result = Math.floor(Math.random() * 99999) + 1;
  43 |     await locator.fill(result.toString());
  44 | }
  45 | 
  46 | async selectfromDropdown(page, locator, value) {
  47 |     await locator.click();
  48 |     const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  49 |     const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).first();
  50 |     try {
  51 |         await option.click({ timeout: 5000 });
  52 |     } catch {
  53 |         // Custom selects without role="option": filter by typing, then confirm (avoid ArrowDown — it can skip the only match)
  54 |         await page.keyboard.type(value, { delay: 40 });
  55 |         await page.keyboard.press('Enter');
  56 |     }
  57 | }
  58 | 
  59 | async mandatoryFieldValidation(page, btn, locator){
  60 |     await btn.click();
  61 |     await expect(locator).toHaveClass(/Mui-error/);
  62 | }
  63 | }
```