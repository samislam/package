import { register } from 'tsconfig-paths'

register({
  baseUrl: './',
  paths: {
    '@/*': ['./src/*'],
  },
})

export * from './exports'
