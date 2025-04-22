import { randomUUID } from "node:crypto"

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public questionId: string
  public authorId: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.id = id ?? randomUUID()
    this.questionId = props.questionId ?? randomUUID()
    this.authorId = props.authorId
  }
}
