import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery : any;
  searcheddata : any;
  private negative: any;
  private positive: any;
  private neutral: any;
  constructor(public searchService: SearchService, public router: Router) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  searchKeyword(formData: NgForm): any {
    console.log(this.searchQuery);
    // this.searchQuery=formData.value;
    // this.searchService.searchQueryValue(this.searchQuery).subscribe((data)=>{
    //   console.log(data);
    // });
    localStorage.setItem('key',this.searchQuery);

    this.searchService.searchKeywordsonSubmit(this.searchQuery).subscribe((data)=>{
      // data = JSON.stringify(data);
      this.searcheddata=data;
      console.log(data);
      this.negative=this.searcheddata.negative;
      this.positive = this.searcheddata.positive;
      this.neutral = this.searcheddata.neutral;
      console.log(this.searcheddata);
      console.log(this.positive);
      console.log(this.neutral);
      console.log(this.negative);
      this.router.navigate(['sentiment']);
    }
  )
  }
}
