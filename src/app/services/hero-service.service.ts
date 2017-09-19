import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  heroServiceUrl = 'http://wtwcfservice20170815043540.azurewebsites.net/Service.svc/rest/heroes';

  constructor(private http: Http) {}

  getCount(): Promise<number> {
    return this.http.get(this.heroServiceUrl + '/count')
    .toPromise()
    .then(response => response.json() as number)
    .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroServiceUrl)
    .toPromise()
    .then(response => response.json() as Hero[])
    .catch(this.handleError);
  }

  getHeroesStartLength(start: number, length: number): Promise<Hero[]> {
    return this.http.get(this.heroServiceUrl + '/' + start + '/' + length)
    .toPromise()
    .then(response => response.json() as Hero[])
    .catch(this.handleError);
  }

  getHeroesBest(): Promise<Hero[]> {
    return this.http.get(this.heroServiceUrl + '/best')
    .toPromise()
    .then(response => response.json() as Hero[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    // return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    return this.http.get(this.heroServiceUrl + '/' + id)
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
