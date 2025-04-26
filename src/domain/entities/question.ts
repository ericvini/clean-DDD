import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "./value-objects/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface QuestionProps {
  title: string
  content: string
  authorId: UniqueEntityId
  slug: Slug
  createdAt: Date
  updatedAt?: Date
  bestAnswerId?: UniqueEntityId
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, 'createdAt'>, id: UniqueEntityId) {
    const question = new Question({
      ...props,
      createdAt: new Date(),
    }, id)

    return question
  }
}
