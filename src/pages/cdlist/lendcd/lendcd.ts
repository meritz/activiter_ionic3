import { Component } from "@angular/core";
import { Cd } from "../../../models/Cd";
import { NavParams, ViewController } from "ionic-angular";
import { CdService } from "../../../services/cd.service";





@Component({
    selector: 'page-lendcd',
    templateUrl: 'lendcd.html'
})

export class LendCdPage {
    
    index: number;
    cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              private cdService: CdService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.cd.isOn = !this.cd.isOn;
  }
}