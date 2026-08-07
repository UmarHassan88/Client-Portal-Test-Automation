# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Accounts\Leadership.spec.js >> Test Automation for: Leadership page
- Location: tests\Admin\Accounts\Leadership.spec.js:10:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://192.168.1.203:3456/en/dashboard/account/me"
Received: "http://192.168.1.203:3456/en/auth/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "http://192.168.1.203:3456/en/auth/login"

```

```yaml
- img "aqary login"
- img "Aqary logo"
- paragraph: Management Platform
- paragraph: Log in to Your Account
- paragraph: Manage your properties with ease
- text: User Name
- textbox "admin@aqaryint.com"
- paragraph: Email/User has to be filled.
- text: Password
- textbox "Enter your password": HereWeGo@2026
- button "toggle password visibility"
- checkbox "Remember Me"
- text: Remember Me
- link "Forgot Password?":
  - /url: forget_password
- button "Log in"
- alert
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class Login {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.url = "http://192.168.1.203:3456/en/auth/login";
  7  |     this.usernameInput = page.getByRole("textbox", {
  8  |       name: "admin@aqaryint.com",
  9  |     });
  10 |     this.passwordInput = page.getByRole("textbox", { name: "password" });
  11 |     this.loginButton = page.getByRole("button", { name: "Log in" });
  12 |   }
  13 | 
  14 |   async login(username, password) {
  15 |     await this.page.goto(this.url);
  16 |     await this.usernameInput.fill(username);
  17 |     await this.passwordInput.fill(password);
  18 |     await this.loginButton.click();
> 19 |     await expect(this.page).toHaveURL(
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  20 |       "http://192.168.1.203:3456/en/dashboard/account/me",
  21 |     );
  22 |   }
  23 | }
  24 | 
```