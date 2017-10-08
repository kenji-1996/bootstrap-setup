import { Injectable } from '@angular/core';
import {Hero} from "../objects/hero";
import { HEROES } from '../data/mock-heroes';


@Injectable()
export class HeroService {

  //We can render the page before getting the hero data with a 'promise' callback to retrieve it
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  constructor() { }

}