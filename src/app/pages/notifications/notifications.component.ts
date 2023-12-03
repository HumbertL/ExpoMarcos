import { Component, OnInit, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';
import {MatTable} from '@angular/material/table';

export interface Message {
  No: number;
  Message: String;
  Status: String;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit{

  @ViewChild(MatTable) myTable!: MatTable<Message>;

  socket: Socket;
  counter: number;
  messages: Array<Message> = [];
  len: number;
  displayTable: Boolean = true;

  displayedColumns: String[] = ['No', 'Message', 'Status'];
  dataSource = this.messages;

  constructor(private productsService: ProductsService) {
    this.socket = io(environment.myApiURL);
    this.counter = 0;
    this.len = this.messages.length;
 }

  ngOnInit(): void {

    if(this.len == 0) this.displayTable = false;

    this.socket.on('userConected', () => {
      this.displayTable = true;
      this.counter = this.counter + Number(1);
      this.messages.push({No: this.counter, Message: 'A user is browsing our catalog!', Status: 'New' });
      this.len = this.messages.length;
      this.myTable.renderRows();
    });
  }

}
