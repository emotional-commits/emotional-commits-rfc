import { findChildren, isRoot } from '../symbols/utils'
import { Symbol, getSymbols } from '../symbols'

import * as plantumlEncoder from 'plantuml-encoder'
import * as uep from 'universal-emoji-parser'

const getImageSrc = (emoji: string) =>
  uep
    .parse(emoji)
    .replace(/.*src="/, '')
    .replace(/".*/, '')
    .replace('https', 'http')

const printSymbol = (symbol: Symbol, depth: number) =>
  `<img:${getImageSrc(symbol.unicode)}{scale=${2 / depth}}>\\n${symbol.title}`

const printSymbolRec = (symbol: Symbol, depth = 2, i = 0): string =>
  `${'*'.repeat(depth)}${i % 2 === 1 ? '<' : ''} ${printSymbol(
    symbol,
    depth
  )}\n${findChildren(symbol)
    .map((s, i) => printSymbolRec(s, depth + 1, i))
    .join('')}`

export const createPlantumlSource = () => `
@startwbs
skinparam defaultTextAlignment center
skinparam handwritten true
* <img:https://i.imgur.com/iJw13z1.png>\\n=Emotional commits
${getSymbols()
  .filter(isRoot)
  .map(s => printSymbolRec(s))
  .join('')}
@endwbs
`

export const getPlantumlSvg = () =>
  `http://www.plantuml.com/plantuml/svg/${plantumlEncoder.encode(
    createPlantumlSource()
  )}`
