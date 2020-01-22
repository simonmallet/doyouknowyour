import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../services/score.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  private goodAnswers = 0;
  private wrongAnswers = 0;
  private currentStreak = 0;
  private bestStreak = 0;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.scoreChanged$.subscribe((score) => {
      if (score.goodAnswer) {
        this.goodAnswers++;
        this.currentStreak++;
      } else {
        this.wrongAnswers++;
        this.currentStreak = 1;
      }

      if (this.currentStreak > this.bestStreak) {
        this.bestStreak = this.currentStreak;
      }
    });
  }

  public getGoodAnswersCount(): number {
    return this.goodAnswers;
  }

  public getCurrentStreak(): number {
    return this.currentStreak;
  }

  public getBestStreak(): number {
    return this.bestStreak;
  }

  public getWrongAnswersCount(): number {
    return this.wrongAnswers;
  }
}
