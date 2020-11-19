import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';

import {  About } from '../../models';
import { END_POINTS } from './globals/global-config';


const API_URL = END_POINTS.About;

@Injectable({
  providedIn: 'root'
})
export class SlideservicesService {

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<About> {
    return this.http.get<About>(API_URL);
  }

  // getAllServByLang(language: string): Observable<DataWithRanking<Services>> {     
  //   return this.http.get<DataWithRanking<Services>>(API  ,{params:{
  //     pages : '-1'
  //   },headers:{
  //     'Accept-Language':language
  //   }});
  // }
}
