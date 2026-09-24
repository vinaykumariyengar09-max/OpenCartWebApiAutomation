import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    //private locators:
    private readonly logoutLink: Locator;
    private readonly headers: Locator;
    private readonly searchTextBox: Locator;
    private readonly searchIconLens: Locator;

    //const... of the class....init the locators:
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
        this.searchTextBox = page.getByRole('textbox', { name: 'Search' });
        this.searchIconLens = page.locator('#search button')
    }

    //page actions:
    async getHomePageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchKey: string): Promise<void> {
        console.log('search key: ', searchKey);
        await this.searchTextBox.fill(searchKey);
        await this.searchIcon.click();
    }



}