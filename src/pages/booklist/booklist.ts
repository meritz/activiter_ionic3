import { Component } from "@angular/core";
import { Book } from "../../models/book";
import  { BooksService } from '../../services/books.service';
import { ModalController, MenuController } from "ionic-angular";
import { LendkListPage } from "./lendbook/lendbook";





@Component({
    selector: 'page-booklist',
    templateUrl: 'booklist.html'
})

export class BookListPage {

    booksList: Book[];

    constructor( private modalCtrl: ModalController,
         private booksService: BooksService, private menuCtrl: MenuController) {}

    ionViewWillEnter(){
     this.booksList = this.booksService.booksList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(LendkListPage, {index: index});
        modal.present();
      }
    
      onToggleMenu() {
        this.menuCtrl.open();
      }
    
}