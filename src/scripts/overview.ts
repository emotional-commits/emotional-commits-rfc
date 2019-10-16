import { writeFileSync } from 'fs'
import { join } from 'path'
import { createMarkdownOverview } from '../lib/generators/markdown'

writeFileSync(
  join(__dirname, '..', '..', 'rfc', 'overview.md'),
  createMarkdownOverview()
)

console.info('Done')
