import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/core/services/stats.service';
import { IStatsData } from 'src/app/shared/interfaces/IStatsData';
import { DistrictLevelStatsService } from 'src/app/core/services/districtstats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public statsData:IStatsData;

  constructor(private statsService:StatsService,private districtLevelStats:DistrictLevelStatsService) { }

  ngOnInit(): void {
    this.getstats();

  }
// get the india level stats
  getstats(){
    this.statsService.getData().subscribe(data => {
      this.saveStatsData(data);
    }, err => {
      console.log(err);
  });;

  }

//save the stats into the variable
  saveStatsData(statsData:IStatsData){
    this.statsData=statsData;
  }

}
