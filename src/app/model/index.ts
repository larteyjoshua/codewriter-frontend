export interface RequestObject {
    model:string;
    prompt:string;
    quality:string;
    size:string;
    n:number;
}
export interface ModelList {
    label:string;
    model:string;
}

export interface QualityList {
    label:string;
    quality:string;
}

export interface SizeList {
    label:string;
    size:string;
}