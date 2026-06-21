import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  footer = {
    description: 'Restaurant de cuisine traditionnelle camerounaise. Des plats authentiques préparés avec amour depuis 2015.',
    liens: [
      { nom: 'Accueil', href: '#accueil' },
      { nom: 'Spécialités', href: '#specialites' },
      { nom: 'À propos', href: '#apropos' },
      { nom: 'Témoignages', href: '#temoignages' },
      { nom: 'Réservation', href: '#reservation' }
    ],
    horaires: [
      { jour: 'Lundi - Vendredi', heures: '11:00 - 22:00' },
      { jour: 'Samedi', heures: '10:00 - 23:00' },
      { jour: 'Dimanche', heures: '10:00 - 22:00' }
    ],
    contact: {
      telephone: '+237 6 59666110',
      email: 'contact@calao-dore.com',
      adresse: 'Akwa , Douala'
    },
    reseaux: [
      { nom: 'Facebook', icone: 'fab fa-facebook-f', couleur: 'hover:bg-blue-600' },
      { nom: 'Instagram', icone: 'fab fa-instagram', couleur: 'hover:bg-pink-600' },
      { nom: 'Twitter', icone: 'fab fa-twitter', couleur: 'hover:bg-blue-400' },
      { nom: 'WhatsApp', icone: 'fab fa-whatsapp', couleur: 'hover:bg-green-500' },
      { nom: 'YouTube', icone: 'fab fa-youtube', couleur: 'hover:bg-red-600' }
    ],
    annee: new Date().getFullYear()
  };
}
