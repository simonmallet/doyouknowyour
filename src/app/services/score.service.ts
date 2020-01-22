import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ScoreService {

  public scoreChanged$: EventEmitter<any> = new EventEmitter();

  /**
   * Updates score by providing if the answer was good or wrong
   * @param goodAnswer boolean
   */
  public updateScore(goodAnswer = false): void {
    this.scoreChanged$.emit({goodAnswer: goodAnswer});
  }

}
