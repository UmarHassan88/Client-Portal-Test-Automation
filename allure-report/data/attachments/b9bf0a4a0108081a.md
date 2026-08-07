# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\Profile.spec.js >> Test Automation for: Accounts -> Profile page >> This test automates the Accounts -> Profile page -> User Profile
- Location: tests\Admin\Accounts\Profile.spec.js:16:7

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - link [ref=e162] [cursor=pointer]:
            - /url: /dashboard/admin/faq
            - button "FAQ" [ref=e164]
        - separator [ref=e172]
        - navigation [ref=e173]:
          - button "System Health" [ref=e174]
        - separator [ref=e181]
      - button "aidadmin admin@aqaryinvestment.com" [ref=e182] [cursor=pointer]:
        - generic [ref=e185]:
          - generic [ref=e186]: aidadmin
          - generic [ref=e187]: admin@aqaryinvestment.com
      - generic [ref=e188]:
        - button [ref=e189] [cursor=pointer]
        - button [ref=e192] [cursor=pointer]
        - button [ref=e196] [cursor=pointer]
        - button [ref=e202] [cursor=pointer]
    - main [ref=e205]:
      - generic [ref=e207]:
        - navigation "breadcrumb" [ref=e208]:
          - list [ref=e209]:
            - listitem [ref=e210]:
              - paragraph [ref=e211]: Accounts
        - heading "Accounts" [level=3] [ref=e214]
      - tablist [ref=e217]:
        - tab "My Profile" [selected] [ref=e218] [cursor=pointer]
        - tab "Company Users" [ref=e224] [cursor=pointer]
        - tab "Company Profile" [ref=e230] [cursor=pointer]
        - tab "Leadership" [ref=e235] [cursor=pointer]
      - generic [ref=e242]:
        - generic [ref=e243]:
          - paragraph [ref=e246]: User Information
          - button [ref=e248] [cursor=pointer]
        - generic [ref=e255]:
          - generic [ref=e257]:
            - paragraph [ref=e263]: Email
            - text: ":"
            - paragraph [ref=e264]: admin@aqaryinvestment.com
          - generic [ref=e266]:
            - paragraph [ref=e271]: Phone Number
            - text: ":"
            - paragraph [ref=e272]: +971 7051035914
          - generic [ref=e274]:
            - paragraph [ref=e279]: Landline
            - text: ":"
            - paragraph [ref=e280]: +971 1234567890
          - generic [ref=e282]:
            - paragraph [ref=e287]: WhatsApp
            - text: ":"
            - paragraph [ref=e288]: +971 2544321314314
      - generic [ref=e290]:
        - paragraph [ref=e294]: Edit User Profile
        - generic [ref=e297]:
          - generic [ref=e298]:
            - generic [ref=e300]:
              - img "use cover image" [ref=e301]
              - generic [ref=e302]:
                - button "Change Cover" [ref=e303] [cursor=pointer]
                - generic [ref=e309]:
                  - button "Choose File" [ref=e310]
                  - group
            - generic [ref=e312]:
              - img "use cover image" [ref=e314]
              - generic [ref=e315]:
                - paragraph [ref=e316]: aidadmin
                - generic [ref=e317]:
                  - button "Change Photo" [ref=e318] [cursor=pointer]
                  - generic [ref=e324]:
                    - button "Choose File" [ref=e325]
                    - group
                - paragraph [ref=e326]: JPG, PNG or JPEG (max 2MB)
          - generic [ref=e327]:
            - button "cancel" [ref=e328] [cursor=pointer]
            - button "save" [ref=e329] [cursor=pointer]
      - generic [ref=e331]:
        - generic [ref=e332]:
          - paragraph [ref=e335]: Password
          - button [ref=e337] [cursor=pointer]
        - generic [ref=e346]:
          - paragraph [ref=e352]: Password
          - text: ":"
          - paragraph [ref=e353]: "***********"
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | import { Admin } from './Admin';
  3  | import { Helpers } from './ReusableFunctions/helpers';
  4  | 
  5  | let email = 'admin@aqaryinvestment.com';
  6  | let landlineNum = '1234567890';
  7  | let currentPassword = 'HereWeGo@2026';
  8  | let newPassword = currentPassword;
  9  | let confirmPassword = newPassword;
  10 | 
  11 | export class AccountsProfile extends Helpers{
  12 |     
  13 |     constructor(page) {
  14 |         super(page);
  15 |        
  16 |         this.edituserInfo = page.getByRole('button', { name: 'Edit' }).first();
  17 |         this.landline = page.getByPlaceholder('Enter Landline');
  18 |         this.saveButton = page.getByRole('button', { name: 'save' });
  19 |         this.emailLoc = page.getByRole('textbox', { name: 'Email address' })
  20 |         this.landlineVerify = page.getByText('+971 ' + landlineNum);
  21 |         this.emailVerify = page.getByRole('button', { name: 'aidadmin ' + `${email}` })
  22 | 
  23 |         //User Profile Locators
  24 |         this.userProfile = page.getByRole('button', { name: 'Edit' }).nth(1);
  25 |         this.changePhoto = page.locator('input[name="portrait"]');
  26 |         this.changeCover = page.locator('input[name="cover"]')
  27 |         this.saveButton = page.getByRole('button', { name: 'save' });
  28 |         this.verifyprofileImage = page.getByRole('img', { name: 'use cover image' }).nth(1);
  29 |         this.verifycoverImage = page.getByRole('img', { name: 'use cover image' }).first();
  30 | 
  31 |         //Password Locators
  32 |         this.editPasswordIcon = page.getByRole('button', { name: 'Edit' }).nth(2);
  33 |         this.savePasswordButton = page.getByRole('button', { name: 'save' });
  34 |         this.warningValidation = page.getByRole('alert').filter({ hasText: 'Password must contain at' });
  35 |         this.currentPassword = page.getByRole('textbox', { name: 'Current Password' });
  36 |         this.newPassword = page.getByRole('textbox', { name: 'New Password' });
  37 |         this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
  38 |         this.samepasswordValidation = page.getByRole('alert').filter({ hasText: 'new password must be' });
  39 | 
  40 |     }
  41 |     async navigateToAccounts(){
  42 |         const adminInstance = new Admin(this.page);
  43 |         await adminInstance.navigateToAccounts();
  44 |         await expect(this.page).toHaveURL('http://192.168.1.203:3456/en/dashboard/account/me');
  45 |     }
  46 |     async profileeditUserInfo(){
  47 |         await expect(this.edituserInfo).toBeVisible();
  48 |         await this.edituserInfo.click();
  49 |         await this.landline.fill(landlineNum);
  50 |         await this.emailLoc.fill(email);
  51 |         await this.saveButton.click();
  52 |         // await this.page.reload();
  53 |         await expect(this.landlineVerify).toBeVisible();
  54 |         //Validation for Email in the Icon.
  55 |         await expect(this.emailVerify).toBeVisible();
  56 |     }
  57 | 
  58 |     async edituserProfile(){
  59 |         await expect(this.userProfile).toBeVisible();
  60 |         await this.userProfile.click();
> 61 |         await this.changePhoto.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
     |         ^ Error: ENOENT: no such file or directory, stat 'C:\Users\umar\Downloads\Testpic.png'
  62 |         await this.uploadAttachment(this.page, this.changePhoto);
  63 |         await this.uploadAttachment(this.page, this.changeCover);
  64 |         await this.saveButton.click();
  65 |         await expect(this.verifyprofileImage).toBeVisible();
  66 |         await expect(this.verifycoverImage).toBeVisible();
  67 |     }
  68 | 
  69 |     async editPassword(){
  70 |         await expect(this.editPasswordIcon).toBeVisible();
  71 |         await this.editPasswordIcon.click();
  72 |         await this.savePasswordButton.click();
  73 |         await expect(this.warningValidation).toBeVisible();
  74 |         await this.currentPassword.fill(currentPassword);
  75 |         await this.newPassword.fill(newPassword);
  76 |         await this.confirmPassword.fill(confirmPassword);
  77 |         await this.savePasswordButton.click();
  78 |         await expect(this.samepasswordValidation).toBeVisible();
  79 | 
  80 |     }
  81 | }
```