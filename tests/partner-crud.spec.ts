import {test, expect} from '@playwright/test';
import { LoginPage } from '../lib/pages/login.page';
import { PartnerPage } from '../lib/pages/partner.page';
import { Partner, Partner1, Partner2, Partner3 } from '../data/merchant.data';


// TC1: Tìm kiếm đối tác
test('TC01', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const partnerPage = new PartnerPage(page);
  await loginPage.login('admin', 'Ss123456789');
  await partnerPage.waitForPageLoad();
  await partnerPage.gotoPartnerPage();
  await partnerPage.searchPartner('100825');
  await partnerPage.verifyResultsContainKeyword('100825');
  await page.waitForTimeout(3000);
});

// TC2: Tìm kiếm với data-driven
const Partners: Partner[] = [Partner1, Partner2, Partner3];
test.describe('TC02', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const partnerPage = new PartnerPage(page);
    await loginPage.login('admin', 'Ss123456789');
    await partnerPage.waitForPageLoad();
    await partnerPage.gotoPartnerPage();
  });
  for (const [index, partner] of Partners.entries()) {
    test(`Partner ${index + 1}`, async ({ page }) => {
      const partnerPage = new PartnerPage(page);
      await partnerPage.searchPartner(partner.PartnerName);
      await partnerPage.verifyResultsContainKeyword(partner.PartnerName);
      await page.waitForTimeout(3000);
    });
  }
});

//TC3: Kiểm tra hiển thị danh sách mặc định
test('TC03', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const partnerPage = new PartnerPage(page);
  await loginPage.login('admin', 'Ss123456789');
  await partnerPage.waitForPageLoad();
  await partnerPage.gotoPartnerPage();
  await expect(page.getByText('Copyright © 2006 - 2024 OnePay. All rights reserved')).toBeVisible();
  await page.waitForTimeout(3000);
});

//TC4: Tìm kiếm với từ khóa không tồn tại -> hiển thị "Không có dữ liệu"
test('TC04', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const partnerPage = new PartnerPage(page);
  await loginPage.login('admin', 'Ss123456789');
  await partnerPage.waitForPageLoad();
  await partnerPage.gotoPartnerPage();
  await partnerPage.searchPartner('abcxyz');
  await expect(partnerPage.searchResults).toHaveCount(0);
  await page.waitForTimeout(3000);
});

//TC5: Click nút "Thêm đơn vị" -> kiểm tra form hiển thị
test('TC05', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const partnerPage = new PartnerPage(page);
  await loginPage.login('admin', 'Ss123456789');
  await partnerPage.waitForPageLoad();
  await partnerPage.gotoPartnerPage();
  await page.locator('.merchant-search-item').first().click();
  await page.waitForTimeout(3000);
  await partnerPage.addPartner();
  await expect(page.locator(`//input[@name='shortName']`)).toHaveValue('');
  await expect(page.locator(`//p-dropdown/div/input`)).toHaveValue('');
  await expect(page.locator(`//input[@name='address']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='mst']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='representative']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='representativePrevious']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='bankAccountContract']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='phoneRep']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='emailRep']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='phoneRepPrevious']`)).toHaveValue('');
  await expect(page.locator(`//input[@name='emailRepPrevious']`)).toHaveValue('');
  await page.waitForTimeout(3000);
});


//TC6: Đếm số lượng kết quả tìm kiếm
// test('TC06', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const partnerPage = new PartnerPage(page);
//   await loginPage.login('admin', 'Ss123456789');
//   await partnerPage.waitForPageLoad();
//   await partnerPage.gotoPartnerPage();
//   await partnerPage.searchPartner('100825');
//   await page.waitForTimeout(5000);
//   await partnerPage.getrowCount().then((count) => {
//     console.log(`Số lượng kết quả tìm kiếm: ${count}`);
//   });
//   await page.waitForTimeout(3000);
// });
