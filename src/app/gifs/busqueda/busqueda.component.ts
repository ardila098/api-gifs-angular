import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {


//el Viewchild  busca el html el txtBuscar y lo asigna al elemento
//y es de tipo elementRef  
  // se one ! para decirle a typescript que el objeto no es ulo
 //le digo que el elementRef de txt buscar es de tipo input html 


  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;


//con esto ya tengo acceso a las propiedades del gifservice
  constructor(private GifsService: GifsService) {
  

}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;


    
    if (valor.trim().length === 0) {
      return;

    }

    //utilizo la propiedad buscargifs del gifservice y le paso el valor del input de html 
    this.GifsService.buscarGifs(valor);

    //para borrar la caja de texto  pongo el value vacio
    this.txtBuscar.nativeElement.value= ''

}


}


