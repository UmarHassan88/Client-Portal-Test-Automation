import {test, expect} from '@playwright/test'
import { Login } from '../../pages/Login';


test('This test logs the user into the Client Portal', async({page}) => {
    const loginInstance = new Login(page);
    await loginInstance.login('admin@aqaryinvestment.com', 'HereWeGo@2025');

})