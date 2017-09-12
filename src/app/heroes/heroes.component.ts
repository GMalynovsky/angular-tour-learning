import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroServiceService]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private router: Router,
              private heroService: HeroServiceService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
