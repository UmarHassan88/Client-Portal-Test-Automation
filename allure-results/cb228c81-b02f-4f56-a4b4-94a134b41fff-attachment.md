# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\Coins\Coins.spec.js >> Create Top upo coins
- Location: tests\Admin\Coins\Coins.spec.js:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('34,857', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText('34,857', { exact: true })

```

```yaml
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
  - link "Coins":
    - /url: /dashboard/admin/coins
    - button "Coins":
      - img
      - text: Coins
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
        - paragraph: Aqary Coins
  - heading "Manage Top-Up Coins" [level=3]
  - img
  - paragraph: Completed
  - paragraph: "0"
  - img
  - paragraph: Pending Financial Approval
  - paragraph: "54"
  - img
  - paragraph: Pending Edit
  - paragraph: "0"
  - img
  - paragraph: Total Top-Up Coins
  - paragraph: "54"
  - paragraph: Top-Up Coins
  - button "Create Top-Up Coin":
    - img
    - text: Create Top-Up Coin
  - textbox "Search"
  - combobox: Top-up Status
  - text: Top-Up Date
  - group "Top-Up Date":
    - spinbutton "Month": MM
    - text: /
    - spinbutton "Day": DD
    - text: /
    - spinbutton "Year": YYYY
    - button "Choose date"
  - button "Export":
    - img
    - text: Export
  - table:
    - rowgroup:
      - row "Top-Up Date Column Actions Amount of Coins Column Actions Total Payment Column Actions Top-up Status Column Actions Payment Source Column Actions Actions":
        - columnheader "Top-Up Date Column Actions":
          - text: Top-Up Date
          - button "Column Actions"
        - columnheader "Amount of Coins Column Actions":
          - text: Amount of Coins
          - button "Column Actions"
        - columnheader "Total Payment Column Actions":
          - text: Total Payment
          - button "Column Actions"
        - columnheader "Top-up Status Column Actions":
          - text: Top-up Status
          - button "Column Actions"
        - columnheader "Payment Source Column Actions":
          - text: Payment Source
          - button "Column Actions"
        - columnheader "Actions"
    - rowgroup:
      - row "11/08/2026 90,396 AED 271,188 Pending financial approval CLIENT DASHBOARD":
        - cell "11/08/2026"
        - cell "90,396"
        - cell "AED 271,188"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "11/08/2026 57,588 AED 172,764 Pending financial approval CLIENT DASHBOARD":
        - cell "11/08/2026"
        - cell "57,588"
        - cell "AED 172,764"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "11/08/2026 56,943 AED 170,829 Pending financial approval CLIENT DASHBOARD":
        - cell "11/08/2026"
        - cell "56,943"
        - cell "AED 170,829"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "11/08/2026 54,079 AED 162,237 Pending financial approval CLIENT DASHBOARD":
        - cell "11/08/2026"
        - cell "54,079"
        - cell "AED 162,237"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "11/08/2026 17,762 AED 53,286 Pending financial approval CLIENT DASHBOARD":
        - cell "11/08/2026"
        - cell "17,762"
        - cell "AED 53,286"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "03/08/2026 96,135 AED 192,270 Pending financial approval CLIENT DASHBOARD":
        - cell "03/08/2026"
        - cell "96,135"
        - cell "AED 192,270"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "03/08/2026 68,616 AED 137,232 Pending financial approval CLIENT DASHBOARD":
        - cell "03/08/2026"
        - cell "68,616"
        - cell "AED 137,232"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "03/08/2026 89,612 AED 179,224 Pending financial approval CLIENT DASHBOARD":
        - cell "03/08/2026"
        - cell "89,612"
        - cell "AED 179,224"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "01/08/2026 38,568 AED 77,136 Pending financial approval CLIENT DASHBOARD":
        - cell "01/08/2026"
        - cell "38,568"
        - cell "AED 77,136"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
      - row "01/08/2026 44,267 AED 88,534 Pending financial approval CLIENT DASHBOARD":
        - cell "01/08/2026"
        - cell "44,267"
        - cell "AED 88,534"
        - cell "Pending financial approval"
        - cell "CLIENT DASHBOARD"
        - cell:
          - button:
            - img
  - text: Rows per page
  - combobox "Rows per page": "10"
  - text: 1-10 of 54
  - button "Go to first page" [disabled]
  - button "Go to previous page" [disabled]
  - button "Go to next page"
  - button "Go to last page"
- alert
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { Admin } from "./Admin";
  3  | import { Helpers } from "./ReusableFunctions/helpers";
  4  | 
  5  | export class Coins extends Helpers{
  6  |     constructor(page){
  7  |         super(page);
  8  |         this.page = page;
  9  |         this.createTopupcoin = page.getByRole('button', { name: 'Create Top-Up Coin' });
  10 |         this.assertpopup = page.getByRole('dialog').getByText('Create Top-Up Coin');
  11 |         this.amountofCoins = page.getByPlaceholder('Enter amount of coins');
  12 |         // MUI date picker: separate Month / Day / Year spinbuttons
  13 |         this.validityMonth = page.getByRole('dialog').getByRole('spinbutton', { name: 'Month' });
  14 |         this.paymentMethod = page.getByRole('combobox', { name: 'Payment Method' });
  15 |         this.transferNumber = page.getByRole('textbox', { name: 'Transfer Number' });
  16 |         this.uploadReceipt = page.locator('#file, input[type="file"]').first();
  17 |         this.submitBtn = page.getByRole('dialog').getByRole('button', { name: 'submit' });
  18 |         this.verifySearch = page.getByRole('textbox', { name: 'Search' })
  19 |     }
  20 | 
  21 |     async createCoin(){
  22 |         const adminInstance = new Admin(this.page);
  23 |         await adminInstance.navigateToCoins();
  24 |         await expect(this.createTopupcoin).toBeVisible();
  25 |         await this.createTopupcoin.click();
  26 |         await expect(this.assertpopup).toBeVisible();
  27 |         await this.randomIntgenerator(this.page, this.amountofCoins);
  28 |         this.coinsAmount = await this.amountofCoins.inputValue();
  29 |         // Table shows amounts with thousand separators (e.g. 12345 → 12,345)
  30 |         this.formattedCoinsAmount = Number(this.coinsAmount).toLocaleString('en-US');
  31 |         console.log('Coins Amount:', this.coinsAmount, '→', this.formattedCoinsAmount);
  32 | 
  33 |         const validityDate = this.randomCalendarDate();
  34 |         console.log('Coins Validity Date:', validityDate);
  35 |         await this.fillMuiCalendarDate(this.validityMonth, validityDate);
  36 | 
  37 |         await this.selectfromDropdown(this.page, this.paymentMethod, 'Bank Transfer');
  38 |         await this.randomStringgenerator(this.page, this.transferNumber);
  39 |         await this.uploadAttachment(this.page, this.uploadReceipt);
  40 |         await this.submitBtn.click();
  41 |         // await expect(this.page.getByText('Top-Up Created successfully')).toBeVisible();
  42 |         await this.page.reload();
  43 |         await this.page.waitForTimeout(2000);
  44 |        
  45 |     } 
  46 | 
  47 |     async verifycreatedtopupCoin(){
  48 |         await this.verifySearch.fill(this.formattedCoinsAmount);
> 49 |         await expect(this.page.getByText(this.formattedCoinsAmount, { exact: true })).toBeVisible({ timeout: 20_000 });
     |                                                                                       ^ Error: expect(locator).toBeVisible() failed
  50 |         console.log('Coins Amount:', this.formattedCoinsAmount + 'is verified');
  51 |     }
  52 |    
  53 | }
  54 | 
```