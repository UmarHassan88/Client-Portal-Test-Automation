import { test, expect } from '@playwright/test';
import { Notifications } from '../../../pages/Notifications';

test("This test test automates the Notification Section", async({page}) => {
    const notificationInstance = new Notifications(page);
    await notificationInstance.createNotification();
})