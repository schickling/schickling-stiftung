#!/usr/bin/env node

const cors = require('cors')
const chalk = require('chalk')
const figures = require('figures')
const express = require('express')
const bodyParser = require('body-parser')
const { resolve, relative } = require('path')
const jscodeshift = require('jscodeshift/dist/Runner')
const argv = require('yargs-parser')(process.argv.slice(2))
const resolveConfig = require('tailwindcss/resolveConfig')

const PORT = 2406
const app = express()

app.use(cors({ maxAge: 600 }))
app.use(bodyParser.json())

const configPath = argv.c || argv.config
const verbose = argv.verbose || false

let config
if (configPath) config = resolveConfig(require(resolve(configPath)))
else config = resolveConfig({})

app.get('/config', async (req, res) => {
  res.send(config)
})

app.post('/', async (req, res) => {
  const { path, lineNumber, className } = req.body
  if (!path) {
    res.send('nothing')
    return
  }

  let transform = __dirname + '/transform.js'

  // fire and forget
  const response = await jscodeshift.run(transform, [path], {
    lineNumber: parseInt(lineNumber, 10),
    className,
    silent: true,
    runInBand: true,
    verbose: verbose,
    parser: 'tsx'
  })

  const prettyPath = relative(process.cwd(), path) + ':' + lineNumber

  if (response.ok) {
    console.log(
      chalk.green(figures.tick),
      prettyPath,
      'in',
      response.timeElapsed + 's'
    )
  } else if (response.nochange) {
    console.log(chalk.yellow(figures.line), 'did not change', prettyPath)
  } else if (response.error) {
    console.log(chalk.red(figures.cross), 'error changing', prettyPath)
  }

  res.send(response)
})

app.listen(PORT, () => console.log(`Listening for updates at ${PORT}`))
