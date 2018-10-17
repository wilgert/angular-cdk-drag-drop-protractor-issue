import {browser, By, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  listHasCard(listName: string, cardTitle: string) {
    browser.waitForAngular();
    const list = this.getList(listName);
    const card = this.getCard(list, cardTitle);
    return card.isPresent();
  }

  dragDropCard(sourceListName: string, cardTitle: string, targetListName: string) {
    const sourceList = this.getDropTarget(sourceListName);
    const targetList = this.getDropTarget(targetListName);
    const card = this.getCard(sourceList, cardTitle);

    return this.dragAndDrop(card, targetList);
  }

  private async dragAndDrop ( $element, $destination ) {
    await browser.actions().mouseMove( $element ).perform();
    await browser.actions().mouseDown( $element ).perform();
    await browser.actions().mouseMove( {x: 10, y: 0 } ).perform();
    await browser.actions().mouseMove( $destination ).perform();
    return browser.actions().mouseUp().perform();
  }

  sleep(duration: number) {
    return browser.sleep(duration);
  }

  private getList(listName: string) {
    return element(by.cssContainingText('.demo-list', listName));
  }

  private getCard(list, cardTitle: string) {
    return list.element(by.cssContainingText('[cdkDrag]', cardTitle));
  }

  private getDropTarget(listName: string) {
    return this.getList(listName).element(By.css('[cdkDropList]'));
  }
}
