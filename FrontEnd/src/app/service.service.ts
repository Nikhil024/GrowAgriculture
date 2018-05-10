import { Headers, Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  storeDemo(userData: {username: string, password: string}) {
    console.log('in http ' + userData);
    this.http.post('localhost:1234/agriculture/user', userData, {headers: this.headers});
  }

}
