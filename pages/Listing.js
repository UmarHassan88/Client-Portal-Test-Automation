import { expect } from '@playwright/test';
import { Helpers } from './ReusableFunctions/helpers';
import { Login } from './Login';

export class Listing extends Helpers {
    constructor(page) {
        super(page);
        this.page = page;
        this.navigateListing = page.getByRole('button', { name: 'Listing' });
        this.navigateProperty = page.getByRole('button', { name: 'Property', exact: true });
        this.navigateUnit = page.getByRole('button', { name: 'Unit', exact: true });
        this.navigateService = page.getByRole('button', { name: 'Services' });
        this.navigateAds = page.getByRole('button', { name: 'Ads' });
        this.navigateMarketing = page.getByRole('button', { name: 'Marketing' });
        this.listingRequests = page.getByRole('button', { name: 'Listing Requests' });
        this.apikeyswebhooks = page.getByRole('button', { name: 'Api Keys & Webhooks' });

    }

    async login() {
        const loginInstance = new Login(this.page);
        await loginInstance.login("admin@aqaryinvestment.com", "HereWeGo@2026");
    }

    async navigateToListings() {
        await this.login();
        await expect(this.navigateListing).toBeVisible();
        await this.navigateListing.click();
    }

    async navigatetoProperty() {
        await this.navigateToListings();
        await expect(this.navigateProperty).toBeVisible();
        await this.navigateProperty.click();

    }

    async navigatetoUnit() {
        await this.navigateToListings();
        await expect(this.navigateUnit).toBeVisible();
        await this.navigateUnit.click();
    }

    async navigatetoServices() {
        await this.navigateToListings();
        await expect(this.navigateService).toBeVisible();
        await this.navigateService.click();
    }

    async navigatetoAds() {
        await this.navigateToListings();
        await expect(this.navigateAds).toBeVisible();
        await this.navigateAds.click();
    }

    async navigatetoMarketing() {
        await this.navigateToListings();
        await expect(this.navigateMarketing).toBeVisible();
        await this.navigateMarketing.click();
    }

    async navigatetoListingRequests() {
        await this.navigateToListings();
        await expect(this.listingRequests).toBeVisible();
        await this.listingRequests.click();
    }

    async navigatetoApiKeysWebhooks() {
        await this.navigateToListings();
        await expect(this.apikeyswebhooks).toBeVisible();
        await this.apikeyswebhooks.click();
    }
}