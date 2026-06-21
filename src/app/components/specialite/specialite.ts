import { Component } from '@angular/core';

@Component({
  selector: 'app-specialite',
  imports: [],
  templateUrl: './specialite.html',
  styleUrl: './specialite.css',
})
export class Specialite {

  specialites = [
    {
      nom: 'Eru',
      description: 'Feuilles de gnète mijotées avec water leaf, huile de palme, crevettes et poisson fumé. Un classique du Nord-Ouest Cameroun.',
      prix: '4500 FCFA',
      image: 'assets/images/Eru.webp'
    },
    {
      nom: 'Okok (Ikok)',
      description: 'Feuilles de Gnetum préparées avec du jus de noix de palme, arachides et viande. Plat traditionnel Beti/Bassa.',
      prix: '4000 FCFA',
      image: 'assets/images/okok.jpg'
    },

    {
      nom: 'Taro',
      description: 'Pâte de taro pilé accompagnée d\'une sauce jaune aux épices locales et à la pierre calcaire.',
      prix: '3500 FCFA',
      image: 'assets/images/taro.webp'
    },
    {
      nom: 'Koki',
      description: 'Haricots à œil noir cuits à la vapeur dans des feuilles de bananier. Un délice .',
      prix: '3000 FCFA',
      image: 'assets/images/koki.webp'
    },
    {
      nom: 'Poulet DG',
      description: 'Poulet mijoté avec des bananes plantains, des légumes et une sauce tomate relevée.',
      prix: '5500 FCFA',
      image: 'assets/images/poulet-dg.jpg'
    },
    {
      nom: 'Ndole',
      description: 'un ragoût onctueux à base de feuilles vertes  et de pâte d \'arachide fraîche',
      prix: '3000 FCFA',
      image: 'assets/images/ndole2.jpeg'
    }

  ];
}
