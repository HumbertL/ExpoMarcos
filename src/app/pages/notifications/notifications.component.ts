import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{
  socket: Socket;
  counter: number = 0;
  messages: Array<String> = [];
  constructor(private productsService: ProductsService) {
    this.socket = io(environment.myApiURL);
 }

  ngOnInit(): void {
    this.socket.on('userConected', () => {
      this.counter = this.counter + Number(1);
      this.messages.push('User Number: ' + this.counter + ' just connected!');
      console.log('User Number: ' + this.counter + ' just connected!');
      console.log(this.messages);
    });
  }
  
}
