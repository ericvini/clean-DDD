import { UniqueEntityId } from "../../domain/entities/value-objects/unique-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityId
  protected props: any

  get id(): UniqueEntityId {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId(id)
  }
}
