import { expect } from "@playwright/test";
import { Admin } from "./Admin";
import { Helpers } from "./ReusableFunctions/helpers";

export class Coins extends Helpers{
    constructor(page){
        super(page);
        this.page = page;
        this.createTopupcoin = page.getByRole('button', { name: 'Create Top-Up Coin' });
        this.assertpopup = page.getByRole('dialog').getByText('Create Top-Up Coin');
        this.amountofCoins = page.getByPlaceholder('Enter amount of coins');
        // MUI date picker: separate Month / Day / Year spinbuttons
        this.validityMonth = page.getByRole('dialog').getByRole('spinbutton', { name: 'Month' });
        this.paymentMethod = page.getByRole('combobox', { name: 'Payment Method' });
        this.transferNumber = page.getByRole('textbox', { name: 'Transfer Number' });
        this.uploadReceipt = page.locator('#file, input[type="file"]').first();
        this.submitBtn = page.getByRole('dialog').getByRole('button', { name: 'submit' });

    }

    async createCoin(){
        const adminInstance = new Admin(this.page);
        await adminInstance.navigateToCoins();
        await expect(this.createTopupcoin).toBeVisible();
        await this.createTopupcoin.click();
        await expect(this.assertpopup).toBeVisible();
        await this.randomIntgenerator(this.page, this.amountofCoins);
        this.coinsAmount = await this.amountofCoins.inputValue();
        // Table shows amounts with thousand separators (e.g. 12345 → 12,345)
        this.formattedCoinsAmount = Number(this.coinsAmount).toLocaleString('en-US');
        console.log('Coins Amount:', this.coinsAmount, '→', this.formattedCoinsAmount);

        const validityDate = this.randomCalendarDate();
        console.log('Coins Validity Date:', validityDate);
        await this.fillMuiCalendarDate(this.validityMonth, validityDate);

        await this.selectfromDropdown(this.page, this.paymentMethod, 'Bank Transfer');
        await this.randomStringgenerator(this.page, this.transferNumber);
        await this.uploadAttachment(this.page, this.uploadReceipt);
        await this.submitBtn.click();
        await expect(this.page.getByText('Top-Up Created successfully')).toBeVisible();
        await this.page.reload();
        await this.page.waitForTimeout(2000);
       
    } 
   
    async verifycreatedtopupCoin(){
        await expect(this.page.getByText(this.formattedCoinsAmount, { exact: true })).toBeVisible({ timeout: 20_000 });
        console.log('Coins Amount:', this.formattedCoinsAmount + 'is verified');
    }
   
}
