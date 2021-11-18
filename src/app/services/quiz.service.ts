import { Injectable } from '@angular/core';
import { Quiz } from '../quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  QS: Quiz[] = [
    {
      question: 'Teaching is best described as a ',
      answer: [
        { option: 'Occupation', correct: false },
        { option: 'Vocation', correct: false },
        { option: 'Profession', correct: true },
        { option: 'Career', correct: false },
      ]
    },
    {
      question: 'The chief objective of teaching is',
      answer: [
        { option: 'Transmission of existing knowledge', correct: false },
        { option: 'Stimulate curiosity of students to discover knowledge', correct: true },
        { option: 'Help children to do well in examinations', correct: false },
        { option: 'To facilitate research', correct: false },
      ]
    },
    {
      question: 'A “Good” learner is one who',
      answer: [
        { option: 'Listens attentively to teachers', correct: false },
        { option: 'Has a questioning frame of mind', correct: true },
        { option: 'Spends considerable time in library', correct: false },
        { option: 'Prepares well for examination', correct: false },
      ]
    },
    {
      question: 'Programmed instruction is based on the principles of learning which is known as',
      answer: [
        { option: 'Software learning', correct: false },
        { option: 'Motivation', correct: false },
        { option: 'Reinforcement', correct: true },
        { option: 'Systematic programming', correct: false },
      ]
    },
    {
      question: 'Sentence completion tests are objective type of tests which measure',
      answer: [
        { option: 'Recognition ability', correct: false },
        { option: 'Sentence knowledge', correct: false },
        { option: 'Association skill', correct: false },
        { option: 'Recall ability', correct: true },
      ]
    },
    {
      question: 'Three of the following four attributes characterise research. Identify the one which is not an attribute of research',
      answer: [
        { option: 'Research is purposive', correct: false },
        { option: 'Findings of research can be generalised for all contexts', correct: true },
        { option: 'Research is logical and objective', correct: false },
        { option: 'Research is based on accurate data', correct: false },
      ]
    },
    {
      question: 'One of the following behaviour does not confirm to research ethics.',
      answer: [
        { option: 'Copying passages from a book along with acknowledgement', correct: false },
        { option: 'Arriving at a generalisation which the researcher feels as truth even though data do not support it', correct: true },
        { option: 'Formulating hypothesis which is not confirmed by review of literature', correct: false },
        { option: 'Using statistical techniques in qualitative research', correct: false },
      ]
    },
    {
      question: 'The chief objective of teaching is',
      answer: [
        { option: 'Transmission of existing knowledge', correct: false },
        { option: 'Stimulate curiosity of students to discover knowledge', correct: true },
        { option: 'Help children to do well in examinations', correct: false },
        { option: 'To facilitate research', correct: false },
      ]
    },
    {
      question: 'One of the following forums will be directly relevant for administrative actions ',
      answer: [
        { option: 'Seminar', correct: false },
        { option: 'Conference', correct: true },
        { option: 'Workshop', correct: true },
        { option: 'Symposium', correct: false },
      ]
    },
    {
      question: 'The technique adopted to find out the level of acceptability of an individual by members of a group is    ',
      answer: [
        { option: 'Personality testing', correct: false },
        { option: 'Projective techniques', correct: true },
        { option: 'Psychometry', correct: false },
        { option: 'Sociometry', correct: false },
      ]
    }
  ];
  constructor() { }

  getQuizzes(){
    return this.QS;
  }
}
