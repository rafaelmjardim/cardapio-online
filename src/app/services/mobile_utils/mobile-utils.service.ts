// PARA UTILIZAR ESSE SERVIÇO É PRECISO CHAMAR A FUNÇÃO ONINITBREAKPOINT NO ngAfterViewInit DO COMPONENTE
// TAMBÉM SERÁ NECESSARIO UTILIZAR A FUNÇÃO this.changeDetectorRef.detectChanges(); no afterInit do app-module PARA EVITAR UM ERRO

import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class MobileUtilsService {
  
  breakpoints = Breakpoints; //Contem os valores de resolução(Não está em uso mas pode ser usado)

  resolution!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  onInitMediaScreen = (maxWidth?: string) => {    
    this.breakpointObserver.observe(maxWidth ? `(max-width: ${maxWidth})` : `(max-width: 640px)`).subscribe((state: BreakpointState) => {      
      if (state.matches) {
        this.resolution = true;
      }else {
        this.resolution = false;
      }
    })
  }  
}