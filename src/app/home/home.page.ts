import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PokemonService} from '../services/pokemon.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemon: any = null;
  currentId: number = 1;

  constructor(private pokemonService: PokemonService) {
  }

  loadPokemon() {
    this.pokemonService.getPokemonDetails(this.currentId.toString()).subscribe((data) => {
      this.pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id,
        types: data.types,
        abilities: data.abilities,
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

  favorites: number[] = [];

  ngOnInit() {
    this.loadFavorites();
    this.loadPokemon();
  }

  loadFavorites() {
    const stored = localStorage.getItem('favorites');
    this.favorites = stored ? JSON.parse(stored) : [];
  }

  toggleFavorite(id: number) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(fav => fav !== id);
    } else {
      this.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

}
