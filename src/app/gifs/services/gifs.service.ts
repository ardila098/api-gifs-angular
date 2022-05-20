import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
  
  
export class GifsService {



  private apiKey: string = 'xyk3KDrl0Vio7I2kE4vLCRigfmrzjDPT'
  private servicioUrl: string= 'http://api.giphy.com/v1/gifs'

 //vamos a crearnos una propiedad para almacenar los string de busquedas  
  private _historial: string[] = [];

//en resultados se va almacenar los query de la peticion
  public resultados:Gif[]=[]

  
  get historial() {
    //... para que no me moficque el arreglo inicial 
    return [...this._historial]
  }

  // con este JSON.PARSE me trae los item y me los guarda en un array para que sigan asi se recargue la pagina

  constructor(private http: HttpClient) {
  
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];


    
}


//funcion buscargifs para insertar valores
  //query de busqueda va ser de tipo string
//unshift para insertar al inicio

  buscarGifs(query: string='') {
    
    query = query.trim().toLocaleLowerCase();
  
/* si ! no lo incluye  entonces lo inserto    con unshift
//vamos a guardar en el local storage y utilizamos una propiedad json.stringgify
 //para convertir  el objeto historial a string 
 */

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);     
      this._historial=this._historial.splice(0,10)  //de 0 a 10 resultados

localStorage.setItem( 'historial',JSON.stringify(this._historial))

    }


//http params
    
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('Limit', '10')
    .set('q', query)


    /*
//con los observabos consumimos la api , son mas poderosos que las promesas
// utilizamos back tick para llamar la peticion del query dentro de la url 
    //esta peticion http va ser de tipo  <SearchGifsResponse>
    */

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search?`,{params})
      .subscribe((resp:any) => {
  
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem( 'resultados',JSON.stringify(this.resultados))

})
   





  }
  
  
}


//VAMOS HACER EL LLAMADO DE LA API CON FETCH

  /*  fetch('http://api.giphy.com/v1/gifs/search?api_key=xyk3KDrl0Vio7I2kE4vLCRigfmrzjDPT&q=dragon ball&limit=10')
.then( res =>{

res.json().then(data=>console.log(data))

})
    
    */