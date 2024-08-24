import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  public userList(){
    return this.http.get(`${this.baseUrl}/users/`);
  }
}
