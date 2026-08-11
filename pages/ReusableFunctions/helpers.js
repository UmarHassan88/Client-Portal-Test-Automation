import {expect} from '@playwright/test'

export class Helpers {
    constructor(page) {
        this.page = page;
    }

async uploadAttachment(page, locator){
    await locator.setInputFiles('pages/media/Image.png');
    console.log('Attachment Uploaded Successfully');
}

/** Random future date as MM/DD/YYYY (matches MUI date placeholders). */
randomCalendarDate(daysAheadMin = 1, daysAheadMax = 365) {
    const daysAhead = Math.floor(Math.random() * (daysAheadMax - daysAheadMin + 1)) + daysAheadMin;
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
}

/** Fill MUI DateField Month/Day/Year spinbuttons with an MM/DD/YYYY string. */
async fillMuiCalendarDate(monthSpinbutton, dateStr) {
    const [mm, dd, yyyy] = dateStr.split('/');
    await monthSpinbutton.click();
    // MUI auto-advances sections as digits are typed — do not use fill()
    await this.page.keyboard.type(`${mm}${dd}${yyyy}`, { delay: 40 });
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
    // Keep amounts in a realistic range for coin top-ups
    const result = Math.floor(Math.random() * 99999) + 1;
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

async mandatoryFieldValidation(page, btn, locator){
    await btn.click();
    await expect(locator).toHaveClass(/Mui-error/);
}
}