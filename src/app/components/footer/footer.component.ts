import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Información de contacto
  address = 'Avenida Nicolás Ayllón 3384, Carretera Central - Paradero Rayovac, Lima - Ate';
  emails = ['ventas@ikomiperu.com', 'ventas@ikomiperu.com'];
  phones = ['985 068 416', '981 453 306'];

  // Redes sociales
  socialLinks = [
    { icon: 'bx bxl-twitter', url: '#' },
    { icon: 'bx bxl-facebook', url: 'https://www.facebook.com/ikomi.peru?locale=es_LA' },
    { icon: 'bx bxl-instagram', url: 'https://www.instagram.com/ikomi.peru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { icon: 'bx bxl-skype', url: '#' },
    { icon: 'bx bxl-linkedin', url: '#' }
  ];

  // Links de navegación
  navLinks = [
    { name: 'Inicio', icon: 'bx bx-home-alt-2', url: '#hero' },
    { name: 'Nosotros', icon: 'bx bxs-business', url: '#about' },
    { name: 'Servicios', icon: 'bx bxs-briefcase-alt-2', url: '#services' },
    { name: 'Producto', icon: 'bx bxl-product-hunt', url: '#portfolio' },
    { name: 'Equipo', icon: 'bx bxl-microsoft-teams', url: '#team' },
    { name: 'Contáctenos', icon: 'bx bxs-contact', url: '#contact' }
  ];
}
