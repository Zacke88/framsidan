import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version = "0.70";

  constructor(private siteDate: SiteDataService) { }

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
