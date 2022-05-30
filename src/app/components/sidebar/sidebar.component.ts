import { Component, OnInit } from '@angular/core';
interface Supplier {
  value: string;
  viewValue: string;
}
interface Category{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   catagories:Category[]=[
    {value: 'al', viewValue: 'All'},
    {value: 'electronics', viewValue: 'Electrtonics'},
    {value: 'computers', viewValue: 'Computers'},
   ]
  suppliers: Supplier[] = [
    {value: 'amra', viewValue: 'Amra Ltd'},
    {value: 'panacea', viewValue: 'Panacea PLT'},
    {value: 'techland', viewValue: 'Techland Ltd'},
  ];

  
  seasons: string[] = ['Amra Ltd', 'Panacea PLT', 'Techland Ltd', 'Startech Ltd'];

  constructor() { }

  ngOnInit(): void {
  }

}
