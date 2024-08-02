import { publish } from 'gh-pages'

console.log(' Deploying...\n')
publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/isyll/isyll.github.io.git',
  },
  (err) =>
    err
      ? console.error('An error was encountered\n\n' + err)
      : console.log(' Deployed successfully\n'),
)
