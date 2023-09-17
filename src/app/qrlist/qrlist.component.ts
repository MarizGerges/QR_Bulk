import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qrlist',
  templateUrl: './qrlist.component.html',
  styleUrls: ['./qrlist.component.css']
})
export class QRlistComponent implements OnInit {
  
  apiData: any[] = [];
  
  constructor(private http: HttpClient) { }
 ngOnInit() {
     this.fetchData();
  }

  fetchData() : any {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('http://nicolamaher-001-site1.btempurl.com/api/ExcelQRCode/showall' , requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result); this.apiData=result ; console.log(this.apiData[1])})
      .catch(error => console.log('error', error));
       
  }
  
}
