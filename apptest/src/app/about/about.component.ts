import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   info={
   nom: 'hasnae' ,
   email: 'exemple@gmail.com' ,
   age: '23'
   }

  comments=[
  {date: new Date() , message: 'A'},
  {date: new Date() , message: 'B'},
  {date: new Date() , message: 'C'},
 ];

  ajouterComment(){


  }

  constructor() { }

  ngOnInit() {
  }

}
