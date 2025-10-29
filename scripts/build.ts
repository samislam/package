import chalk from 'chalk'
import { TsPatch } from '@clscripts/ts-patch'
import { EchoCli } from '@clscripts/echo-cli'
import { Barrelsby } from '@clscripts/barrelsby'
import { runCommandsSequentially } from '@clscripts/cl-common'

runCommandsSequentially([
  new EchoCli({
    message: chalk.cyanBright('info') + ' Running Barrelsby...',
  }).command,

  new Barrelsby({
    directory: './src',
    delete: true,
    name: 'exports.ts',
    exclude: ['index.ts'],
  }).command,

  new EchoCli({
    message: chalk.cyanBright('info') + ' Compiling TypeScript...',
  }).command,

  new TsPatch({
    tsconfigPath: './tsconfig.build.json',
  }).command,

  new EchoCli({
    message: chalk.greenBright('Done') + ' Ready to use!',
  }).command,
])
