import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {


  //ahora utilizo un ngfor en el html para imprimir los datos 

  get historial() {
    
   return this.gifsService.historial;
  }

  constructor(private gifsService:GifsService) { }


  //la funcion buscar es para cuando le demos click a alguna busqueda ya guardada 
  //me la almacene en termino  y cuando use la funcion buscargif me tome el termino y lo busque

  buscar(termino: string) {
  
    this.gifsService.buscarGifs(termino)
    


}



}
