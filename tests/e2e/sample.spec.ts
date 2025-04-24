import {test, expect} from "@playwright/test"

//Группируем тесты - внутри групп МОЖНО тоже создавать группы
//
test.describe('Шаблонное описание', () =>{
    //.parallel - позволяет параллельно запускать тесты - настройка происходит в конфиге
    test.describe.parallel('Шаблонное описание для первой группы тестов', () =>{
    /*
    хуки, которые выполняются до/после тестов. Применяются при НЕОБХОДИМОСТИ
    beforEach - выполняется перед КАЖДЫМ тестом
    beforAll - выполняется ОДИН раз перед запуском тестов - используется редко
    afterEach
    afterAll
    */

        test.beforeEach(async ({page}) =>{
            /* 
            т.к. авторизация будет проходить всегда перед КАЖДЫМ тестом, 
            то можно запихнуть ее в beforEach. Сюда же мы можем запихнуть то, что будет выполняться
            именно в данной группе тестов.
            
            Для прохождения базовой авторизации используется следующюю конструкцию: 
            'https://' + 'login' + ':' + 'password' + 'url'
            */

            await page.goto('') // await page.goto('https://' + 'login' + ':' + 'password' + 'url')
        })

        test.afterEach(async ({page}) =>{
            await page.reload // перезагрузить страницу
        })

        //.skip позволяет пропустить тест, .only запустит только этот тест - это также применимо к группам
        test.skip('Проверка наличия текст на странице после открытия', async ({ page }) => {
            /* 
                Проверка текст/видимости/количества и т.д. это самые важные этапы тестов, 
                ведь каждый тест - это ПРОВЕРКА
            */

            const pageTitle = await page.locator('сюда вставляем локатор, который мы хотим проверить - берем его через девтулзы')
            await expect(pageTitle).toContainText('') // какой тест содержит

            //если применимо к переменной
            await expect(pageTitle).not.toContainText('') // не содержит такой текст. .not. может использоваться везде и выступает отрицаением
            await expect(pageTitle).toBeVisible() // элемент видимый
            await expect(pageTitle).toHaveAttribute('') // есть атрибут по типу href/id/class и тд

            await expect(pageTitle).toHaveCount(1) // количество элементов с одинаковым классом
       
            const count = pageTitle.count()
            await expect(count).toBeGreaterThan(3) // количество должно быть больше чем ...
            await expect(count).toBeGreaterThanOrEqual(3) // количество должно быть больше или равно чем ...
            await expect(count).toBeLessThan(3) // количество должно быть меньше чем ...
            await expect(count).toBeLessThanOrEqual(3) // количество должно быть меньше или равно чем ...
        })

        test.skip('Взаимодействие с элементами', async ({ page }) => {
            await page.click('#id') // клик по элементу
            await page.fill('#id','текст который нужно вставить') // вставить текст
            await page.locator('#id').clear() // очистка текстового поля

            await page.locator('#id').setInputFiles('путь к файлу') // загрузка файла
            
            await page.dblclick('#id') // дабл-клик
            await page.locator('#id').click({button: "right"}) // клик правой кнопкой мыши
            await page.hover('#id') // навести курсор
            await page.locator ('#id1').dragTo(page.locator('#id2')) // перетаскивание

            await page.locator('#id').press('Enter') // нажать enter 
            await page.keyboard.press('Control+A') // комбинация клавиш

            const text = await page.locator('#id').textContent() // извлечение текста из элемента и сохраниение его в константу

            await page.waitForTimeout(1000) // таймаут на 1 секунду
            await page.waitForSelector('#id') // ожидание определенного элемента
       })

       
    })
})