import { Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async takeScreenshot(screenshotName: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${screenshotName}.png` });
  }
  
  async gotoPartnerPage(): Promise<void> {
    await this.page.getByRole('menuitem', { name: 'Partner Management ' }).click();
    await this.page.getByRole('menuitem', { name: 'Partner Bank Management' }).click();
  }
}




