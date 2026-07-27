import { LoginCase, Case1, Case2, Case3 } from "./data/login-data.ts";
import { test, expect } from "@playwright/test";
const loginCases: LoginCase[] = [Case1, Case2, Case3];
test.describe("Login Test", () => {
  for (const loginCase of loginCases) {
    test(`Case ${loginCases.indexOf(loginCase) + 1}`, async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/login");
      await page.getByRole("textbox", { name: "Username" }).click();
      await page.getByRole("textbox", { name: "Username" }).fill(loginCase.username);
      await page.getByRole("textbox", { name: "Password" }).click();
      await page.getByRole("textbox", { name: "Password" }).fill(loginCase.password);
      await page.getByRole("button", { name: " Login" }).click();
      await expect(page.getByText(loginCase.expectedResult)).toBeVisible();
      await page.waitForTimeout(3000)
    });
  }
});
