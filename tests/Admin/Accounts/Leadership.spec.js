import { test, expect } from "@playwright/test";
import { Leadership } from "../../../pages/Leadership";

let leadershipInstance;
test.beforeEach(async ({ page }) => {
    leadershipInstance = new Leadership(page);
    await leadershipInstance.navigateToLeadershipPage();
});

test("Test Automation for: Leadership page", async ({ page }) => {
    await leadershipInstance.createLeadership();
    await leadershipInstance.verifyLeadership();
})