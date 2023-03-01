import { Component } from '@angular/core';
import {RequestService} from '../request.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Status,AssetsInfo,StatusInfo } from '../assets';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  status: Status;


  StatusInfo: StatusInfo[];
  AssetsInfo: AssetsInfo[];

  selectedStatus : StatusInfo;

  Status:any;
  Date:any;

  isModalOpen = false;


  addStatusForm = new FormGroup({
    AssetId: new FormControl('', [Validators.required]),
    Status: new FormControl('', [Validators.required]),
    Date: new FormControl('', [Validators.required]),
  });
  
  constructor(public _apiservie:RequestService){}

  statusDelete(id:string){
    this._apiservie.statusDelete(id).subscribe(res=>{
      console.log(id)
      alert(`The asset with id:${id} is deleted`)
      location.reload()
    })
  }


  saveStatus() {
    this.status = this.addStatusForm.value as Status;
    this._apiservie.saveStatus(this.status).subscribe((response: any) => {
      console.log(this.status);
      location.reload()
    });
}

getStatusById(id:any){
  this._apiservie.getStatusById(id).subscribe(res=>{
    this.selectedStatus =res;
    this.Status = res.Status;
    this.Date= res.Date;
    console.log(res ,this.Status , this.Date )

  })
}

editStatus(id:any){
  console.log('sdasadsa')
  this.selectedStatus.Status = this.Status;
  this.selectedStatus.Date = this.Date;

  this._apiservie.editStatus(id , this.selectedStatus).subscribe(response => {
    console.log(this.selectedStatus);
    location.reload()
  });

}

  
  ngOnInit(){
    this._apiservie.getStatus().subscribe(response => {
      console.log(response);
      this.StatusInfo = response;

  })

  this._apiservie.getAssets().subscribe(response=>{
    console.log(response);
    this.AssetsInfo = response;
  })
}
}
