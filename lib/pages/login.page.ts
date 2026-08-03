import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
export class LoginPage extends BasePage {
  
  readonly usernameInput: Locator;
  readonly passwordInput: Locator
  readonly loginInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username or email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginInButton = page.getByRole('button', { name: 'Sign In' });
  }

  async login(username: string, password: string) {
    await this.page.goto('https://dev42-iportal.opdev.vn/iportal')
    await this.waitForPageLoad();
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.loginInButton.click();
  }
}