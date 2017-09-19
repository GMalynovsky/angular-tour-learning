import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero-service.service';
import { Hero } from '../classes/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  selectedRangeStart = 0;

  heroes: Hero[];

  pages: number[];

  rangeLength = 10;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelectRange(page): void {
    this.selectedRangeStart = page;
    this.selectedHero = null;

    this.heroService
      .getHeroesStartLength(page, this.rangeLength)
      .then(heroes => this.heroes = heroes);
  }

  countPages(): void {
    this.heroService
      .getCount()
      .then(count => this.generatePageNumbers(count));
  }

  generatePageNumbers(count: number): void {
    let i;
    this.pages = [];
    for (i = 0; i < count; i += 10) {
      this.pages.push(i);
    }

    this.onSelectRange(0);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }

  ngOnInit(): void {
    // this.getHeroes();
    this.countPages();
  }
}
