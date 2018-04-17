import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urlbar',
  templateUrl: './urlbar.component.html',
  styleUrls: ['./urlbar.component.css']
})
export class UrlbarComponent implements OnInit {
  
  public urlText:string='';


  constructor() {

  }

  ngOnInit(){

  }

  downloadVideo(){
     window.location.href="/video?url="+this.urlText;
  }


}
