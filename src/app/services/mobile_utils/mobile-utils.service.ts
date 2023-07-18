// PARA UTILIZAR ESSE SERVIÇO É PRECISO CHAMAR A FUNÇÃO ONINITBREAKPOINT NO ngAfterViewInit DO COMPONENTE
// CASO PRECISE UTILIZAR ESTE SERVIÇO NO APP.COMPONENT SERÁ NECESSARIO UTILIZAR A FUNÇÃO this.changeDetectorRef.detectChanges(); no afterInit do app-module PARA EVITAR UM ERRO

import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class MobileUtilsService {
  
  breakpoints = Breakpoints; //Contem os valores de resolução(Não está em uso mas pode ser usado)

  mediaMobile!: boolean;
  
  mediaMedium!: boolean;
  

  constructor(private breakpointObserver: BreakpointObserver) { }

  onInitMediaMobile = () => {    
    this.breakpointObserver.observe('(max-width: 640px)').subscribe((state: BreakpointState) => {      
      if (state.matches) {
        this.mediaMobile = true;
      }else {
        this.mediaMobile = false;
      }
    })
    // return this.mediaMobile;
  } 
   
  onInitMediaMedium = () => {    
    this.breakpointObserver.observe('(max-width: 940px)').subscribe((state: BreakpointState) => {      
      if (state.matches) {
        this.mediaMedium = true;
      }else {
        this.mediaMedium = false;
      }
    })
    // return this.mediaMedium;
  }  
}