import {expect} from '@playwright/test'

export class Helpers {
    constructor(page) {
        this.page = page;
    }

async uploadAttachment(page, locator){
    await locator.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');

}

async randomStringgenerator(page, locator){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    await locator.fill(result);
}

async randomIntgenerator(page, locator){
    const result = Math.floor(Math.random() * 100000000);
    await locator.fill(result.toString());
}

async selectfromDropdown(page, locator, value) {
    await locator.click();
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const option = page.getByRole('option', { name: new RegExp(escaped, 'i') }).first();
    try {
        await option.click({ timeout: 5000 });
    } catch {
        // Custom selects without role="option": filter by typing, then confirm (avoid ArrowDown — it can skip the only match)
        await page.keyboard.type(value, { delay: 40 });
        await page.keyboard.press('Enter');
    }
}
}