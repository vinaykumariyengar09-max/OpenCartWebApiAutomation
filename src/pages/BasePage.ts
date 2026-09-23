import { Page } from "@playwright/test";


export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;

        console.log("HI");
    }

    

    //App common features: footer, logo, search


}