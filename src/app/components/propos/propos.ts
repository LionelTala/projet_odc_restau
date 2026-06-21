import { Component } from '@angular/core';

@Component({
  selector: 'app-propos',
  imports: [],
  templateUrl: './propos.html',
  styleUrl: './propos.css',
})
export class Propos {

  restaurant = {
    nom: 'Le Calao Doré',
    annee: '2015',
    description: `
      Fondé en 2015 par la famille ......., "Le Calao Doré" est né d'une passion
      pour la cuisine traditionnelle camerounaise. Notre mission est de faire découvrir
      la richesse et la diversité des plats de nos régions,`,
    histoire: `
      Dans notre cuisine, nous utilisons des ingrédients frais, locaux et de saison.
      Chaque plat est préparé avec amour et respect des traditions, en utilisant
      des recettes transmises de génération en génération.
    `,
    image: 'assets/images/ndole.jpg',
    valeurs: [
      { chiffre: '10+', label: 'Années d\'expertise' },
      { chiffre: '50+', label: 'Plats traditionnels' },
      { chiffre: '100%', label: 'Ingrédients frais' },
      { chiffre: '4.9', label: 'Étoiles sur Google' }
    ]
  };

}
