import {expect} from '@playwright/test'

export class Helpers {
    constructor(page) {
        this.page = page;
    }

async uploadAttachment(page, locator){
    await locator.setInputFiles('C:\\Users\\umar\\Downloads\\Testpic.png');

}
}