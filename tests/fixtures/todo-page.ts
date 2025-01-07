import {test as base} from "@playwright/test"
import {TodoPage} from "./TodoPage";

type Fixture = {
    todoPage:TodoPage
}

export const test = base.extend<Fixture>({
    todoPage: async ({page},use)=>{
        const todoPage = new TodoPage(page)

        await todoPage.goto() 
        await todoPage.addTodo('Our test text')
        await todoPage.addTodo('Our test text option2')
        await todoPage.addTodo('Our test text option3')

        await todoPage.removeAll() 
        await use(todoPage)
    }
})
export {expect} from "@playwright/test"

// const tets2 = base.extend({
//     page: async ({browser},use)=>{
//         const context = await browser.newContext()
//         const page = await context.newPage()
           
        
//     }
//})