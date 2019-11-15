import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnalysisComponent} from "./analysis/analysis.component";
import {SentimentComponent} from "./sentiment/sentiment.component";

const routes: Routes = [
  {path:'sentimentanalysis',
    component: HomeComponent
  },
  {path:'analysis',
  component: AnalysisComponent
  },
  {
    path:'sentiment',
    component: SentimentComponent
  },
  {
    path: '',
    redirectTo: 'sentimentanalysis',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
