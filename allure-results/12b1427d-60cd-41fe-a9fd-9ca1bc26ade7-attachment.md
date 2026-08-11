# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Coins\Coins.spec.js >> Create Top upo coins
- Location: tests\Admin\Coins\Coins.spec.js:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://dashboard.oneaqary.com/en/dashboard/account/me"
Received: "https://dashboard.oneaqary.com/en/auth/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://dashboard.oneaqary.com/en/auth/login"

```

```yaml
- img "aqary login"
- img "Aqary logo"
- paragraph: Management Platform
- paragraph: Log in to Your Account
- paragraph: Manage your properties with ease
- text: User Name
- textbox "admin@aqaryint.com": admin@aqaryinvestment.com
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
  21 |       "https://dashboard.oneaqary.com/en/dashboard/account/me",
  22 |     );
  23 |   }
  24 | }
  25 | 
```