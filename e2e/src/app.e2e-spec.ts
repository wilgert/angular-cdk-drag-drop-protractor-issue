import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const cardToDragDrop = 'Add "blockchain" to name';


  it(`should have ${cardToDragDrop} in the todo column`, () => {
    page.navigateTo();
    expect(page.listHasCard('To do', cardToDragDrop)).toBe(true);
  });

  it(`should allow you to drag ${cardToDragDrop} to the Done column`, () => {
    page.navigateTo();
    page.dragDropCard('To do', cardToDragDrop, 'Done');
    expect(page.listHasCard('Done', cardToDragDrop)).toBe(true);
    page.sleep(3000);
  });
});
