import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  anio: number = new Date().getFullYear();
  public autor:any = {
    copy:'Copyright@', 
    año: this.anio + 'MIHOBBY'
  };

  constructor(public infoPaginaService: InfoPaginaService){}
}
