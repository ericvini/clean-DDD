import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';
import { Answer } from '../entities/answer';
import { AnswerRepository } from '../repositories/answers-repository';

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: 'question-1',
    instructorId: 'instructor-1',
    content: 'This is an answer',
  })

  expect(answer.content).toEqual('This is an answer')
})
