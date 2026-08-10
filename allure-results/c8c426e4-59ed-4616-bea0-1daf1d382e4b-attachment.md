# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\Profile.spec.js >> Test Automation for: Accounts -> Profile page >> This test automates the Accounts -> Profile page -> Password
- Location: tests\Admin\Accounts\Profile.spec.js:20:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://192.168.1.203:3456/en/dashboard/account/me"
Received: "https://dashboard.oneaqary.com/en/dashboard/account/me"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://dashboard.oneaqary.com/en/auth/login"
    5 × unexpected value "https://dashboard.oneaqary.com/en/dashboard/account/me"

```

```yaml
- alert
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
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class Login {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.url = "https://dashboard.oneaqary.com/en/auth/login";
  7  |     
  8  |     this.usernameInput = page.getByRole("textbox", {
  9  |       name: "admin@aqaryint.com",
  10 |     });
  11 |     this.passwordInput = page.getByRole("textbox", { name: "password" });
  12 |     this.loginButton = page.getByRole("button", { name: "Log in" });
  13 |   }
  14 | 
  15 |   async login(username, password) {
  16 |     await this.page.goto(this.url);
  17 |     await this.usernameInput.fill(username);
  18 |     await this.passwordInput.fill(password);
  19 |     await this.loginButton.click();
> 20 |     await expect(this.page).toHaveURL(
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  21 |       "http://192.168.1.203:3456/en/dashboard/account/me",
  22 |     );
  23 |   }
  24 | }
  25 | 
```