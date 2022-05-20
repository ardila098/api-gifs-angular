import { Component, Injectable, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
  
  
//l16  llamo la propiedad resultados de los gifservices
  
export class ResultadosComponent  {


  get resultados() {
  
    return this.gifService.resultados;
}


  constructor(private gifService: GifsService) {
    

  }


}
