import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: string;
  standardText: string;
  standardSubtitleText = "Välkommen till din nya startsida! Välj sida att navigera till.";
  titleText: string;
  subtitleText: string;

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
      this.siteData.name.subscribe(res => this.standardText = res);

    this.setDate();
    this.setStandardText();

  }

  setTitle(text) {
      this.titleText = text;
  }

  setsubTitle(text) {
    this.subtitleText = text;
}

setStandardText() {
    this.titleText = this.standardText;
    this.subtitleText = this.standardSubtitleText;
}

  setDate() {

    let today = new Date();
    let dayName;
    let monthName;

    switch (today.getDay()) {
        case 0:
            dayName = "Söndag";
            break;
        case 1:
            dayName = "Måndag";
            break;
        case 2:
            dayName = "Tisdag";
            break;
        case 3:
            dayName = "Onsdag";
            break;
        case 4:
            dayName = "Torsdag";
            break;
        case 5:
            dayName = "Fredag";
            break;
        case 6:
            dayName = "Lördag";
            break;
        default:
            dayName = "Dag";
    }

    switch (today.getMonth()) {
        case 0:
            monthName = "Januari";
            break;
        case 1:
            monthName = "Februari";
            break;
        case 2:
            monthName = "Mars";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "Maj";
            break;
        case 5:
            monthName = "Juni";
            break;
        case 6:
            monthName = "Juli";
            break;
        case 7:
            monthName = "Augusti";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "Oktober";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
        default:
        monthName = "Månad";
    }

    this.date = dayName + ", " + today.getDate() + " " + monthName;


  }

}
