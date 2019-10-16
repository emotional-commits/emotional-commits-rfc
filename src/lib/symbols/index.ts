import * as YAML from 'yaml'
import { readFileSync } from 'fs'
import { join } from 'path'
import { mapKeys, camelCase, memoize, sortBy } from 'lodash'
import { nullOptions } from 'yaml/types'
import { composeKey } from './utils'

export interface SymbolRaw {
  unicode: string
  code: string
  parent: string
  title: string
  description: string
  alt_conventional_commits?: string
  alt_gitmoji?: string
  semver_impact?: string
}

export interface Symbol {
  unicode: string
  code: string
  parent: string
  title: string
  description: string
  altConventionalCommits?: string
  altGitmoji?: string
  semverImpact?: string
}

export const SYMBOLS_PATH = join(
  __dirname,
  '..',
  '..',
  '..',
  'rfc',
  'symbols.yaml'
)

export const getRawSymbols = memoize(
  () => YAML.parse(readFileSync(SYMBOLS_PATH, 'utf8')) as SymbolRaw[]
)

export const getSymbols = memoize(() =>
  sortBy(
    getRawSymbols().map(
      s => (mapKeys(s, (v, k) => camelCase(k)) as any) as Symbol
    ),
    composeKey
  )
)

// Make YAML stringify null as empty
nullOptions.nullStr = ''

export const getFormattedYaml = () =>
  YAML.stringify(sortBy(getRawSymbols(), composeKey))
