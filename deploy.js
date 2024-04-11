import { publish } from 'gh-pages'

publish('dist', (err) =>
  err
    ? console.error('An error was encountered ' + err)
    : console.log('\n Deployed successfully\n'),
)
