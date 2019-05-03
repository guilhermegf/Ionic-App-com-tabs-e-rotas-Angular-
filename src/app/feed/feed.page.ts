import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nomeUsuario: string = "Guilherme do código";
  constructor(public alertController: AlertController) {}

  public somaDoisNumeros(num1:number,num2:number): void {
    //alert(num1 + num2);
    this.presentAlert();
  }

  public goToTabsPage():void{
    alert('teste');
  }

  ngOnInit() {
    this.somaDoisNumeros(5,10);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
