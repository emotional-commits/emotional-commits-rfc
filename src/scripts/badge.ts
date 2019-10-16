import { writeFileSync, readFileSync } from 'fs'
import * as got from 'got'
import { join } from 'path'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const { version, name } = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8'))
  const { body: base64 } = await got('https://i.imgur.com/iJw13z1.png', {
    encoding: 'base64',
  })
  const url = `https://img.shields.io/static/v1?label=${name}&message=${version}&color=green&style=flat-square&logo=data:image/png;base64,${base64}`
  const { body: badgeImage } = await got(url)
  writeFileSync(join(__dirname, '..', '..', 'rfc', 'badge.svg'), badgeImage)
})()
