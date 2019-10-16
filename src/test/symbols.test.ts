import { getRawSymbols, getSymbols, SYMBOLS_PATH } from '../lib/symbols'
import * as prettier from 'prettier'
import { readFileSync } from 'fs'
const { keys } = Object

const attributes = [
  'unicode',
  'code',
  'parent',
  'title',
  'description',
  'semver_impact',
  'alt_conventional_commits',
  'alt_gitmoji',
]
const sortedAttributes = [...attributes].sort()

describe('Symbols', () => {
  describe('Symbol collection', () => {
    test('Source exists, is parsable and data is an array', () => {
      expect(getRawSymbols()).toEqual(expect.any(Array))
    })
  })
  describe('Individual symbols', () => {
    describe('Each symbol has all required keys', () => {
      getRawSymbols().forEach(symbol => {
        test(symbol.unicode, () => {
          expect(keys(symbol).sort()).toEqual(sortedAttributes)
        })
      })
    })
    describe('Each symbols has ordered keys', () => {
      getRawSymbols().forEach(symbol => {
        test(symbol.unicode, () => {
          expect(keys(symbol)).toEqual(attributes)
        })
      })
    })
  })
  describe('YAML file', () => {
    test('Order of symbols is correct', () => {
      expect(getRawSymbols().map(s => s.unicode)).toEqual(
        getSymbols().map(s => s.unicode)
      )
    })
    test('Formatted with prettier', () => {
      expect(
        prettier.check(readFileSync(SYMBOLS_PATH, 'utf8'), { parser: 'yaml' })
      ).toBe(true)
    })
  })
})
