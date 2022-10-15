import { Component, OnInit } from '@angular/core';
import { AkumaResponse, Fruta } from 'src/app/interfaces';
import { AkumasService } from 'src/app/services/akumas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  frutas: Fruta[] = [];

  constructor(private akumaServices: AkumasService) {}

  ngOnInit() {
    this.akumaServices.getAkumaListado().subscribe(resp=>{
      console.log(resp.frutas);
      this.frutas = resp.frutas;
    });
  }

}

