import {test as it} from '@playwright/test'
import {DatePicker} from '../../page_object/LambdaTest/DatePicker'

it.describe('DATE PICKER PAGE',()=>{

    it('set random date for "From" input field', async ({page})=>{
        const datePicker = new DatePicker(page)
        //await page.goto(datePicker.url)
        await datePicker.open()
        await datePicker.verifyHeader()
        await datePicker.dateFromToday()
    } )
})