import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('fileInput') fileInput: any;
  fileError = false;
  fileErrorMessage = '';
  fileSucces = false;
  fileMessage = '';
  constructor(private http: HttpClient) { }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const requestOptions: RequestInit = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };
    fetch('http://nicolamaher-001-site1.btempurl.com/api/ExcelQRCode/import', requestOptions)
      .then(response => response.json())
      .then(result => { console.log(result.message);
        if (result.message=="Generation is done") {
          this.fileSucces = true; 
          this.fileError = false; 
          this.fileMessage = result.message
        }
        if (result.message=="Your Excel Sheet is empty.") {
          this.fileError = true;
          this.fileSucces = false;
          this.fileErrorMessage = result.message;
        }
        if (result.message=="Your Excel Sheet has no data.") {
          this.fileError = true;
          this.fileSucces = false;
          this.fileErrorMessage = result.message;
        }
        if (result.message=="File size exceeds the maximum limit of 100 MB") {
          this.fileError = true;
          this.fileSucces = false;
          this.fileErrorMessage = result.message;
        }
        if (result.message=="Excel file should have 4 columns.") {
          this.fileError = true;
          this.fileSucces = false;
          this.fileErrorMessage = result.message;
        }
        if (result.message=="This sheet has an empty column.") {
          this.fileError = true;
          this.fileSucces = false;
          this.fileErrorMessage = result.message;
        }
          })
      .catch(error => console.log('error', error));
  };

  submitForm() {
    const file = this.fileInput.nativeElement.files[0];
    const allowedExtensions = ['.xlsx'];
    if (!file) {
      this.fileError = true;
      this.fileErrorMessage = 'Please choose an Excel file.';
      return;
    }
    if (!allowedExtensions.some(ext => file.name.endsWith(ext))) {
      this.fileError = true;
      this.fileSucces = false;
      this.fileErrorMessage = 'Only Excel sheets are accepted.';
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileError = false;
      this.fileErrorMessage = '';
      this.uploadFile(file);
    }
  }


}
