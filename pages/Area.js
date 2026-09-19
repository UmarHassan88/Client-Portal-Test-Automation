import { Helpers } from "./ReusableFunctions/helpers";
import { expect } from "@playwright/test";
import {Login} from "./Login";


export class Area extends Helpers {
    constructor(page){
        super(page);
        this.page = page;
        this.areaModule = page.getByRole('button', { name: 'Area' });
        this.countryPage = page.getByRole('button', { name: 'Country' });
        this.statePage = page.getByRole('button', { name: 'State' });
        this.cityPage = page.getByRole('button', { name: 'City' });
        this.communityPage = page.getByRole('button', { name: 'Community', exact: true });
        this.subCommunityPage = page.getByRole('button', { name: 'Sub Community', exact: true });
    }
    
    async navigatetoAreaPage(){
        const loginInstance = new Login(this.page);
        await loginInstance.login('admin@aqaryinvestment.com', 'HereWeGo@2026');
        await expect(this.areaModule).toBeVisible();
        await this.areaModule.click();

    }
    async navigatetoCountryPage(){
        await this.navigatetoAreaPage();
        await expect(this.countryPage).toBeVisible();
        await this.countryPage.click();
    }
    async navigatetoStatePage(){
        await this.navigatetoAreaPage();
        await expect(this.statePage).toBeVisible();
        await this.statePage.click();
    }
    async navigatetoCityPage(){
        await this.navigatetoAreaPage();
        await expect(this.cityPage).toBeVisible();
        await this.cityPage.click();
    }
}