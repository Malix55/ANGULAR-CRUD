import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assets, Data , Status , AssetsInfo, DataInfo  } from './assets';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http:HttpClient) { }

  public getAssets(): Observable<any>{
    const url = '/api/assets';
    return this._http.get<any>(url);
  }

  public getAssetsById(assetId:Assets): Observable<any>{
    const url = '/api/assets';
    return this._http.get<any>(url+"/"+ assetId);
  }


  public saveAssets(assets:Assets): Observable<any> {
    const url = '/api/assets/post';
    return this._http.post<any>(url, assets);
  }

  public assetDelete (assetId:String):Observable<number>{
    const url ="/api/assets"
    return this._http.delete<any>(url+"/"+ assetId);
  }

  public editAssets(assetId:String ,asset:Assets ):Observable<any>{
    const url ="/api/assets"
    return this._http.put<any>(url+"/"+ assetId , asset);
  }

  public getData(): Observable<any>{
    const url = "/api/data";
    return this._http.get<any>(url);
  }

  public getDataById( dataId:Data): Observable<any>{
    const url = '/api/data';
    return this._http.get<any>(url+"/"+ dataId);
  }

  public saveData(data:Data): Observable<any> {
    const url = '/api/data/post';
    return this._http.post<any>(url, data);
  }

  public dataDelete (dataId:String):Observable<number>{
    const url ="/api/data"
    return this._http.delete<any>(url+"/"+ dataId);
  }

  public editData (dataId:String ,data:DataInfo ):Observable<any>{
    const url ="/api/data"
    return this._http.put<any>(url+"/"+ dataId , data);
  }

  public getStatus(): Observable<any>{
    const url = "/api/status";
    return this._http.get<any>(url);
  }

  public getStatusById( statusId:Status): Observable<any>{
    const url = '/api/status';
    return this._http.get<any>(url+"/"+ statusId);
  }


  public saveStatus(status:Status): Observable<any> {
    const url = '/api/status/post';
    return this._http.post<any>(url, status);
  }

  public statusDelete (statusId:String):Observable<number>{
    const url ="/api/status"
    return this._http.delete<any>(url+"/"+ statusId);
  }

  public editStatus (statusId:String ,status:Status ):Observable<number>{
    const url ="/api/status"
    return this._http.put<any>(url+"/"+ statusId , status);
  }

}
