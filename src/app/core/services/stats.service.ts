import { Injectable } from '@angular/core';
import { IStatewise } from '../../shared/interfaces/IStatewise';
import { ITested} from '../../shared/interfaces/ITested';
import { Icase_time_series} from '../../shared/interfaces/ICases_time_series';
import { IStatsData} from '../../shared/interfaces/IStatsData';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';



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