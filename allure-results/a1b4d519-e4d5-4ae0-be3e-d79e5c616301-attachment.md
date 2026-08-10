# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listing\Marketing\Marketing_Notification.spec.js >> This test test automates the Notification Section
- Location: tests\Listing\Marketing\Marketing_Notification.spec.js:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('dialog').getByText('Create Notification')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('dialog').getByText('Create Notification')

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
  - link "Property":
    - /url: /dashboard/listing/property
    - button "Property":
      - img
      - text: Property
  - link "Unit":
    - /url: /dashboard/listing/unit
    - button "Unit"
  - link "Services":
    - /url: /dashboard/listing/services
    - button "Services":
      - img
      - text: Services
  - link "Ads":
    - /url: /dashboard/listing/ads
    - button "Ads"
  - link "Marketing":
    - /url: /dashboard/listing/marketing/notifications
    - button "Marketing"
  - link "Listing Requests":
    - /url: /dashboard/listing/requests
    - button "Listing Requests":
      - img
      - text: Listing Requests
  - link "Api Keys & Webhooks":
    - /url: /dashboard/listing/apikeys
    - button "Api Keys & Webhooks":
      - img
      - text: Api Keys & Webhooks
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
        - paragraph: Manage Ads
  - heading "Marketing" [level=3]
  - heading "Create, manage, and track push notifications and banners" [level=4]
  - tablist:
    - tab "Notifications" [selected]
    - tab "Banners"
  - paragraph: Manage Notifications
  - button "Create Notification":
    - img
    - text: Create Notification
  - textbox "Search"
  - button "Export":
    - img
    - text: Export
  - table:
    - rowgroup:
      - row "Notification Title Column Actions Audience Column Actions Status Column Actions Push Date & Time Column Actions Actions":
        - columnheader "Notification Title Column Actions":
          - text: Notification Title
          - button "Column Actions"
        - columnheader "Audience Column Actions":
          - text: Audience
          - button "Column Actions"
        - columnheader "Status Column Actions":
          - text: Status
          - button "Column Actions"
        - columnheader "Push Date & Time Column Actions":
          - text: Push Date & Time
          - button "Column Actions"
        - columnheader "Actions"
    - rowgroup:
      - row "Notif UT company 1785739492888 Custom Sent 04 Aug 2026, 09:23 AM View Re-Push Edit Delete":
        - cell "Notif UT company 1785739492888"
        - cell "Custom"
        - cell "Sent"
        - cell "04 Aug 2026, 09:23 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "laboriosam volup cervus defluo 1785751483840 Custom Sent 03 Aug 2026, 02:08 PM View Re-Push Edit Delete":
        - cell "laboriosam volup cervus defluo 1785751483840"
        - cell "Custom"
        - cell "Sent"
        - cell "03 Aug 2026, 02:08 PM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "tempore strenuus quisquam delibero 1785750751088 All Sent 03 Aug 2026, 01:56 PM View Re-Push Edit Delete":
        - cell "tempore strenuus quisquam delibero 1785750751088"
        - cell "All"
        - cell "Sent"
        - cell "03 Aug 2026, 01:56 PM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated debitis patior sulum subvenio 1785751484569 Custom Sent 03 Aug 2026, 02:08 PM View Re-Push Edit Delete":
        - cell "Updated debitis patior sulum subvenio 1785751484569"
        - cell "Custom"
        - cell "Sent"
        - cell "03 Aug 2026, 02:08 PM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated consequuntur volubilis ulterius vis 1785739765419 All Sent 03 Aug 2026, 10:49 AM View Re-Push Edit Delete":
        - cell "Updated consequuntur volubilis ulterius vis 1785739765419"
        - cell "All"
        - cell "Sent"
        - cell "03 Aug 2026, 10:49 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated vicissitudo condico auxilium claustrum 1785739701840 All Sent 03 Aug 2026, 10:48 AM View Re-Push Edit Delete":
        - cell "Updated vicissitudo condico auxilium claustrum 1785739701840"
        - cell "All"
        - cell "Sent"
        - cell "03 Aug 2026, 10:48 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated avarus nobis arguo illo 1785739680466 Custom Sent 03 Aug 2026, 10:48 AM View Re-Push Edit Delete":
        - cell "Updated avarus nobis arguo illo 1785739680466"
        - cell "Custom"
        - cell "Sent"
        - cell "03 Aug 2026, 10:48 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated cui deinde patrocinor cattus 1785739593596 All Sent 03 Aug 2026, 10:46 AM View Re-Push Edit Delete":
        - cell "Updated cui deinde patrocinor cattus 1785739593596"
        - cell "All"
        - cell "Sent"
        - cell "03 Aug 2026, 10:46 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "Updated 1785739526449 All Sent 03 Aug 2026, 10:45 AM View Re-Push Edit Delete":
        - cell "Updated 1785739526449"
        - cell "All"
        - cell "Sent"
        - cell "03 Aug 2026, 10:45 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
      - row "t Custom Sent 03 Aug 2026, 10:45 AM View Re-Push Edit Delete":
        - cell "t"
        - cell "Custom"
        - cell "Sent"
        - cell "03 Aug 2026, 10:45 AM"
        - cell "View Re-Push Edit Delete":
          - button:
            - img
          - button "Re-Push":
            - img
            - text: Re-Push
          - button:
            - img
          - button:
            - img
  - text: Rows per page
  - combobox "Rows per page": "10"
  - text: 1-10 of 23
  - button "Go to first page" [disabled]
  - button "Go to previous page" [disabled]
  - button "Go to next page"
  - button "Go to last page"
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
  13 |         this.notificationTitle = page.locator('[id="_r_j2_"]');
  14 |     }
  15 | 
  16 |     async createNotification(){
  17 |         const listingInstance = new Listing(this.page);
  18 |         await listingInstance.navigatetoMarketing();
> 19 |         await expect(this.createAssertion).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  20 |         await this.submitBtn.click();
  21 |         await expect(this.notifMandatory).toHaveClass(/Mui-error/);
  22 | 
  23 |     }
  24 | }
```