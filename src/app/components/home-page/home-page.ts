import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from "../hero/hero";
import { Specialite } from "../specialite/specialite";
import { Propos } from "../propos/propos";
import { Avis } from "../avis/avis";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [Navbar, Hero, Specialite, Propos, Avis, Contact, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
