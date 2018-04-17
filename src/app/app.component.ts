import { Component, OnInit } from '@angular/core';
//import {gapi} from 'gapi.client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public searchText: string = '';

  constructor() {

  }

  ngOnInit() {
    this.googleApiClientReady()
  }

  SearchYoutubeVideos() {
    var request = window["gapi"].client.youtube.search.list({
      q: this.searchText,
      part: 'snippet'
    });

    request.execute(function (response) {
      var str = JSON.stringify(response.result);
      console.log(str);
    });
  }


  googleApiClientReady() {

    gapi.load("client", () => {
      console.log("client loaded");
      gapi.client.load('youtube', 'v3', () => {
        console.log("youtube loaded");
        this.setApiKey();
      });
    });


  }
  setApiKey() {
    gapi.client.setApiKey('AIzaSyCtWvvzfxZNluNJxswwSKHSdta6onQSPGg');
    console.log("Youtube Api loaded");
  }

}
