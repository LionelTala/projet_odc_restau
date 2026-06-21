import { Component } from '@angular/core';

@Component({
  selector: 'app-avis',
  imports: [],
  templateUrl: './avis.html',
  styleUrl: './avis.css',
})
export class Avis {
  temoignages = [
    {
      id: 1,
      nom: 'Marie-Claire N.',
      ville: 'Douala',
      date: '15 juin 2026',
      note: 5,
      avatar: 'M',
      couleur: 'bg-amber-500',
      commentaire: 'Un véritable voyage culinaire ! Le Eru était absolument délicieux, comme chez ma grand-mère. L\'ambiance est chaleureuse et le service impeccable. Je recommande vivement !'
    },
    {
      id: 2,
      nom: 'Jean-Paul E.',
      ville: 'Yaoundé',
      date: '02 juin 2026',
      note: 5,
      avatar: 'J',
      couleur: 'bg-emerald-500',
      commentaire: 'Enfin un restaurant qui propose de l\'Okok authentique ! Les saveurs sont parfaitement équilibrées. Le personnel est très accueillant. Un sans-faute !'
    },
    {
      id: 3,
      nom: 'Sophie M.',
      ville: 'Bafoussam',
      date: '28 mai 2026',
      note: 4,
      avatar: 'S',
      couleur: 'bg-violet-500',
      commentaire: 'J\'ai adoré l\'Ekwang, cuit à la perfection. Seul petit bémol : l\'attente était un peu longue, mais cela valait le coup. Je reviendrai avec plaisir.'
    },
    

  ];
}
