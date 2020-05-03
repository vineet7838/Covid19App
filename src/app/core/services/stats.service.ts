import { Injectable } from '@angular/core';
import { IStatsData} from '../../shared/interfaces/IStatsData';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {
   
    private apiURL = "https://api.covid19india.org/data.json";
    constructor(private httpClient: HttpClient){
        this.getData();
    }
    getData():Observable<IStatsData>{
        return this.httpClient.get<IStatsData>(this.apiURL);
       
    }
}