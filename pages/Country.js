import { Helpers } from "./ReusableFunctions/helpers";
import { expect } from "@playwright/test";
import { Area } from "./Area";
const areaData = require('./test-data/AreaData');

export class Country extends Helpers {
    constructor(page) {
        super(page);
        this.page = page;
        this.addCountrytab = page.getByRole('link', { name: 'Add country' })
        this.manageCountrytab = page.getByRole('link', { name: 'Manage country' });
        this.deletedCountrytab = page.getByRole('link', { name: 'Manage Deleted country' })

        //Mandatory Fields Locators
        this.submitBtn = page.getByRole('button', { name: 'submit' })
        this.countryNameMandatory = page.getByText('Country *');
        this.coverImageMandatory = page.getByText('Upload Cover Image *');
        this.profileImageMandatory = page.getByText('Profile Image *');
        this.horizontalMandatory = page.getByText('Horizontal Cover Image *');

        //Add Country Locators
        this.countryName = page.getByRole('combobox', { name: 'Select Country' });
        this.geoLocation = page.getByRole('combobox', { name: 'Search geo locations' });
        this.countrystatusValidation = page.getByText('company already has a');
        this.coverImage = page.locator('input[name="files"]')
        this.profileImage = page.locator('input[name="profile_image"]')
        this.horizontalImage = page.locator('input[name="horizontal_cover"]');
        this.description = page.getByRole('paragraph').filter({ hasText: /^$/ }).first();
        this.descriptionar = page.getByRole('paragraph').filter({ hasText: /^$/ })
        this.about = page.getByRole('textbox', { name: 'About' });
        this.aboutar = page.getByRole('textbox', { name: 'الوصف' })

    }
    async mandatoryFields() {
        const areaInstance = new Area(this.page);
        await areaInstance.navigatetoCountryPage();
        await expect(this.manageCountrytab).toBeEnabled();
        await this.addCountrytab.click();
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.countryNameMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.coverImageMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.profileImageMandatory);
        await this.mandatoryFieldValidation(this.page, this.submitBtn, this.horizontalMandatory);
        console.log('Mandatory fields validation passed');
    }

    async addCountry() {
        for (var country = areaData.countries.length - 1; country >= 0; country--) {
            await this.selectfromDropdown(this.page, this.countryName, areaData.countries[country]);
            await this.page.waitForTimeout(2000);
            if (await this.countrystatusValidation.isVisible()) {
                console.log("The " + await this.countryName.textContent() + " country is already added");
                continue;

            }
           console.log(`Using Country ${areaData.countries[country]}`)
           this.addedCountry = await this.countryName.textContent();
           break;
        }
        const geolocationText = 'Al Reem Island'
        await this.geoLocation.fill(geolocationText);
        await this.page.waitForTimeout(1500);
        await this.selectfromDropdown(this.page, this.geoLocation, areaData.geolocations);
        await this.uploadAttachment(this.page, this.coverImage);
        await this.uploadAttachment(this.page, this.profileImage);
        await this.uploadAttachment(this.page, this.horizontalImage);
        await this.randomStringgenerator(this.page, this.description);
        await this.ARData(this.page, this.descriptionar); 
        await this.randomStringgenerator(this.page, this.about);
        await this.ARData(this.page, this.aboutar);
        await this.submitBtn.click();
        console.log('Country finally added successfully');

    }

    async verifyAddedcountry(){
        await this.page.waitForTimeout(9000);
        await expect(this.page.getByRole('cell', { name: this.addedCountry, exact: true })).toBeVisible();
        console.log(`The ${this.addedCountry} country is added and verified successfully`);
    }
}