import {test} from "@playwright/test"
import { BasicHelp } from "../../helpers/basicHelpersSample"


let basicHelp:BasicHelp
const statusColor = [
    {color:'green', count: 2}, 
    {color:'yellow', count: 3}, 
    {color:'red', count: 1} 
] // массив цветов и количества статусов

test.describe.parallel('Базовая проверка сайта Applitools', () => {
    test.beforeEach(async ({ page }) => {
        basicHelp = new BasicHelp(page)

        await basicHelp.auth()
    })

    test('Проверка количества статусов с цветом green', async ()=> {
        await basicHelp.checkCountOfTransactionStatus('green', 2)
    })

    test('Проверка количества статусов с цветом yellow', async ()=> {
        await basicHelp.checkCountOfTransactionStatus('yellow', 3)
    })

    test('Проверка количества статусов с цветом red', async ()=> {
        await basicHelp.checkCountOfTransactionStatus('red', 1)
    })

    // как можно заметить, тело теста очень схоже. Поэтому тут, для уменьшения дублирования, лучше воспользоваться циклом
    // выше был создан массив с цветом и количеством (это также удобно менять в одном месте)
    statusColor.forEach(({color, count}) =>{
        test(`Проверка c помощью цикла количества статусов с цветом ${color}`, async () => {
            await basicHelp.checkCountOfTransactionStatus(color, count);
          });
    })
})