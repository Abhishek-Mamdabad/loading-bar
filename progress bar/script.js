// selecting required html elements using js 

const progressBar = document.getElementsByClassName('progress-bar')[0]
const above = document.getElementsByClassName('above')[0]
const below = document.getElementsByClassName('below')[0]


setInterval(() => {


  const computedStyle = getComputedStyle(progressBar)

  // computing width of element
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0

  // changing width of element
  progressBar.style.setProperty('--width', width + .1)


  /// checking if loading completed ...i.e width becomes 100px
  if( width === 100) {

    
    progressBar.setAttribute('data-label','Loading completed')
    console.log('sensei')

    // changing text of above and below h1 tags 
    above.innerHTML = 'We will now start working'
    below.innerHTML = 'Happy again to see you'

    //changing color of h1 tags
    above.style.setProperty('color','red')
    below.style.setProperty('color','red')

  }
}, 5)