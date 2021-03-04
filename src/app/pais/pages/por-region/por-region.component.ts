import { Component, OnInit } from '@angular/core';
import {Regions} from '../../interfeces/region.interface'
import { PaisService } from "../../pais.service";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

  hayError:boolean = false;
  termino:string="prueba de pais";
  paises:Regions[]=[];
  constructor(public api:PaisService){
    
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino=termino
  this.api.buscarRegion(termino)
                                .subscribe(
                                  
                                  (paises)=>{console.log(paises); this.paises=paises},(err)=>{this.hayError= true;
                                  this.paises=[]
                                  }
                                   
                                )
  }

}
