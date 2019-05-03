import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public alertController: AlertController,public navCtrl:NavController) {}

  ngOnInit() {
    //alert('tabs');
    this.navCtrl.navigateForward('/intro');    
  }

}
