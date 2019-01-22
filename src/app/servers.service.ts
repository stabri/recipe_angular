import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServersService {

  constructor(private http: HttpClient) { }
  storeServers(servers: any[]) {
    return this.http.post('https://http-ng-learn.firebaseio.com/data.json', servers);
  }

  getServers(){
    return this.http.get('https://http-ng-learn.firebaseio.com/data.json');
  }

  storeServersAppend(servers: any[]) {
    return this.http.put('https://http-ng-learn.firebaseio.com/data.json', servers);
  }

}
