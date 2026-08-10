# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\Profile.spec.js >> Test Automation for: Accounts -> Profile page >> This test automates the Accounts -> Profile page -> User Profile
- Location: tests\Admin\Accounts\Profile.spec.js:16:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://192.168.1.203:3456/en/dashboard/account/me"
Received: "https://dashboard.oneaqary.com/en/dashboard/account/me"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://dashboard.oneaqary.com/en/dashboard/account/me"

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
    - tab "My Profile" [selected]:
      - img
      - text: My Profile
    - tab "Company Users":
      - img
      - text: Company Users
    - tab "Company Profile":
      - img
      - text: Company Profile
    - tab "Leadership":
      - img
      - text: Leadership
  - paragraph: User Information
  - button "Edit":
    - img
    - text: Edit
  - img
  - paragraph: Email
  - text: ":"
  - paragraph: admin@aqaryinvestment.com
  - img
  - paragraph: Phone Number
  - text: ":"
  - paragraph: +971 7051035914
  - img
  - paragraph: Landline
  - text: ":"
  - paragraph: +971 1234567890
  - img
  - paragraph: WhatsApp
  - text: ":"
  - paragraph: +971 2544321314314
  - paragraph: User Profile
  - button "Edit":
    - img
    - text: Edit
  - img "use cover image"
  - img "use cover image"
  - paragraph: aidadmin
  - paragraph: Password
  - button "Edit":
    - img
    - text: Edit
  - img
  - paragraph: Password
  - text: ":"
  - paragraph: "***********"
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
> 44 |         await expect(this.page).toHaveURL('http://192.168.1.203:3456/en/dashboard/account/me');
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
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
  61 |         await this.changePhoto.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');
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