import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient) {}
}
