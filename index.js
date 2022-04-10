function buttonWizard(options) {
  if(options.type === 'primary') {
    options.type = 'blue'
  } else if(options.type === 'secondary') {
    options.type = 'red'
  }

  this.style.backgroundColor = options.type
}

module.exports.buttonWizard = buttonWizard;