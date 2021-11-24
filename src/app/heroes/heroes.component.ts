import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';

@Component({
  // decorator function that specifies the Angular metadata for the component.
  // selector— the component's CSS element selector
  // templateUrl— the location of the component's template file.
  // styleUrls— the location of the component's private CSS styles.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  // create a property to hold the selected hero so we can use it in the template
  selectedHero?: Hero;

  // method to handle the event emitted by the child component
  // when the child component calls the parent component's

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // on select : set the selectedHero property to the hero that was clicked
  constructor() {}

  ngOnInit(): void {}
}
