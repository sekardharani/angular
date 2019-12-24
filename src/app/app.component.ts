import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The angular complete guide';
  constructor(){

  }
  @HostListener('click', ['$event'])
  onhostclick(event:Event){
    alert('Hello')
  }
}
