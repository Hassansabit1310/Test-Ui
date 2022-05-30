import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  value = 0;

  constructor() {}

  ngOnInit(): void {}

  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }
}
