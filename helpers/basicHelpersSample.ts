import { expect, Page } from '@playwright/test'
import { dataOfAuth } from './authDataSample'

export class BasicHelp{

    readonly page:Page 
    readonly authData:dataOfAuth // мы импортируем данные из созданного файла authData - поэтому необходимо его инициализировать для взаимодействия


    constructor(page:Page){
        this.page = page
        this.authData = new dataOfAuth
    }

    async auth(){
        //await this.page.goto('https://' + basicUsername + ':' + basicPassword + 'url') - авторизация с базовой

        await this.page.goto('https://demo.applitools.com/') // переходим на страницу
        
        const checkTitle = await this.page.locator('.auth-header')
        await expect(checkTitle).toContainText('Login Form') // проверяем наличия текста на главной странице

        await this.page.fill('#username', this.authData.username) // заполняем логин и пароль. Берем данные из файла authData
        await this.page.fill('#password', this.authData.password) // берем оттуда, ибо данные могут измениться и при большом количестве тестов будет проблемно их везде менять, а так мы меняем в одном месте

        await this.page.click('#log-in') // заходим на портал

        const checkMainPageLogo = await this.page.locator('.logo-label')
        const checkMainPageText = await this.page.locator('body > div > div.layout-w > div.content-w > div > div > div:nth-child(2) > h6')

        await expect(checkMainPageLogo).toBeVisible // видимость логотипа на главной
        await expect(checkMainPageText).toContainText('Recent Transactions') // наличие текста на главной
    }

    // проверка количества статусов
    async checkCountOfTransactionStatus(collor:string, count:number){
       const countOfStatus = await this.page.locator('.status-pill.smaller.'+collor)
       await expect(countOfStatus).toHaveCount(count)
    }
}