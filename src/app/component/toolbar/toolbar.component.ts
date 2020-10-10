import { Component, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private scrollDispactcher: ScrollDispatcher) {

    this.scrollDispactcher.scrolled().subscribe(() => {
      var toolbar: HTMLElement = document.querySelector('#toolbar');
      if (window.scrollY > toolbar.clientHeight) {
        toolbar.style.boxShadow = "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)";
      } else {
        var perc = 1 / toolbar.clientHeight * window.scrollY;
        toolbar.style.boxShadow = "0 3px 5px -1px rgba(0,0,0," + (perc * 0.2).toString() + "), 0 6px 10px 0 rgba(0,0,0," + (perc * 0.14).toString() + "), 0 1px 18px 0 rgba(0,0,0," + (perc * 0.12).toString() + ")";
      }
    })
  }

  ngOnInit() { }
}
