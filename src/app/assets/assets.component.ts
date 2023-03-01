import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RequestService} from '../request.service'
import { Assets, AssetsInfo } from '../assets';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent {
  asset : Assets;
  assets: Assets[] = [];
  isModalOpen = false;

  selectedAsset : AssetsInfo;
  // updatedAsset : Assets = {
  //   Name: this.Name,
  //   Type:'asdsad',
  //   Location:'sadad',
  //   Description:'sadasda'
  // } 

  AssetsInfo: AssetsInfo[] = [];

 Name: any;
 Location:any;
 Type: any;
 Description:any;
 

  addAssetsForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Location: new FormControl('', [Validators.required]),
    Type: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
  });

  constructor(public _apiservie:RequestService){}

  assetDelete(id:string){
    this._apiservie.assetDelete(id).subscribe(
      res => {
        console.log(id)
        alert(`The asset with id:${id} is deleted`)
        location.reload()
      },
      error => {
        console.error(error);
        alert(`Error deleting asset with id:${id}. Please try again.`);
      }
    );
  }
  

  // editAssetForm = new FormGroup({
  //   Name: new FormControl('', [Validators.required]),
  //   Location: new FormControl('', [Validators.required]),
  //   Type: new FormControl('', [Validators.required]),
  //   Description: new FormControl('', [Validators.required]),
  // });

  editAsset(id:string){
    console.log(this.Name , this.Location , this.Type , this.Description)
    console.log('sadasdsadqsad')
    this.selectedAsset.Name = this.Name;
    this.selectedAsset.Location = this.Location;
    this.selectedAsset.Type = this.Type;
    this.selectedAsset.Description = this.Description;

    this._apiservie.editAssets(id , this.selectedAsset).subscribe(response => {
      console.log(this.selectedAsset);
      location.reload()
    });



  }

  getAssetsById(id:any){
    this._apiservie.getAssetsById(id).subscribe(res=>{
      this.selectedAsset =res;
      this.Name = res.Name;
      this.Location= res.Location;
      this.Type = res.Type;
      this.Description = res.Description;
      console.log(res , this.Name , this.Location , this.Type , this.Description)

    })
  }

  saveAssets() {
    this.asset = this.addAssetsForm.value as Assets;
    this._apiservie.saveAssets(this.asset).subscribe((response: any) => {
      console.log(this);
      location.reload()
    });
}

  ngOnInit(){
    this._apiservie.getAssets().subscribe(response => {
      console.log(response)
      this.AssetsInfo = response;

  })}

}
