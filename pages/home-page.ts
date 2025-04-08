import { expect, type Locator, type Page } from '@playwright/test';

export class Homepage {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly menuExpanded: Locator;

    constructor(page) {
        this.page = page
        this.menuButton = page.getByRole('button', { name: 'Show navigation menu' })
        this.menuExpanded = page.locator('#super-navigation-menu');
    }

   async homePageMenu(){
    await this.menuButton.click();
    await this.menuExpanded.isVisible();
    }
}