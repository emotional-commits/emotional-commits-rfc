import { getRawSymbols, Symbol, getSymbols } from '.'

export const composeKey = (symbol?: Symbol): string =>
  symbol
    ? [
        symbol.parent
          ? composeKey(getRawSymbols().find(s => s.code === symbol.parent))
          : '',
        symbol.code,
      ].join('/')
    : ''

export const findChildren = (symbol: Symbol) =>
  getSymbols().filter(s => s.parent === symbol.code)

export const findParent = (symbol: Symbol) =>
  getSymbols().find(s => symbol.parent === s.code)

export const findClosest = (key: keyof Symbol, symbol?: Symbol): undefined | string => {
  if (!symbol) return
  return symbol[key] ? symbol[key] : findClosest(key, findParent(symbol))
}

export const isRoot = (symbol: Symbol) => !symbol.parent
