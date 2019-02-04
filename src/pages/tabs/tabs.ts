import { Component } from '@angular/core';
import { CdListPage } from '../cdlist/cdlist';
import { BookListPage } from '../booklist/booklist';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  cdListPage = CdListPage;
  bookListPage = BookListPage;
}
