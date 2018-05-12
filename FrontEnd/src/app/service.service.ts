import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class ServiceService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {}

  storeDemo(userData: {username: string, password: string}) {
    console.log('in http ' + userData);
    return this.httpClient.post('http://localhost:1234/user', userData);
  }

}
