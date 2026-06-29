import { test, expect } from "@playwright/test";
import { AccountsProfile } from "../../../pages/AccountsProfile";

test.describe("Test Automation for: Accounts -> Profile page", () => {
  let adminInstance;

  test.beforeEach(async ({ page }) => {
    adminInstance = new AccountsProfile(page);
    await adminInstance.navigateToAccounts();
  });

  test("This test automates the Accounts -> Profile page -> User Info", async () => {
    await adminInstance.profileeditUserInfo();
  });

  test("This test automates the Accounts -> Profile page -> User Profile", async () => {
    await adminInstance.edituserProfile();
  });

  test("This test automates the Accounts -> Profile page -> Password", async () => {
    await adminInstance.editPassword();
  });
});
