import {Page, expect, Locator } from "@playwright/test";
import { register } from "node:module";
export class HomePage 
{
    private readonly page: Page;
    private readonly lnkRegister : Locator;
    private readonly MyAccount: Locator;

    constructor(page:Page){
        this.page=page;
        this.lnkRegister=page.locator('a:has-text("register")');
        this.MyAccount=page.locator('span:has-text("My Account")');
    }


}