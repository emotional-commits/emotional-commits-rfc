import { getFormattedYaml, SYMBOLS_PATH } from '../lib/symbols'
import { writeFileSync } from 'fs'

writeFileSync(SYMBOLS_PATH, getFormattedYaml())

console.info('Done')
