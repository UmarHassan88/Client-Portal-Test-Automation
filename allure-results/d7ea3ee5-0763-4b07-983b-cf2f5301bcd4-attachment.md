# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Marketing_Notification.spec.js >> This test test automates the Notification Section
- Location: tests\Listing\Marketing\Marketing_Notification.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'submit' })

```

# Test source

```ts
  1  | import {expect} from '@playwright/test';
  2  | import { Listing } from './Listing';
  3  | import { Helpers } from './ReusableFunctions/helpers';
  4  | 
  5  | export class Notifications extends Helpers {
  6  |     constructor(page) {
  7  |         super(page);
  8  |         this.page = page;
  9  |         this.createNotificationbutton = page.getByRole('button', { name: 'Create Notification' });
  10 |         this.createAssertion = page.getByRole('dialog').getByText('Create Notification');
  11 |         this.submitBtn = page.getByRole('button', { name: 'submit' });
  12 |         this.notifMandatory = page.getByText('Notification Title EN *');
  13 |         this.notifBody = page.getByText('Notification Body EN *');
  14 |         this.notificationTitle = page.locator('[id="_r_j2_"]');
  15 |     }
  16 | 
  17 |     async mandatoryFieldsValidation(){
> 18 |         await this.submitBtn.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |         await expect(this.notifMandatory).toHaveClass(/Mui-error/);
  20 |         await expect(this.notifBody).toHaveClass(/Mui-error/);
  21 |     }
  22 | 
  23 |     async createNotification(){
  24 |         const listingInstance = new Listing(this.page);
  25 |         await listingInstance.navigatetoMarketing();
  26 |         await this.createNotificationbutton.click();
  27 |         await expect(this.createAssertion).toBeVisible();
  28 |         await this.submitBtn.click();
  29 | 
  30 |     }
  31 | }
```