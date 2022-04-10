function buttonWizard(options) {
  let button = document.querySelectorAll('.buttonwizard'); 

  if(options.type === 'primary') {
    options.type = 'blue'
  } else if(options.type === 'secondary') {
    options.type = 'red'
  }

  button.forEach(buttons => {
    buttons.style.backgroundColor = options.type
  })
}

module.exports.buttonWizard = buttonWizard;