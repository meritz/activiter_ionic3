import { Component } from "@angular/core";
import { Book } from "../../../models/book";
import { NavParams, ViewController } from "ionic-angular";
// import { CdService } from "../../../services/cd.service";
import  { BooksService } from '../../../services/books.service';






@Component({
    selector: 'page-lendcd',
    templateUrl: 'lendcd.html'
})

export class LendCdPage {
    
    index: number;
    cd: Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.booksService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.cd.isOn = !this.cd.isOn;
  }
}