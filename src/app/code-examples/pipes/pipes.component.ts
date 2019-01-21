import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(12, 1, 2019)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(12, 1, 2019)
    },
    {
      instanceType: 'small',
      name: 'Dev server',
      status: 'offline',
      started: new Date(12, 1, 2019)
    },
    {
      instanceType: 'small',
      name: 'Testing environment',
      status: 'stable',
      started: new Date(12, 1, 2019)
    }
  ];

  filteredStatus: string = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date} ){
    return {
      'list-group-item-success': server.status == "stable",
      'list-group-item-warning': server.status == "offline",
      'list-group-item-danger': server.status == "critical"
    };
  }

  onAddServer(){
    this.servers.push({
      instanceType: 'small',
      name: 'New server',
      status: 'stable',
      started: new Date(12, 10, 2019)
    })
  }


  constructor() { }

  ngOnInit() {
  }

}
