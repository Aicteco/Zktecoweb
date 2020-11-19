import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';


import { END_POINTS } from './globals/global-config';
import { Configuration } from '../../models/configuration.model';
import { DataWithRanking } from '../../models/data-with-ranking.model';
 const API_URL ="http://api.ezicodes.com/api/Configuration/GetAll" 
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }



  getAllConfigurationByLang(language: string): Observable<Configuration> {     
    return this.http.get<Configuration>(API_URL  ,{params:{
      pages : '-1'
    },headers:{
      'Accept-Language':language
    }});
  }
  
}
