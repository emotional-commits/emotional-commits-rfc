import { createMarkdownOverview } from '../../lib/generators/markdown'

describe('Markdown generator', () => {
  test('Source is a string', () => {
    expect(createMarkdownOverview()).toEqual(expect.any(String))
  })
})
