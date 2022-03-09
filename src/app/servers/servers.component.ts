import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  // template: '<app-server></app-server><app-server></app-server> ',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  userName = '';
  servers = ['TestServer', 'TestServer 2'];
  showSecret = false;
  numberOrder = [];
  itemsName = [];
  inputItem = '';

  constructor() {
    setTimeout( ()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value
    // console.log(event)
  }

  numOrderList(){
    this.showSecret = !this.showSecret;
    // this.numberOrder.push(this.numberOrder.length + 1);
    this.numberOrder.push(new Date());
  }

  onAddedItems(){
    this.itemsName.push(this.inputItem);
    this.inputItem = '';
  }
}
