import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from "./components/hero-carousel/hero-carousel.component";
import { ClientSectComponent } from "./components/client-sect/client-sect.component";
import { AboutComponent } from "./components/about/about.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountsComponent } from "./components/counts/counts.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProductsComponent } from "./components/products/products.component";
import { BrandsComponent } from "./components/brands/brands.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroCarouselComponent, ClientSectComponent, AboutComponent, HistoriaComponent, CountsComponent, ServicesComponent, ProductsComponent, BrandsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProyIntDesAplWebAv';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      });
    }
  }
}
