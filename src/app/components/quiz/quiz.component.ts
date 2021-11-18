import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  QS: Quiz[]= [];
  currentQuiz=0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;

  constructor(private qservice: QuizService) { }

  ngOnInit(): void {
   this.QS = this.qservice.getQuizzes();
  }
  onAnswer(option: boolean){
    setTimeout(()=>{
      this.currentQuiz ++;
      this.answerSelected = false;
    }, 500);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
    this.answerSelected = true;
  }
}
