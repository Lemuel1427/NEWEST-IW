import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls:['about.css']
})
export class AboutPage {
  feet: number;
  inches: number;
  gender: string;
  iwRobinson: number;
  iwMiller: number;
  iwHamwi: number;
  iwDevine: number;
  converted: number;
  iwMessage: string;

  constructor(public navCtrl: NavController) {}

  calculateIW() {
    if (this.feet > 5) {
      this.converted = 12 * (this.feet - 5);
    }
    else {
      this.converted = 0;
    }

   if (this.feet >= 5) {
      if (this.gender = "m"){
        this.iwRobinson = 52 + (1.9 * (this.inches + this.converted))
        this.iwRobinson = parseFloat(this.iwRobinson.toFixed(2));
        
        this.iwMiller = 56.2 + (1.41 * (this.inches + this.converted));
        this.iwMiller = parseFloat(this.iwMiller.toFixed(2));

        this.iwHamwi = 48 + (2.7 * (this.inches + this.converted));
        this.iwHamwi = parseFloat(this.iwHamwi.toFixed(2));

        this.iwDevine = 50 + (2.3 * (this.inches + this.converted));
        this.iwDevine = parseFloat(this.iwDevine.toFixed(2));
      } 
      else if (this.gender = "f"){
        this.iwRobinson = 49 + (1.7 * (this.inches + this.converted));
        this.iwRobinson = parseFloat(this.iwRobinson.toFixed(2));
        
        this.iwMiller = 53.1 + (1.36 * (this.inches + this.converted));
        this.iwMiller = parseFloat(this.iwMiller.toFixed(2));

        this.iwHamwi = 45.5 + (2.2 * (this.inches + this.converted));
        this.iwHamwi = parseFloat(this.iwHamwi.toFixed(2));

        this.iwDevine = 45.5 + (2.3 * (this.inches + this.converted));
        this.iwDevine = parseFloat(this.iwDevine.toFixed(2));
      }
      else {
        this.iwMessage = "Please enter your gender.";
      }
    }

      else {
        this.iwMessage = "The calculations are only accurate for those who are at least 5 ft tall.";
    }

  }

}
