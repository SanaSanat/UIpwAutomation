import { expect, Locator, Page } from "@playwright/test";

export class DatePicker {
  page;
  constructor(page:Page) {
    this.page = page;
  }
  header:string = "h1"
  url = 'https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo'
  async open(){
    await this.page.goto(this.url)
  }
  async verifyHeader(){
    const header:Locator = this.page.locator(this.header)
    await expect(header).toContainText('Date Picker') 
  }
}
