import { publish } from 'gh-pages'

publish('dist', (err) =>
  err ? console.log('an error was encountered ' + err) : null,
)
