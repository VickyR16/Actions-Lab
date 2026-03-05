const core = require("@actions/core")

input = core.getInput("name")
console.log(input) //did not use the core.info()
core.setOutput("action-output","Hello ${input}")
