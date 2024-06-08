import { publish } from 'gh-pages'

console.log(' Deploying...\n')
publish('dist', (err) =>
  err
    ? console.error('An error was encountered\n\n' + err)
    : console.log(' Deployed successfully\n'),
)
