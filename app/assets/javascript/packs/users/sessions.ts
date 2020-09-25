console.log(235)

const readyCb = () => {
  console.log(123)
}

const leaveCb = () => {
  console.log(456)

  document.removeEventListener('turbolinks:load', readyCb)
  document.removeEventListener('turbolinks:before-render', leaveCb)
}

document.addEventListener('turbolinks:load', readyCb)
document.addEventListener('turbolinks:before-render', leaveCb)