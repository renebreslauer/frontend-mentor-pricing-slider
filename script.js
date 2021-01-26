function init() {
  const sliders = document.getElementsByClassName('tick-slider-input')

  for (let slider of sliders) {
    slider.oninput = onSliderInput
    updateValue(slider)
  }
}

function onSliderInput(event) {
  updateValue(event.target)
}

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num)
}

function updateValue(slider) {
  let value = document.getElementById(slider.dataset.valueId)
  let price = document.getElementById('price')

  value.innerHTML = '<div>' + kFormatter(slider.value) + ' ' + '</div>'

  if (slider.value >= 0 && slider.value <= 10000) {
    price.innerHTML = '$10.00'
  }
  if (slider.value >= 1001 && slider.value <= 50000) {
    price.innerHTML = '$12.00'
  }
  if (slider.value >= 50001 && slider.value <= 100000) {
    price.innerHTML = '$16.00'
  }
  if (slider.value >= 100001 && slider.value <= 200000) {
    price.innerHTML = '$18.00'
  }
}

window.onload = init
