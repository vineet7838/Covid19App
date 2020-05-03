import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DistrictLevelStatsService {
   
    private apiURL = "https://api.covid19india.org/state_district_wise.json";
    constructor(private httpClient: HttpClient){
        this.getData();
    }
    getData():Observable<any>{
        return this.httpClient.get<any>(this.apiURL);
       
    }
}