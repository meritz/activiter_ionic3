import { Component } from "@angular/core";
import { ModalController, MenuController } from "ionic-angular";
import { CdService } from "../../services/cd.service";
import { Cd } from "../../models/Cd";
import { LendCdPage } from "./lendcd/lendcd";





@Component({
    selector: 'page-cdlist',
    templateUrl: 'cdlist.html'
})

export class CdListPage {

    cdList: Cd[];

    constructor( private modalCtrl: ModalController,
         private cdService: CdService, private menuCtrl: MenuController) {}

    ionViewWillEnter(){
     this.cdList = this.cdService.cdList.slice();
    }

    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, {index: index});
        modal.present();
      }
    
      onToggleMenu() {
        this.menuCtrl.open();
      }
    
}