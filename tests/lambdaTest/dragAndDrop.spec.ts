import { test as it } from "@playwright/test";
import { DragAndDrop } from "../../page_object/LambdaTest/DragAndDrop";

it.describe("DRAG AND DROP", () => {
  it("drag and drop option 1", async ({ page }) => {
    const dragAndDrop = new DragAndDrop(page);
    const url = process.env.LAMBDA
      ? `${process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`
      : "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo";
    await page.goto(url);

    await dragAndDrop.dragAndDropElement("Draggable 1");
    await dragAndDrop.dragAndDropElement("Draggable 2");

    await page.reload();
    await dragAndDrop.dragAndDropElementOption2("Draggable 1");
    await dragAndDrop.dragAndDropElementOption2("Draggable 2");
    console.log("LAMBDA Environment Variable:", process.env.LAMBDA);
  });
});
