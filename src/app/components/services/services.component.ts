import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('{{delay}}ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ], { params: { delay: 1000 } }),
    ]),
  ]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      icon: 'bi bi-briefcase',
      title: 'Ventas',
      description: 'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado.',
      delay: 100
    },
    {
      icon: 'bi bi-card-checklist',
      title: 'Asesoría',
      description: 'Le brindamos una asesoría personalizada acerca de nuestros productos, para elegir el mejor repuesto para su movilidad.',
      delay: 200
    },
    {
      icon: 'bi bi-bar-chart',
      title: 'Delivery',
      description: 'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.',
      delay: 300
    },
    {
      icon: 'bi bi-binoculars',
      title: 'Productos',
      description: 'Contamos con las mejores marcas y calidad de productos del mercado.',
      delay: 400
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
