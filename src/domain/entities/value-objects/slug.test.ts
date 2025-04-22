import { expect, test } from "vitest"
import { Slug } from "./slug"


test('it should be able to create a slug', () => {
  const slug = Slug.createFromText('This is a test')

  expect(slug.value).toEqual('this-is-a-test')
})
