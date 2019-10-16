import {
  createPlantumlSource,
  getPlantumlSvg,
} from '../../lib/generators/plantuml'
import * as got from 'got'

describe('Plantuml generator', () => {
  test('Source is a string', () => {
    expect(createPlantumlSource()).toEqual(expect.any(String))
  })
  test('Encoded source is valid', async () => {
    jest.setTimeout(10000)
    const { statusCode } = await got
      .head(getPlantumlSvg())
      .catch(e => e.response)
    // on invalid source, response status code is 400
    expect(statusCode).toEqual(200)
  })
})
