import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCOU1gnFq8BtrFylUN4U-nVZ4W1xsb_Pco',
      authDomain: 'appmisfacturas.firebaseapp.com'
    });
  }
}
