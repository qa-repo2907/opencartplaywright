import { Page,expect, test } from "@playwright/test";

test("Test Case 01", async({page})=>
{
page.goto("google.com");
});


