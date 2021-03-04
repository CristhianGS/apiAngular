import { Component } from '@angular/core';
import { PaisService } from "../../pais.service";
import { Country } from '../../interfeces/pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  hayError:boolean = false;
  termino:string="prueba de pais";
  paises:Country[]=[];
  constructor(public api:PaisService){
    
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino
  this.api.buscarPais(termino)
                                .subscribe(
                                  
                                  (paises)=>{console.log(paises); this.paises=paises},(err)=>{this.hayError= true;
                                  this.paises=[]
                                  }
                                   
                                )
  }

}
