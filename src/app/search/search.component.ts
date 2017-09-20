import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero-service.service';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../styles/common-styles.css']
})
export class SearchComponent implements OnInit {

  searchString = '';

  selectedHero: Hero;

  selectedRangeStart = 0;

  occurensesFound = 0;

  heroes: Hero[];

  pages: number[];

  rangeLength = 10;

  constructor(private router: Router,
    private heroService: HeroService) { }

  get isSearchEnabled(): boolean {
    if (this.searchString) {
      return this.searchString.length !== 0;
    } else {
      return false;
    }
  }

  goSearch(): void {
    if (this.isSearchEnabled) {
      this.heroService
        .getSearchCount(this.searchString)
        .then(count => this.evalSearch(count));
    }
  }

  evalSearch(count: number): void {
    this.heroes = null;
    this.pages = [];
    this.countSearchPages();
  }

  pressedEnter(event): void {
    if (event.keyCode === 13) {
      this.goSearch();
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onSelectRange(page): void {
    this.selectedRangeStart = page;
    this.selectedHero = null;

    if (this.isSearchEnabled) {
      this.heroService
        .getSearchStartLength(page, this.rangeLength, this.searchString)
        .then(heroes => this.heroes = heroes);
    } else {
      this.heroService
        .getHeroesStartLength(page, this.rangeLength)
        .then(heroes => this.heroes = heroes);
    }
  }

  countPages(): void {
    this.heroService
      .getCount()
      .then(count => this.generatePageNumbers(count));
  }

  countSearchPages(): void {
    this.heroService
      .getSearchCount(this.searchString)
      .then(count => this.generatePageNumbers(count));
  }

  generatePageNumbers(count: number): void {
    let i;

    this.occurensesFound = count;

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
    this.countPages();
  }
}

