import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-body-split',
  templateUrl: './body-split.component.html',
  styleUrls: ['./body-split.component.scss']
})
export class BodySplitComponent implements OnInit {

  divColumn = "col-sm-12 col-md-6 holder";
  currentSite;

  // Declare sites within array to include them in the webpage
  sites = [
    { site: "http://intranet.tvab.kiruna.se", title: "Intranät", text: "Här kan du ta del av viktig intern information. Som bland annat nyheter, anställningar och dokument." },
    { site: "http://tvabc.kiruna.se/Start/MyPage.aspx", title: "Canea", text: "För hantering och uppföljning av projekt, ärenden samt felanmälningar." }
  ];

  //Declare filter colors
  colors = [
    "#fbbd00",
    "#0089bd",
    "#15607e",
    "#ee7d00",
    "#c4d21f",
    "#ca0538",
    "#80afb6"
  ]

  constructor(public sanitizer: DomSanitizer, private zone:NgZone) { }

  ngOnInit() {
    this.colors = this.randomizeArray(this.colors);
    //Fill array until it has atleast the same length as number of sites
    while(this.colors.length < this.sites.length) {
      this.colors = this.colors.concat(this.colors);
    }


  }

  //Randomize the order of items within a specific array
  randomizeArray(array) {
    let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
  }

  // Display the chosen site as full-screen
  loadPage(site) {
    for(let i of this.sites) {
      if(i.title != site) {
        //Hide div
        //document.getElementById(i.title).style.display = "none";
        //Remove site div
        document.getElementById(i.title).remove();
      }
    }
    //Hide filter divs
    document.getElementById(site+"Block").style.display = "none";
    document.getElementById(site+"Text").style.display = "none";
    document.getElementById(site+"Frame").style.filter = "Grayscale(0)";
    document.getElementById(site).classList.remove("col-md-6")
    this.currentSite = site;
  }

  //Reset page to original view
  resetPage() {
    this.zone.run(() => {
      console.log('enabled time travel');
  });
  }

}