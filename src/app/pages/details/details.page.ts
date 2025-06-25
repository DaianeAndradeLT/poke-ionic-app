import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonDetails(id).subscribe((data) => {
        this.pokemon = {
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          types: data.types.map((t: any) => t.type.name),
          abilities: data.abilities.map((a: any) => a.ability.name),
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        };
      });
    }
  }
}
