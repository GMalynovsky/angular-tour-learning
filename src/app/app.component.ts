import { Component, OnInit } from '@angular/core';
import { Hero } from './classes/hero';
import { HeroServiceService } from './services/hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroServiceService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}



