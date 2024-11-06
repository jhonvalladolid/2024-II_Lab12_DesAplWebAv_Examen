import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  category: string;
  image: string;
  title: string;
}

interface Category {
  name: string;
  filter: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  activeFilter: string = '*';
  categories: Category[] = [
    { name: 'Todas las categorías', filter: '*' },
    { name: 'Disco, plato y collarín de embrague', filter: 'filter-app' },
    { name: 'Pastilla y zapata de freno', filter: 'filter-card' },
    { name: 'Piñon y parte de caja', filter: 'filter-web' },
    { name: 'Nueva Categoría', filter: 'filter-new' }
  ];

  products: Product[] = [
    { category: 'filter-app', image: 'assets/img/producto/valeo/DISCO-DE-EMBRAGUE-768x551.png', title: 'DISCO DE EMBRAGUE' },
    { category: 'filter-web', image: 'assets/img/producto/HANSANG/14-HANSANG-PINON-Y-CORONA-768x512.jpg', title: 'PIÑON Y CORONA' },
    { category: 'filter-app', image: 'assets/img/producto/valeo/PLATO-DE-EMBRAGUE-768x515.png', title: 'PLATO DE EMBRAGUE' },
    { category: 'filter-card', image: 'assets/img/producto/SANGSIN/pastilla-hiq.1-2-768x469.png', title: 'PASTILLA DE FRENO HI-Q' },
    { category: 'filter-web', image: 'assets/img/producto/HANSANG/PROPULSOR-Y-DESLIZANTE-3-768x636.png', title: 'PROPULSOR Y DESLIZANTE' },
    { category: 'filter-app', image: 'assets/img/producto/valeo/IPEX080internet-768x512.jpg', title: 'VOLANTE DE MOTOR BIMASA Y BOMBA' },
    { category: 'filter-card', image: 'assets/img/producto/SANGSIN/pastilla-severe-duty.1-1-768x523.png', title: 'PASTILLA DE FRENO HI-Q SEVERE DUTY' },
    { category: 'filter-card', image: 'assets/img/producto/SANGSIN/pastilla-hagen.1-3-768x492.png', title: 'PASTILLA DE FRENO HAGEN' },
    { category: 'filter-web', image: 'assets/img/producto/HANSANG/TRENFIJO2-768x690.jpg', title: 'TRENFIJO' }
  ];

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  isProductVisible(product: Product): boolean {
    return this.activeFilter === '*' || product.category === this.activeFilter;
  }
}
