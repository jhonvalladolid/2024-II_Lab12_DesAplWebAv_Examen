import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navLinks = [
    { icon: 'bx bx-home-alt-2 bx-sm', name: 'Inicio', url: '#hero' },
    { icon: 'bx bxs-business bx-sm', name: 'Nosotros', url: '#about' },
    { icon: 'bx bxs-briefcase-alt-2 bx-sm', name: 'Servicios', url: '#services' },
    { icon: 'bx bxs-wrench bx-sm', name: 'Producto', url: '#portfolio' },
    { icon: 'bx bxs-shield-alt-2 bx-sm', name: 'Marcas', url: '#marca' },
    { icon: 'bx bxs-contact bx-sm', name: 'Contáctenos', url: '#contact' }
  ];
}
