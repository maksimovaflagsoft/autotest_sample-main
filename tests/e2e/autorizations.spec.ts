import {test, expect, Page} from "@playwright/test"

test.describe.parallel('авторизация', () => {

    test.describe.parallel('позитивная авторизация', () => {

        test('Проверка 1', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.getByRole('link', { name: 'Sign In' }).click();
                await expect(page).toHaveURL(/customer\/account\/login/);
                await page.locator('#email').fill('nananatalya93@mail.ru');
                await page.locator('#pass').fill('88888888ffffffff!');
                await page.getByRole('button', { name: 'Sign In' }).click();
                await expect(
                    page.locator('.logged-in').first()
                ).toHaveText('Welcome, Natalya Last!');
            })
    })

    test.describe.parallel('негативная авторизация', () => {

        test('Проверка незаполненного эмэйла', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.getByRole('link', { name: 'Sign In' }).click();
                await expect(page).toHaveURL(/customer\/account\/login/);
                await page.locator('#pass').fill('88888888ffffffff!');
                await page.getByRole('button', { name: 'Sign In' }).click();
                await expect(
                    page.locator('#email-error').first()
                ).toHaveText('This is a required field.');
            })

        test('Проверка незаполненного пароля', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.getByRole('link', { name: 'Sign In' }).click();
                await expect(page).toHaveURL(/customer\/account\/login/);
                await page.locator('#email').fill('nananatalya93@mail.ru');
                await page.getByRole('button', { name: 'Sign In' }).click();
                await expect(
                    page.locator('#pass-error').first()
                ).toHaveText('This is a required field.');
            })
            test('Проверка неверного пароля', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.getByRole('link', { name: 'Sign In' }).click();
                await expect(page).toHaveURL(/customer\/account\/login/);
                await page.locator('#email').fill('nananatalya93@mail.ru');
                await page.locator('#pass').fill('88888888');
                await page.getByRole('button', { name: 'Sign In' }).click();
                await expect(
                    page.getByText('The account sign-in was incorrect or your account is disabled temporarily')).toBeVisible();
            })
            test('Проверка неверного эмаила', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.getByRole('link', { name: 'Sign In' }).click();
                await expect(page).toHaveURL(/customer\/account\/login/);
                await page.locator('#email').fill('nananatalya@mail.ru');
                await page.locator('#pass').fill('88888888ffffffff!');
                await page.getByRole('button', { name: 'Sign In' }).click();
                await expect(
                    page.getByText('The account sign-in was incorrect or your account is disabled temporarily')).toBeVisible();
            })
    })



})