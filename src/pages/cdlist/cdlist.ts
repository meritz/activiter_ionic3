import { Component } from "@angular/core";
import { ModalController, MenuController } from "ionic-angular";
import  { BooksService } from '../../services/books.service';
// import { Cd } from "../../models/Cd";
import { Book } from "../../models/book";
import { LendCdPage } from "./lendcd/lendcd";





@Component({
    selector: 'page-cdlist',
    templateUrl: 'cdlist.html'
})

export class CdListPage {

    cdList: Book[];

    constructor( private modalCtrl: ModalController,
         private booksService: BooksService, private menuCtrl: MenuController) {}

    ionViewWillEnter(){
     this.cdList = this.booksService.cdList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, {index: index});
        modal.present();
      }
    
      onToggleMenu() {
        this.menuCtrl.open();
      }
    
}