import {expect} from '@playwright/test'

export class Login {
 constructor(page) {
    this.page = page;
    this.url = "http://192.168.1.203:3456/auth/login";
    this.usernameInput = page.getByRole('textbox', { name: 'admin@aqaryint.com' });
    this.passwordInput = page.getByRole('textbox', { name: 'password' });
    this.loginButton = page.getByRole('button', { name: 'Log in' })
    
}

async login(username, password) {
    await this.page.goto(this.url);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL('http://192.168.1.203:3456/en/dashboard/account/me');
}
}