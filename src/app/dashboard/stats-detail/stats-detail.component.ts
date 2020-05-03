import { Component, OnInit } from '@angular/core';
import { DistrictLevelStatsService } from 'src/app/core/services/districtstats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Districtdata } from 'src/app/shared/class/districtdata_classes/Districtdata';
import { Districtdatavalue } from 'src/app/shared/class/districtdata_classes/Districtdatavalue';
import { Delta } from 'src/app/shared/class/districtdata_classes/Delta';

@Component({
  selector: 'app-stats-detail',
  templateUrl: './stats-detail.component.html',
  styleUrls: ['./stats-detail.component.css']
})
export class StatsDetailComponent implements OnInit {
  public  currentState:string;
  public  stateDataArray:any;
  public stateData:any;
 public  districtsData:Array<Districtdata>= []; // contains all the district data of a particular city
 public districtData: Districtdata; //details of specific district only
public districtDataValue: Districtdatavalue;
public delta:Delta

  constructor(private districtLevelStatsService:DistrictLevelStatsService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.currentState = this.activatedRoute.snapshot.params.id;
   // console.log(this.currentState)
    this.getDistrictStats(this.currentState);
  }

  getDistrictStats(currentState:string){
   this.districtLevelStatsService.getData().subscribe(data => {
     this.saveData(data,currentState);
 
  }, err => {
    console.log(err);
}); 
  }

  saveData(allDistrictData:any,currentState:string){
   
      
     for(var state in  allDistrictData){
      
      if(allDistrictData.hasOwnProperty(state)){
        if(state==currentState){
        for(var district in allDistrictData[state].districtData ){
             this.districtData = allDistrictData[state].districtData[district]
            this.districtData= new Districtdata(district,allDistrictData[state].districtData[district])
            //console.log(this.districtData)
            this.districtsData.push(this.districtData)
        
        }
      }
    }
  }

  //  console.log(this.districtsData)
  }
  goBack(): void {
   
    this.route.navigate(['/dashboard']);
  
}

}
