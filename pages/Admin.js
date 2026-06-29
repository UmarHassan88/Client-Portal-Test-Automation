import { expect } from "@playwright/test";
import { Login } from "./Login";

export class Admin {
  constructor(page) {
    this.page = page;
    this.adminModule = page.getByRole("button", { name: "Admin", exact: true });
    this.account = page.getByRole("button", { name: "accounts" });
    this.licenses = page.getByRole("button", { name: "License" });
    this.subscription = page.getByRole("button", { name: "Subscription" });
    this.coins = page.getByRole("button", { name: "Coins" });
    this.watermark = page.getByRole("button", { name: "Watermark" });
    this.controlPanel = page.getByRole("button", { name: "Control Panel" });
    this.faq = page.getByRole("button", { name: "FAQ" });
  }

  async login() {
    const loginInstance = new Login(this.page);
    await loginInstance.login("admin@aqaryinvestment.com", "HereWeGo@2026");
  }
  async navigateToAdminPage() {
    await expect(this.adminModule).toBeVisible();
    await this.adminModule.click();
  }

  async navigateToAccounts() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.account).toBeVisible();
    await this.account.click();
  }

  async navigateToLicenses() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.licenses).toBeVisible();
    await this.licenses.click();
  }

  async navigateToSubscription() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.subscription).toBeVisible();
    await this.subscription.click();
  }

  async navigateToCoins() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.coins).toBeVisible();
    await this.coins.click();
  }

  async navigateToWatermark() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.watermark).toBeVisible();
    await this.watermark.click();
  }

  async navigateToControlPanel() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.controlPanel).toBeVisible();
    await this.controlPanel.click();
  }

  async navigateToFAQ() {
    await this.login();
    await this.navigateToAdminPage();
    await expect(this.faq).toBeVisible();
    await this.faq.click();
  }
}
