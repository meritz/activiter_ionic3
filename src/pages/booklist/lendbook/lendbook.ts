import { Component, OnInit } from "@angular/core";
import { Book } from "../../../models/book";
import { NavParams, ViewController } from "ionic-angular";
import { BooksService } from "../../../services/books.service";





@Component({
    selector: 'page-lendbook',
    templateUrl: 'lendbook.html'
})

export class LendkListPage implements OnInit{

    index: number;
    book: Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.book.isOn = !this.book.isOn;
  }
    
}