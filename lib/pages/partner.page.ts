import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
export class PartnerPage extends BasePage {

    readonly partnerKeywordInput: Locator;
    readonly searchButton: Locator;
    readonly addPartnerButton: Locator;
    readonly editPartnerButton: Locator;
    readonly searchResults: Locator;
    
    constructor(page: Page) {
        super(page);
        this.partnerKeywordInput = page.locator('//input[@id="partner_keyword"]');
        this.searchButton = page.locator('//button[@id="search_btn"]');
        this.addPartnerButton = page.locator(`//button[@id='add-new-btn']`);
        this.editPartnerButton = page.locator('//button[@id="edit_partner_btn"]');
        this.searchResults = page.locator('.merchant-search-item');
    }

    async searchPartner(partnerKeyword: string) {
        await this.partnerKeywordInput.click();
        await this.partnerKeywordInput.fill(partnerKeyword);
        await this.searchButton.click();
    }

    async addPartner() {
        await this.addPartnerButton.click();
    }

    async verifyResultsContainKeyword(partnerKeyword: string) {
        await this.partnerKeywordInput.click();
        await this.partnerKeywordInput.fill(partnerKeyword);
        await this.searchButton.click();    
        const resultsText = await this.searchResults.textContent();
        expect(resultsText).toContain(partnerKeyword);
    }

    async getrowCount(): Promise<number> {
        return await this.searchResults.count();
    }
}
