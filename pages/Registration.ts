import { Page, expect, Locator } from "@playwright/test";
export class Registraion
{
    private readonly page:Page;
    private readonly LoginLink:Locator;
    private readonly UserNameInput:Locator;
    private readonly PasswordInput:Locator;
    private readonly LoginButton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.LoginButton=this.page.locator("button[onclick='login()']");
        this.LoginLink=this.page.locator('#login2');
        this.UserNameInput=this.page.locator('#loginusername');
        this.PasswordInput=this.page.locator('#loginpassword');
    }

    async ClickLoginLink()
    {
        await this.LoginLink.click();
    }

    async EnterUserName(username:string)
    {
        await this.UserNameInput.clear();
        await this.UserNameInput.fill(username);
    }

    async EnterPassword(password:string)
    {
        await this.PasswordInput.clear();
        await this.PasswordInput.fill(password);
    }

    async ClickOnLoginButton():Promise<void>
    {
        await this.LoginButton.click();
    }



}