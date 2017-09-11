import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroServiceService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
