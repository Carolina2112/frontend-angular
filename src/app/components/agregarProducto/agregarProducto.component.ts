import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregarProducto.component.html',
  styleUrl: './agregarProducto.component.css'
})
export class AgregarComponent {
  product: Product = {
    id: '',
    nombre: '',
    description: '',
    logo: '',
    fechaLib: new Date(),
    fechaRev: new Date()
  };


  showErrors = false;

  constructor(private apiService: ApiService, private router: Router) {}

  goToProductTable(): void {
    this.router.navigate(['/']);
  }
  enviarFormulario() {
    if (
      !this.product.id ||
      !this.product.nombre ||
      !this.product.description ||
      !this.product.logo ||
      !this.product.fechaLib ||
      !this.product.fechaRev
    ) {
      this.showErrors = true;
      return;
    }

    this.apiService.create(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}