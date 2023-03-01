import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {RequestService} from '../request.service'
import { Data , Assets , AssetsInfo , DataInfo } from '../assets';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  // data: Data[]=[];
  dataCollection: Data;
  isModalOpen = false;

  AssetsInfo: AssetsInfo[];
  DataInfo: DataInfo[];

  selectedData: DataInfo;

  MetricName:any;
  MetricValue:any;

  addDataForm = new FormGroup({
    AssetId: new FormControl('', [Validators.required]),
    MetricName: new FormControl('', [Validators.required]),
    MetricValue: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
  });

  constructor(public _apiservie:RequestService){}

  dataDelete(id:string){
    this._apiservie.dataDelete(id).subscribe(res=>{
      console.log(id)
      alert(`The asset with id:${id} is deleted`)
      location.reload()
    })
  }

  saveDatas() {
    this.dataCollection = this.addDataForm.value as Data;
    this._apiservie.saveData(this.dataCollection).subscribe((response: any) => {
      console.log(this.dataCollection);
      location.reload()
    });
}



getDataById(id:any){
  this._apiservie.getDataById(id).subscribe(res=>{
    this.selectedData =res;
    this.MetricName = res.MetricName;
    this.MetricValue= res.MetricValue;
    console.log(res ,this.MetricName , this.MetricValue )

  })
}

editData(id:any){
  console.log('sdasadsa')
  this.selectedData.MetricName = this.MetricName;
  this.selectedData.MetricValue = this.MetricValue;

  this._apiservie.editData(id , this.selectedData).subscribe(response => {
    console.log(this.selectedData);
    location.reload()
  });

}

  ngOnInit(){
    this._apiservie.getData().subscribe(response => {
      this.DataInfo = response;

  })

  this._apiservie.getAssets().subscribe(response=>{
    this.AssetsInfo = response;
  })


}
}
