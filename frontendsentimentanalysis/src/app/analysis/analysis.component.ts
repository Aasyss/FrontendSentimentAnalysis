import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  pieChartOptions = {
    responsive: true
  };

  barChartOptions ={
    responsive: true
  };

  pieChartLabels=  ['Positive', 'Negative', 'Neutral'];

  barChartLabels = ['Sentiment Analysis'];

  // CHART COLOR.
  pieChartColor:any = [
    {
      backgroundColor: ['rgba(0,255,0, 0.8)',
        'rgba(255,0,0,0.8)',
        'rgba(139, 136, 136, 0.9)'
      ]
    }
  ];
  pieChartData:any = [];
  barChartData:any = [
    // {
    //   label: 'Positive',
    //   data: []
    // },
    // {
    //   label: 'Negative',
    //   data: []
    // },
    // {
    //   label: 'Neutral',
    //   data: []
    // }
  ];
  private pieChartType: any;
  private negative: any;
  private positive: any;
  private neutral: any;
  private tweets: any;

  constructor(public searchService: SearchService) { }

  // events
  public onChartClicked(e: any): void {
    console.log(e);
  }

  public onChartHovered(e: any): void {
    console.log(e);
  }
  public keyword : any;

  ngOnInit() {
    this.pieChartType = 'pie';
    this.keyword = localStorage.getItem('key');
    console.log(this.keyword);
    this.getAnalysisPercentage();
    this.getTweetsFromTwitter();
  }
  public getAnalysisPercentage(){
    this.searchService.searchKeywordsonSubmit(this.keyword).subscribe((data)=>{
      this.negative=data.negative;
      this.positive = data.positive;
      this.neutral = data.neutral;
      this.pieChartData = [this.positive,this.negative,this.neutral];

      this.barChartData = [
        {label: 'Positive', data:[this.positive]},
        {label: 'Negative', data: [this.negative]},
        {label: 'Neutral',data: [this.neutral]}
      ]
    })
  }

  public getTweetsFromTwitter(){
    this.searchService.getTweets(this.keyword).subscribe((data)=>{
      this.tweets = data;
      console.log(this.tweets);
    })
  }
}

