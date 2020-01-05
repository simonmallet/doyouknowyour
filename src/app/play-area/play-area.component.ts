import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit {
  private minPokemon = 1;
  private maxPokemon = 721;
  private selectedPokemon: number;
  public pokemonImg: string;
  public pokemonChoices = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.selectedPokemon = this.getRandomPokemonNumber(this.minPokemon, this.maxPokemon);
    this.pokemonImg = '/assets/images/pokemon/' + this.selectedPokemon + '.png';
    this.setPokemonChoices();
  }

  /**
   * Returns a random number between a range
   */
  private getRandomPokemonNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private setPokemonChoices(): void {
    this.apiService.getPokemonNames().subscribe((data) => {
      for (let i = 0; i < 2; i++) {
        const wrongPokemon = this.getRandomPokemonNumber(this.minPokemon, this.maxPokemon) - 1;
        this.pokemonChoices.push({name: data[wrongPokemon], id: wrongPokemon});
      }
      this.pokemonChoices.push({name: data[this.selectedPokemon - 1], id: this.selectedPokemon});
      console.log(this.pokemonChoices);
    });
  }

  public checkAnswer(pokemonId: number): void {
    console.log('got here...');
    if (pokemonId === this.selectedPokemon) {
      console.log('good pokemon index! (good/wrong)', this.selectedPokemon, pokemonId);
    } else {
      console.log('bad pokemon selection! (good/wrong)', this.selectedPokemon, pokemonId);
    }
  }

  public showStats() {
    const statsMenu = document.getElementById('stats');
    const overLayMenu = document.getElementById('open-menu-overlay');
    statsMenu.classList.add('shown');
    overLayMenu.classList.add('shown');
  }
}
