const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIwNGYzM2QxLWQ2OWItNDhmNi05ODBjLTkzNDQ0ODcwYzZhZS0xNjc1OTUzOTk2NzAxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODI4MGM3MjgtMGYyMy00MjcxLTliMTgtYjcxM2U2ODRiYmM3IiwidHlwZSI6InQifQ.Wo_atPop1LLn1RaIXyHaXfrlBivDkznGEupCnNN6y54'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
