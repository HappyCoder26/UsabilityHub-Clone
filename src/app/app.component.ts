import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './media-querris.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  title = 'usabilityhub';
  toggleFunction() {
    let i = 1;
    i++;
    if (i % 2 == 0) {
      let element1 = document.getElementById('margin-top');
      element1.classList.toggle('active-margin')
      
      let element = document.getElementById('nav-options');
      element.classList.toggle('active')
    }
    else {
      let element = document.getElementById('nav-options');
      element.classList.toggle('active')

      let element1 = document.getElementById('margin-top');
      element1.classList.toggle('not-active-margin')
    }

  }
}
