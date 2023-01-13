#!/usr/bin/env node
import { greet } from './cli.js'
import { numberParity } from './brain-even.js'

const userName = greet()

numberParity(userName)
