import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
name : string=''
phone:string=''
cardNumber:string=''

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name=params['Name'];
      this.phone=params['PhoneNumber']
      this.cardNumber=params['CardNumber']
      console.log(params);
    });

    if (this.name==null) {
      this.name='userName'
    }
    if (this.phone==null) {
      this.phone='user phone number'
    }
    if (this.cardNumber==null) {
      this.cardNumber='CardNumber'
    }
  }
}
