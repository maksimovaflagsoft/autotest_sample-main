import {test, expect, Page} from "@playwright/test"

test.describe.parallel('авторизация', () => {

    test.describe.parallel('авторизация с валидными данными', () => {

        test('Проверка 1', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                await page.click('#ui-id-3'); // Клик по ссылке внутри элемента
            })
            
        test('Проверка 112', async ({page})=> {
            await page.goto('https://magento.softwaretestingboard.com/')
            await page.hover('#ui-id-4')
            const ui = await page.locator('.level1')
            await expect(ui).toHaveCount(2)

        })

        test('Проверка 113', async ({page})=> {
            await page.goto('https://magento.softwaretestingboard.com/')
            await page.click('#ui-id-4')

        })
            
    })



})