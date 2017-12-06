import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version = "0.70";

  constructor() { }

  ngOnInit() {

  }

  hideArrow() {
    document.getElementById("backButton").style.visibility = "hidden";

  }

  showArrow() {
    document.getElementById("backButton").style.visibility = "visible";

  }

  resetPage() {
    
  }

}
