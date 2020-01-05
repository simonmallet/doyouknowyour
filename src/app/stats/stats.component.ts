import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  private currentScore = 0;
  private currentStreak = 0;
  constructor() { }

  ngOnInit() {
  }

  public getCurrentScore(): number {
    return this.currentScore;
  }

  public getCurrentStreak(): number {
    return this.currentStreak;
  }
}
