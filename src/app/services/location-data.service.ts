import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LocationModel } from '../location.model';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  private httpClient : HttpClient;
  constructor(private http: HttpClient) {
    this.httpClient=http
    
   }
  url="http://localhost:9090/api/v1/locations";
   // Methods to manipulate the fields
   public getLocations(): Observable<LocationModel[]>{
     return this.httpClient.get<LocationModel[]>('http://localhost:9090/api/v1/locations')
   }
   }
