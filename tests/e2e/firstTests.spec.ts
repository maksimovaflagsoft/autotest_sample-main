import {test, expect, Page} from "@playwright/test"

test.describe.parallel('Базовая проверка сайта', () => {

    test.describe.parallel('Базовая проверка сайта 1', () => {

        test('Проверка 111', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
            })
    })

    test.describe.parallel('Базовая проверка сайта 2', () => {

        test('Проверка 123', async ({page})=> {
                await page.goto('https://example.com/')
            })
    })


})