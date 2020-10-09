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

      this.scrollDispactcher.scrolled().subscribe(ret => {
        var toolbar: HTMLElement = document.querySelector('#toolbar');
        if (window.scrollY > toolbar.clientHeight) {
          toolbar.style.boxShadow = "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)";
        }
      })
    }

    ngOnInit() { }
}
