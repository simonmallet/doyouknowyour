import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ScoreService} from '../services/score.service';

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
  private pokemonNames: any;
  private submitted = false;

  constructor(private apiService: ApiService, private scoreService: ScoreService) { }

  ngOnInit() {
    this.apiService.getPokemonNames().subscribe((data) => {
      this.pokemonNames = data;
      this.setNextPokemon();
    });
  }

  private setNextPokemon(): void {
    this.selectedPokemon = this.getRandomPokemonNumber(this.minPokemon, this.maxPokemon);
    this.pokemonImg = '/assets/images/pokemon/' + this.selectedPokemon + '.png';
    this.setPokemonChoices();
  }

  /**
   * Selects two wrong pokemon from the pool and shuffles them with the valid answer
   */
  private setPokemonChoices(): void {
    this.pokemonChoices = [];

    for (let i = 0; i < 2; i++) {
      // @todo: make sure other choices are always unique
      const wrongPokemon = this.getRandomPokemonNumber(this.minPokemon, this.maxPokemon) - 1;
      this.pokemonChoices.push({name: this.pokemonNames[wrongPokemon], id: wrongPokemon});
    }
    this.pokemonChoices.push({name: this.pokemonNames[this.selectedPokemon - 1], id: this.selectedPokemon});
    this.pokemonChoices.sort(() => 0.5 - Math.random());
    console.log(this.pokemonChoices);
  }

  /**
   * Returns a random number between a range
   */
  private getRandomPokemonNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public checkAnswer(pokemonId: number): void {
    if (this.submitted) {
      return;
    }
    this.submitted = true;
    if (pokemonId === this.selectedPokemon) {
      this.scoreService.updateScore(true);
    } else {
      this.scoreService.updateScore();
    }

    setTimeout(() => {
      this.submitted = false;
      this.setNextPokemon();
    }, 2000);
  }

  public showStats() {
    const statsMenu = document.getElementById('stats');
    const overLayMenu = document.getElementById('open-menu-overlay');
    statsMenu.classList.add('shown');
    overLayMenu.classList.add('shown');
  }
}
