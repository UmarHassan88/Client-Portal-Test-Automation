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

Locator: getByText('Top-Up Created successfully')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Top-Up Created successfully')

```

```yaml
- dialog:
  - paragraph: Create Top-Up Coin
  - button:
    - img
  - text: Amount of coins
  - spinbutton: "63016"
  - paragraph: Please enter amount of coins
  - text: Top-Up Coins Validity
  - group:
    - spinbutton "Month": "06"
    - text: /
    - spinbutton "Day": "23"
    - text: /
    - spinbutton "Year": "2027"
    - button "Clear"
    - button "Choose date, selected date is Jun 23, 2027"
  - paragraph: Please enter top-up coins validity
  - text: Total payment
  - spinbutton [disabled]: "0"
  - paragraph: Please enter total payment
  - text: Payment Method
  - combobox "Payment Method": Bank Transfer
  - button "Open"
  - paragraph: Please Select Subscription
  - text: Transfer Number
  - textbox "Transfer Number": arjs7uRSh
  - paragraph: Please Enter Transfer Number
  - text: Upload the Receipt
  - button "Testpic.png Drag & drop or click to upload PDF, JPG, PNG up to 2MB":
    - button "Testpic.png Drag & drop or click to upload PDF, JPG, PNG up to 2MB"
    - text: Testpic.png
    - paragraph: Drag & drop or click to upload
    - paragraph: PDF, JPG, PNG up to 2MB
  - paragraph: Please upload your Receipt
  - button "clear"
  - button "submit"
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
  18 | 
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
> 41 |         await expect(this.page.getByText('Top-Up Created successfully')).toBeVisible();
     |                                                                          ^ Error: expect(locator).toBeVisible() failed
  42 |         await this.page.reload();
  43 |         await this.page.waitForTimeout(2000);
  44 |        
  45 |     } 
  46 |    
  47 |     async verifycreatedtopupCoin(){
  48 |         await expect(this.page.getByText(this.formattedCoinsAmount, { exact: true })).toBeVisible({ timeout: 20_000 });
  49 |         console.log('Coins Amount:', this.formattedCoinsAmount + 'is verified');
  50 |     }
  51 |    
  52 | }
  53 | 
```