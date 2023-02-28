window.addEventListener('scroll', onScroll)

onScroll()

function showNavOnScroll() {  
  if (scrollY > 0) {
    naousarnavigation.classList.add('scroll')
  } else {
    naousarnavigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop



  const sectionBottom = sectionTop + sectionHeight

  const sectionBottomReachOrPassedTargetline = sectionBottom <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionBottomReachOrPassedTargetline


  const sectionId = section.getAttribute('id') //pegar a id da section atual em string
  const menuElement = document.querySelector(`
  .menu a[href*=${sectionId}]`) //pegar id string do elemento da section atual no menu

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin : 'top',
  distance: '30px',
  duration: 700,

}).reveal(`#home,
  #home img,
  #home .STATUS,
  #services,
  #services header,
  #services .cards,
  #about header,
  #about content`)