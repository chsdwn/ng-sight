import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

const LINE_CHART_SAMPLE_DATE: any[] = [
  { data: [34, 82, 67, 23, 93, 11], label: 'Sentiment Analysis'},
  { data: [25, 39, 89, 12, 73, 18], label: 'Image Recognition'},
  { data: [37, 78, 42, 48, 65, 56], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const LINE_CHART_COLORS = [
  {
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor: 'rgba(240, 180, 89, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  },
  {
    backgroundColor: 'rgba(15, 78, 133, 0.2)',
    borderColor: 'rgba(3, 64, 128, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555'
  }
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  
  constructor() { }
  
  public lineChartData = LINE_CHART_SAMPLE_DATE;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    response: true
};
  public lineChartLegend = true;
  public lineChartColors = LINE_CHART_COLORS;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  ngOnInit() {
  }

}
