import {test, expect, Page} from "@playwright/test"

test.describe.parallel('Базовая проверка сайта', () => {

    test.describe.parallel('Базовая проверка сайта 1', () => {

        test('Проверка 111', async ({page})=> {
                await page.goto('https://magento.softwaretestingboard.com/')
                const whatsNew = await page.locator('#ui-id-3')
                await expect(whatsNew).toContainText('W')

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

    // test.describe.parallel('Базовая проверка сайта 2', () => {

    //     test('Проверка 123', async ({page})=> {
    //             await page.goto('https://example.com/')
    //         })
    // })


})
function privet(parameters){body}
(parameters)=>{body}