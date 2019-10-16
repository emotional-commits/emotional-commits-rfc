import { fill, startCase, kebabCase } from 'lodash'
import { getSymbols, Symbol } from '../symbols'
import { getPlantumlSvg, createPlantumlSource } from './plantuml'
import { findClosest } from '../symbols/utils'

const createHeader = (symbol: Symbol) => `${symbol.unicode} ${symbol.title}`

export const createMarkdownOverviewTable = (
  cols: Array<keyof Symbol> = ['unicode', 'code', 'title']
) => {
  const mapKey = (s: Symbol, k: keyof Symbol) => {
    if (k === 'code') return `[${s[k]}](#${kebabCase(createHeader(s))})`
    return s[k]
  }
  return `
${cols.map(startCase).join('|')}
${fill(Array(cols.length), '---').join('|')}
${getSymbols()
  .map(s => cols.map(c => mapKey(s, c)).join('|'))
  .join('\n')}
`
}

const createDetailedOverview = () =>
  getSymbols()
    .map(symbol => {
      const traverse = (k: keyof Symbol, surround: string[] = []) => {
        const value = findClosest(k, symbol)
        return value ? `${[...surround].reverse().join('')}${value}${surround.join('')}${symbol[k] ? '' : '*'}` : 'N/A'
      }
      return `
### ${createHeader(symbol)}
- Conventional commits alternative: ${traverse('altConventionalCommits', ['`'])}
- Gitmoji alternative: ${traverse('altGitmoji', [':', '`'])}
- Semver impact: ${traverse('semverImpact')}

${symbol.description}
`
    })
    .join('')

export const createMarkdownOverview = (printSource = false) => `
# Emotional commits symbol reference

![](${getPlantumlSvg()})
${createMarkdownOverviewTable()}

${createDetailedOverview()}
---
\\* The value is not directly assigned to smybol, but transitively inherited from the closest parent node.
${printSource ? '```\n' + createPlantumlSource() + '```\n' : ''}`
