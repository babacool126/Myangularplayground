import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPublicData(): Observable<any> {
    return this.http.get('https://cerberus.cbs.nl/api/v1');
  }
}