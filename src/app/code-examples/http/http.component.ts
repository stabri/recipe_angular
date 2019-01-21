import { Component } from '@angular/core';
import { ServersService } from 'src/app/servers.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  servers = [
    {
      name: 'DevServer',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'ProdServer',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServersService) { }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServer() {
    this.serverService.storeServersAppend(this.servers)
      .subscribe((response) => {
        console.log(response)
      }, (error) => {
        console.log(error);
      });
  }

  getData(){
    this.serverService.getServers().subscribe(
      (response) => {
        const data = response;
        console.log(data);
      },
      (error) => {console.log(error)}
    )
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
