import { Routes } from '@angular/router';
import { AgregarComponent } from './components/agregarProducto/agregarProducto.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { Head } from 'rxjs';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditarComponent } from './components/editarProducto/editarProducto.component';

export const routes: Routes = [
    {
        path: '', component: ProductTableComponent
    },
    {
        path: 'agregar' , component: AgregarComponent
    },
        {
        path: 'editar/:id' , component: EditarComponent
    }
];
