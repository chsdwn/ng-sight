import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  public pieChartLabels: string[] = ['Download', 'Upload', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'doughnut';
  public colors: any[] = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      borderColor: '#111'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
