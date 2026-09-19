# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\CompanyProfile.spec.js >> Test Automation for: Company Profile page
- Location: tests\Admin\Accounts\CompanyProfile.spec.js:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Company profile updated')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Company profile updated')

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
  - link "FAQ":
    - /url: /dashboard/admin/faq
    - button "FAQ":
      - img
      - text: FAQ
- separator
- button "aidadmin admin@aqaryinvestment.com"
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
    - tab "Company Users":
      - img
      - text: Company Users
    - tab "Company Profile" [selected]:
      - img
      - text: Company Profile
    - tab "Leadership":
      - img
      - text: Leadership
  - tablist:
    - tab "Company Information"
    - tab "Presentation & Contact Information" [selected]
    - tab "Working Hours"
    - tab "Social Media"
    - tab "Bank Accounts"
  - heading "Information" [level=6]
  - text: Email address
  - textbox "Email address": company1787731652795@test.com
  - paragraph: Please enter email address
  - text: Contact Phone Number
  - combobox:
    - img "Flag"
    - text: "+971"
  - spinbutton: "160599886"
  - paragraph: Enter contact no
  - text: WhatsApp Number
  - combobox:
    - img "Flag"
    - text: "+971"
  - spinbutton: "483455119"
  - paragraph: Enter whatsapp no
  - text: Landline Number
  - textbox "Please Enter tagline":
    - /placeholder: "Please Enter tagline "
    - text: "423201364"
  - paragraph: Please enter tagline
  - text: Website URL
  - textbox "Enter website URL": https://aqaryaid.com/en/updated
  - paragraph: Please enter website URL
  - text: Establishment Date
  - group:
    - spinbutton "Month": "01"
    - text: /
    - spinbutton "Day": "01"
    - text: /
    - spinbutton "Year": "0001"
    - button "Clear"
    - button "Choose date, selected date is Jan 1, 0001"
  - paragraph: Please enter establishment date
  - separator
  - heading "Documents" [level=6]
  - text: Upload Logo Image
  - button "Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB":
    - button "Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB"
    - paragraph: Drag & drop or click to upload
    - paragraph: PDF, JPG, PNG, GIF up to 2MB
  - img "178775173764779016201a03e4e-a92f-7c09-be3d-c6d9b089092asubscription-contract-21.png"
  - img
  - text: 178775173764779016201a03e4e-a92f-7c09-be3d-c6d9b089092asubscription-contract-21.png
  - img
  - text: Upload Cover Image
  - button "Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB":
    - button "Choose File"
    - paragraph: Drag & drop or click to upload
    - paragraph: PDF, JPG, PNG, GIF up to 2MB
  - img "178775173747324758101a03e4e-a881-73be-8288-a20c29666bd51779189021143068187019e3fed-f9d7-73ac-a270-61f5093ff2f683.jpg"
  - img
  - text: 178775173747324758101a03e4e-a881-73be-8288-a20c29666bd51779189021143068187019e3fed-f9d7-73ac-a270-61f5093ff2f683.jpg
  - img
  - text: Upload Horizontal Cover Image
  - button "Choose File Drag & drop or click to upload PDF, JPG, PNG, GIF up to 2MB":
    - button "Choose File"
    - paragraph: Drag & drop or click to upload
    - paragraph: PDF, JPG, PNG, GIF up to 2MB
  - img "1778048512282103726019dfbf3-311a-798b-8993-794971de7068AldarCover12.png"
  - img
  - text: 1778048512282103726019dfbf3-311a-798b-8993-794971de7068AldarCover12.png
  - img
  - separator
  - heading "Details" [level=6]
  - text: About EN
  - button "Normal":
    - text: Normal
    - img
  - button "Bold":
    - img
  - button "Italic":
    - img
  - button "Underline":
    - img
  - button "Align Left":
    - img
  - button "Align Center":
    - img
  - button "Align Right":
    - img
  - button "Justify":
    - img
  - button "Insert Link":
    - img
  - button "Insert Image":
    - img
  - button "Import Word document":
    - img
  - button "Insert Embed":
    - img
  - button "Numbered List":
    - img
  - button "Bullet List":
    - img
  - button "Checklist":
    - img
  - button "Split Section":
    - img
  - button "Clear Formatting":
    - img
  - paragraph: This is AID
  - paragraph: Enter About
  - text: About AR
  - button "Normal":
    - text: Normal
    - img
  - button "Bold":
    - img
  - button "Italic":
    - img
  - button "Underline":
    - img
  - button "Align Left":
    - img
  - button "Align Center":
    - img
  - button "Align Right" [pressed]:
    - img
  - button "Justify":
    - img
  - button "Insert Link":
    - img
  - button "Insert Image":
    - img
  - button "Import Word document":
    - img
  - button "Insert Embed":
    - img
  - button "Numbered List":
    - img
  - button "Bullet List":
    - img
  - button "Checklist":
    - img
  - button "Split Section":
    - img
  - button "Clear Formatting":
    - img
  - paragraph: TTThuiyyuih
  - paragraph
  - paragraph: Company Name AR
  - paragraph: Company Name AR
  - paragraph
  - paragraph: About AR
  - text: Profile Description EN
  - textbox "About": Virga capillus qui auctor blanditiis coniuratio defero bis. Pecto sui animus deprecator auctus pectus degusto comptus carpo. Terga eos arbitro clementia quo audax.
  - paragraph: Enter About
  - text: Profile Description AR
  - textbox "About AR": Vetus verecundia tenuis defleo commodo. Vomica capitulus custodia calcar clementia quasi. Studio viscus a turbo creber cibus delectatio charisma conduco tergo.
  - paragraph: About AR
  - button "Back":
    - img
    - text: Back
  - button "Save & Continue":
    - text: Save & Continue
    - img
```

# Test source

```ts
  17  |         this.whatsappNumber = page.getByPlaceholder('Enter Whatsapp Number');
  18  |         // App reuses the tagline placeholder on the landline field
  19  |         this.landlineNumber = page.getByPlaceholder(/Please Enter tagline/i);
  20  |         this.description = page.getByRole('textbox', { name: 'About', exact: true });
  21  |         this.descriptionAR = page.getByRole('textbox', { name: 'About AR' });
  22  |         this.savecontinueButton = page.getByRole('button', { name: 'Save & Continue' });
  23  | 
  24  |         //Social Media Locators
  25  |         this.platform = page.getByRole('combobox', { name: 'Select Platform' });
  26  |         this.platformUrl = page.getByRole('textbox', { name: 'Enter paltform' })
  27  |         this.addPlatformButton = page.getByRole('button').filter({ hasText: 'Platform' });
  28  |         this.verifyPlatformUrl = page.getByText('https://www.instagram.com/testaccount/');
  29  |         this.verifyPlatformUrlEdit = page.getByText('https://www.facebook.com/testaccount/');
  30  |         this.editURL = page.locator('div:nth-child(7) > .MuiBox-root.mui-1bhb1an > .MuiBox-root.mui-21wudl > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.edit');
  31  |         this.deleteURL = page.locator('div:nth-child(7) > .MuiBox-root.mui-1bhb1an > .MuiBox-root.mui-21wudl > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.delete');
  32  | 
  33  |         //Bank Accounts Locators
  34  |         this.bankAccountsTab = page.getByRole('tab', { name: 'Bank Accounts' }); 
  35  |         this.bankName = page.getByRole('textbox', { name: 'Bank Name' });
  36  |         this.bankCountry = page.getByRole('combobox', { name: 'Please a Country' });
  37  |         this.bankCurrency = page.getByRole('combobox', { name: 'Please select a Currency' });
  38  |         this.accountholderName = page.getByRole('textbox', { name: 'Account Holder Name' });
  39  |         this.iban = page.getByRole('textbox', { name: 'IBAN Number' });
  40  |         this.swiftCode = page.getByRole('textbox', { name: 'SWIFT Code' });
  41  |         this.saveBankAccountButton = page.getByRole('button', { name: 'Save' });
  42  | 
  43  |         this.profileUpdatesuccess = page.getByText('Company profile updated');
  44  | 
  45  |     }
  46  | 
  47  |     randomPhoneDigits(length = 9) {
  48  |         return faker.string.numeric(length);
  49  |     }
  50  | 
  51  |     async navigateToCompanyProfile() {
  52  |         const adminInstance = new Admin(this.page);
  53  |         await adminInstance.navigateToAccounts();
  54  |         await expect(this.companyProfileTab).toBeVisible();
  55  |         await this.companyProfileTab.click();
  56  |         console.log('Navigated to Company Profile page');
  57  |     }
  58  | 
  59  |     async socialMediaVerification(platformValue, platformURL) {
  60  |         await expect(this.socialMediaTab).toBeEnabled();
  61  |         await this.selectfromDropdown(this.page, this.platform, platformValue);
  62  |         await this.platformUrl.fill(platformURL);
  63  |         await this.addPlatformButton.click();
  64  |         const urlValue = await this.platformUrl.inputValue();
  65  |         console.log("Social Media Page Added Successfully");
  66  |         console.log('URL Value:', urlValue);
  67  | 
  68  |         console.log('URL Verified Successfully:', urlValue);
  69  |     }
  70  | 
  71  |     async updateCompanyProfile() {
  72  |         await expect(this.presentationTab).toBeVisible();
  73  |         await this.presentationTab.click();
  74  |         // await this.contactNumber.clear();
  75  |         await this.contactNumber.fill(this.randomPhoneDigits());
  76  |         this.contactNumberValue = await this.contactNumber.inputValue();
  77  |         await this.whatsappNumber.fill(this.randomPhoneDigits());
  78  |         this.whatsappNumberValue = await this.whatsappNumber.inputValue();
  79  |         await this.landlineNumber.fill(this.randomPhoneDigits());
  80  |         this.landlineNumberValue = await this.landlineNumber.inputValue();
  81  |         await this.description.fill(faker.lorem.paragraph());
  82  |         this.descriptionValue = await this.description.inputValue();
  83  |         await this.descriptionAR.fill(faker.lorem.paragraph());
  84  |         this.descriptionARValue = await this.descriptionAR.inputValue();
  85  |         console.log('Contact Number:', this.contactNumberValue);
  86  |         console.log('Whatsapp Number:', this.whatsappNumberValue);
  87  |         console.log('Landline Number:', this.landlineNumberValue);
  88  |         console.log('Description:', this.descriptionValue);
  89  |         console.log('Description AR:', this.descriptionARValue);
  90  |         await this.savecontinueButton.click();
  91  | 
  92  |         await expect(this.workingHourstab).toBeEnabled();
  93  |         await this.workingDaytab.click();
  94  | 
  95  |         await this.socialMediaTab.click();
  96  |         await this.socialMediaVerification('Instagram', 'https://www.instagram.com/testaccount/');
  97  |         await expect(this.verifyPlatformUrl).toBeVisible();
  98  | 
  99  |         //Triggering Edit button:
  100 |         await this.editURL.click();
  101 |         console.log('Edit button clicked');
  102 |         await this.socialMediaVerification('Facebook', 'https://www.facebook.com/testaccount/');
  103 |         await expect(this.verifyPlatformUrlEdit).toBeVisible();
  104 |         await this.deleteURL.click();
  105 |         console.log('The platform added and edited is now deleted successfully');
  106 |         await expect(this.verifyPlatformUrlEdit).not.toBeVisible();
  107 | 
  108 |         await this.bankAccountsTab.click();
  109 |         await expect(this.bankAccountsTab).toBeEnabled();
  110 |         await this.randomStringgenerator(this.page, this.bankName);
  111 |         await this.selectfromDropdown(this.page, this.bankCountry, 'United Arab Emirates');
  112 |         await this.selectfromDropdown(this.page, this.bankCurrency, 'UAE Dirham');
  113 |         await this.randomStringgenerator(this.page, this.accountholderName);
  114 |         await this.randomStringgenerator(this.page, this.iban);
  115 |         await this.randomStringgenerator(this.page, this.swiftCode);
  116 |         await this.saveBankAccountButton.click();
> 117 |         await expect(this.profileUpdatesuccess).toBeVisible();
      |                                                 ^ Error: expect(locator).toBeVisible() failed
  118 |         console.log('Bank Account Added Successfully');
  119 |         console.log('---Profile Updated Successfully---');
  120 | 
  121 |     }
  122 | 
  123 |     
  124 | 
  125 | }
```