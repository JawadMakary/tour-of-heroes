import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({ // decorator function that specifies the Angular metadata for the component.
  // selector— the component's CSS element selector
// templateUrl— the location of the component's template file.
 // styleUrls— the location of the component's private CSS styles.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'the progress click'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
