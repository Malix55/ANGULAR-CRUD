export interface  Assets {
    Name: string;
    Location:string;
    Type:string;
    Description:string;
}

export interface AssetsInfo {
    Id: string;
    Name: string;
    Location:string;
    Type:string;
    Description:string;
}

export interface Data {
        AssetId:string,
        MetricName:string,
        MetricValue:string,
        Description:string   
}


export interface DataInfo{
    Id:string,
    AssetId:string,
    MetricName:string,
    MetricValue:string,

}

export interface Status {
    AssetId:string,
    Status:string,
    Date:string, 
}


export interface StatusInfo{
    Id:string,
    AssetId:string,
    Status:string,
    Date:string, 

}