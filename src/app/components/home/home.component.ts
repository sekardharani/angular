import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectcount:number;
  projectlist:any = [];
  projecttext:string;
  constructor() { }

  ngOnInit() {
    this.projectcount = this.projectlist.length;
  }


  addproject(){
    this.projectlist.push(this.projecttext);
    this.projectcount = this.projectlist.length;
    this.projecttext = '';
  }

  removeproject(i){
    console.log(i);
    this.projectlist.splice(i,1);
    this.projectcount = this.projectlist.length;
  }

}
