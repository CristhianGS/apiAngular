import { Component, OnInit } from '@angular/core';
import {Capital} from '../../interfeces/capital.interface'
import { PaisService } from "../../pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  hayError:boolean = false;
  termino:string="prueba de pais";
  paises:Capital[]=[];
  constructor(public api:PaisService){
    
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino
  this.api.buscarCapital(termino)
                                .subscribe(
                                  
                                  (paises)=>{console.log(paises); this.paises=paises},(err)=>{this.hayError= true;
                                  this.paises=[]
                                  }
                                   
                                )
  }


}
