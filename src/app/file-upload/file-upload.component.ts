import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

fileUploadUrl='http://localhost:8080/product/upload';
CreditInfofileUploadUrl='http://localhost:8080/creditinfo/uploadCreditInfoExcel';
constructor(
  private _http: HttpClient
){}

ngOnInit(): void{

}

file:any;

selectFile(event: any){
  // console.log(event);
  this.file = event.target.files[0];
  console.log(this.file);

}

uploadFile(){
  let formData = new FormData();
  formData.append("file", this.file);

  this._http.post(this.fileUploadUrl, formData).subscribe(
    (data:any) => {
      //success
      console.log(data);
      alert(data.message);
    },
    (error)=>{
      //error
      console.log(error);
      alert('error');
    }
  );
}

uploadCreditInfoFile(){
  let formData = new FormData();
  formData.append("file", this.file);

  this._http.post(this.CreditInfofileUploadUrl, formData).subscribe(
    (data:any) => {
      //success
      console.log(data);
      alert(data.message);
    },
    (error)=>{
      //error
      console.log(error);
      alert('error');
    }
  );
}

}
