import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AkumaResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AkumasService {

  constructor(private http: HttpClient) { }

  getAkumaListado(){
    return this.http.get<AkumaResponse>('https://backend-akumanomi.herokuapp.com/frutas');
  }

}
