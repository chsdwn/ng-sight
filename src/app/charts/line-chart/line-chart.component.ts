import { Component, OnInit, ViewChild } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATE: any[] = [
  { data: [34, 82, 67, 23, 93, 11], label: 'Sentiment Analysis'},
  { data: [25, 39, 89, 12, 73, 18], label: 'Image Recognition'},
  { data: [37, 78, 42, 48, 65, 56], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  
  constructor() { }
  
  lineChartData = LINE_CHART_SAMPLE_DATE;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
};
  lineChartLegend = true;
  lineChartColors = LINE_CHART_COLORS;
  lineChartType = 'line';

  ngOnInit() {
  }

}
