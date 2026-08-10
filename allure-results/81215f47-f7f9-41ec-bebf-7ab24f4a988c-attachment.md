# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\CompanyUsers.spec.js >> Test Automation for: Accounts -> Company Users page >> This test automates the Accounts -> Company Users page
- Location: tests\Admin\Accounts\CompanyUsers.spec.js:13:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Go to last page' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Go to last page' })

```

```yaml
- alert: List international Portal | List international Portal
- link "List international logo":
  - /url: /dashboard/account/me
  - img "List international logo"
- button "open drawer"
- paragraph: Management Platform
- navigation:
  - button "Main Menu":
    - img
    - text: Main Menu
- separator
- navigation:
  - button "Listing":
    - img
    - text: Listing
- separator
- navigation:
  - button "Area":
    - img
    - text: Area
- separator
- navigation:
  - button "Blogs":
    - img
    - text: Blogs
- separator
- navigation:
  - button "Profiles":
    - img
    - text: Profiles
- separator
- navigation:
  - button "Admin":
    - img
    - text: Admin
  - link "accounts":
    - /url: /dashboard/account/me
    - button "accounts":
      - img
      - text: accounts
  - link "License":
    - /url: /dashboard/admin/licenses
    - button "License"
  - link "Subscription":
    - /url: /dashboard/admin/subscription
    - button "Subscription"
  - link "Coins":
    - /url: /dashboard/admin/coins
    - button "Coins":
      - img
      - text: Coins
  - link "Watermark":
    - /url: /dashboard/admin/watermark/view
    - button "Watermark":
      - img
      - text: Watermark
  - link "Control Panel":
    - /url: /dashboard/admin/control_panel/sections
    - button "Control Panel":
      - img
      - text: Control Panel
  - link "FAQ":
    - /url: /dashboard/admin/faq
    - button "FAQ":
      - img
      - text: FAQ
- separator
- navigation:
  - button "System Health":
    - img
    - text: System Health
- separator
- button "aidadmin admin@aqaryinvestment.com":
  - img
  - text: aidadmin admin@aqaryinvestment.com
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - paragraph: Accounts
  - heading "Accounts" [level=3]
  - tablist:
    - tab "My Profile":
      - img
      - text: My Profile
    - tab "Company Users" [selected]:
      - img
      - text: Company Users
    - tab "Company Profile":
      - img
      - text: Company Profile
    - tab "Leadership":
      - img
      - text: Leadership
  - tablist:
    - tab "User Details"
    - tab "User Information" [selected]
    - tab "Manage Document"
    - tab "Social Media"
  - paragraph: user information
  - text: Gender
  - combobox "Select gender": Male
  - button "Open"
  - paragraph: Please select gender
  - text: Nationality
  - button "United Arab Emirates"
  - combobox "Select nationality"
  - button "Open"
  - paragraph: Please select nationality
  - text: Experience since
  - group:
    - spinbutton "Month": "02"
    - text: /
    - spinbutton "Day": "02"
    - text: /
    - spinbutton "Year": "2026"
    - button "Clear"
    - button "Choose date, selected date is Feb 2, 2026"
  - paragraph: Please select years of experience
  - text: Specialties
  - combobox "Select specialties"
  - button "Open"
  - paragraph: Specialties required.
  - text: Service Area
  - button "Dubai"
  - combobox "Select Service Areas"
  - button "Open"
  - paragraph: Please select a Service Expertise
  - text: Languages
  - button "English"
  - combobox "Select Languages"
  - button "Open"
  - paragraph: Please select a language
  - text: About EN
  - textbox "Description..": I am a doctor with 10 years of experience
  - paragraph: Enter about en
  - text: About AR
  - textbox "About AR": I am a doctor with 10 years of experience
  - paragraph: Enter about AR
  - button "Back":
    - img
    - text: Back
  - button "Continue":
    - text: Continue
    - img
```

# Test source

```ts
  10  |         this.firstName = page.getByRole('textbox', { name: 'Enter First Name' });
  11  |         this.lastName = page.getByRole('textbox', { name: 'Enter Last Name' });
  12  |         this.username = page.getByRole('textbox', { name: 'Enter Username' })
  13  |         this.email = page.getByRole('textbox', { name: 'User email' })
  14  |         this.extension = page.getByPlaceholder('Enter extension');
  15  |         this.landline = page.getByPlaceholder('Enter landline');
  16  |         this.mobile = page.getByPlaceholder('Enter Contact Phone no');
  17  |         this.whatsapp = page.getByPlaceholder('Enter Whats App');
  18  |         this.changeCover = page.locator('input[name="cover"]');
  19  |         this.changePhoto = page.locator('input[name="portrait"]');
  20  |         this.continueButton = page.getByRole('button', { name: 'Continue' })
  21  | 
  22  |         //User Information Page Locators
  23  |         this.userInformationPageTitle = page.getByRole('tab', { name: 'User Information' });
  24  |         this.gender = page.getByRole('combobox', { name: 'Select gender' });
  25  |         this.nationality = page.getByRole('combobox', { name: 'Select nationality' });
  26  |         this.experienceSince = page.getByText('MM/DD/YYYY');
  27  |         this.specialties = page.getByRole('combobox', { name: 'Select specialties' });
  28  |         this.serviceArea = page.getByRole('combobox', { name: 'Select Service Areas' });
  29  |         this.languages = page.getByRole('combobox', { name: 'Select Languages' });
  30  |         this.abouten = page.getByRole('textbox', { name: 'Description..' })
  31  |         this.aboutar = page.getByRole('textbox', { name: 'About AR' })
  32  | 
  33  |         //Manage Document Page Locators
  34  |         this.manageDocumentPageTitle = page.getByRole('tab', { name: 'Manage Document' });
  35  |         this.role = page.getByRole('combobox', { name: 'Select Role' });
  36  | 
  37  |         // Social Media Page Locators
  38  |         this.socialMediaPageTitle = page.getByRole('tab', { name: 'Social Media' });
  39  |         this.platform = page.getByRole('combobox', { name: 'Select Platform' });
  40  |         this.platformUrl = page.getByRole('textbox', { name: 'Enter paltform' })
  41  |         this.submitButton = page.getByRole('button', { name: 'Submit' });
  42  |         this.lastPageButton = page.getByRole('button', { name: 'Go to last page' })
  43  |     }
  44  | 
  45  |     async navigateToCompanyUsers() {
  46  |         const accountInstance = new Admin(this.page);
  47  |         await accountInstance.navigateToAccounts();
  48  |         await expect(this.companyUserstab).toBeVisible();
  49  |         await this.companyUserstab.click();
  50  |     }
  51  | 
  52  |     async createCompanyUser() {
  53  |         await expect(this.createCompanyUserButton).toBeVisible();
  54  |         await this.createCompanyUserButton.click();
  55  |         await this.firstName.fill(faker.person.firstName());
  56  |         await this.lastName.fill(faker.person.lastName());
  57  |         //Extracting Values for Verification
  58  |         const firstNameinput = await this.firstName.inputValue();
  59  |         const lastNameinput = await this.lastName.inputValue();
  60  |         const first = firstNameinput.trim();
  61  |         const last = lastNameinput.trim();
  62  |         this.mergeNames = `${first} ${last}`;
  63  |         // const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  64  |         // const mergeNamesPattern = new RegExp(`${esc(first)}\\s*${esc(last)}`);
  65  |         console.log('Value to verify: ' + this.mergeNames);
  66  |         await this.username.fill(faker.string.alpha(10).toLowerCase());
  67  |         await this.email.fill(faker.internet.email());
  68  |         await this.randomIntgenerator(this.page, this.extension);
  69  |         await this.randomIntgenerator(this.page, this.landline);
  70  |         await this.mobile.fill('23323223');
  71  |         await this.randomIntgenerator(this.page, this.whatsapp);
  72  |         await this.uploadAttachment(this.page, this.changeCover);
  73  |         await this.uploadAttachment(this.page, this.changePhoto);
  74  |         await expect(this.continueButton).toBeVisible();
  75  |         await this.continueButton.click();
  76  |         console.log("User Details Page Added Successfully");
  77  | 
  78  |         //User Information Page
  79  |         await expect(this.userInformationPageTitle).toBeEnabled();
  80  |         await this.selectfromDropdown(this.page, this.gender, 'Male');
  81  |         await this.selectfromDropdown(this.page, this.nationality, 'United Arab');
  82  |         await this.experienceSince.pressSequentially('22/02/2026');
  83  |         await this.selectfromDropdown(this.page, this.specialties, 'Test');
  84  |         await this.selectfromDropdown(this.page, this.serviceArea, 'Dubai');
  85  |         await this.selectfromDropdown(this.page, this.languages, 'English');
  86  |         await this.abouten.fill('I am a doctor with 10 years of experience');
  87  |         await this.aboutar.fill('I am a doctor with 10 years of experience');
  88  |         await this.continueButton.click();
  89  |         console.log("User Information Page Added Successfully");
  90  | 
  91  | 
  92  |         //Manage Document Page
  93  |         await expect(this.manageDocumentPageTitle).toBeEnabled();
  94  |         await this.selectfromDropdown(this.page, this.role, 'Agent');
  95  |         await this.continueButton.click();
  96  |         console.log("Manage Document Page Added Successfully");
  97  | 
  98  |         //Social Media Page
  99  |         await expect(this.socialMediaPageTitle).toBeEnabled();
  100 |         await this.selectfromDropdown(this.page, this.platform, 'Facebook');
  101 |         await this.platformUrl.fill('https://www.facebook.com/');
  102 |         await this.submitButton.click();
  103 |         console.log("Social Media Page Added Successfully");
  104 |         console.log("User Added Successfully");
  105 | 
  106 |     }
  107 | 
  108 |     async verifyUser(){
  109 |         // Verifying the Added User
> 110 |         await expect(this.lastPageButton).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  111 |         await this.lastPageButton.click();
  112 |         await expect(this.page.getByText(this.mergeNames)).toBeVisible({ timeout: 20_000 });
  113 |         console.log('User Verified Successfully:', this.mergeNames);
  114 |         // return this.mergeNames;
  115 |     }
  116 | 
  117 |    
  118 |    
  119 | }
  120 | 
```