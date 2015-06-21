#!/usr/bin/env node
'use strict'

var git = require('git-state')

var arg = process.argv[2]
var verbose = arg === '--verbose'
var path = process.cwd()

if (!git.isGitSync(path)) return

git.check(path, function (err, result) {
  if (err) return error(err)
  var str = result.branch
  if (result.issues) str += '👎 '
  console.log(str)
})

function error (err) {
  if (verbose) console.error('ERROR:', err.message)
  console.log('❗️')
}
