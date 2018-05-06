setTimeout(function () {
    siteWelcome.classList.remove('active')
  }, 1)
  a1.onclick = function () {
    divbar.className = 'divb one'
  }
  a2.onclick = function () {
    divbar.className = 'divb two'
  }
  a3.onclick = function () {
    divbar.className = 'divb three'
  }
  window.onscroll = function (xxx) {
    if (window.scrollY > 0) {
      topNavBar.classList.add('scroll')
    } else {
      topNavBar.classList.remove('scroll')
    }
  }
  let litags = document.querySelectorAll('.navul>li')
  for (let i = 0; i < litags.length; i++) {
    litags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    litags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }
  let aTags = document.querySelectorAll('.navul> li > a')
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
      x.preventDefault()
      let a = x.currentTarget
      let href = a.getAttribute('href') //'#siteAbout'
      let element = document.querySelector(href)
      let top = element.offsetTop
      window.scrollTo(0, top - 80)
    }
  }