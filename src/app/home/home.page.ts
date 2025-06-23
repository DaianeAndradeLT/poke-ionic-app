import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemon: any = null;
  currentId: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokemonService.getPokemonDetails(this.currentId.toString()).subscribe((data) => {
      this.pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id
      };
    });
  }

  next() {
    this.currentId++;
    this.loadPokemon();
  }

  previous() {
    if (this.currentId > 1) {
      this.currentId--;
      this.loadPokemon();
    }
  }
}
