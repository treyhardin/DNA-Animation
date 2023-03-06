import './style.css'

let visibleClassName = 'visible'

let intersectionOptions = {
  root: null,
  threshold: 0.5,
}

const checkIsIntersecting = (entries) => {
  entries.map((observer) => {
      if (observer.isIntersecting) {
        const element = observer.target
        setTimeout(() => {
          console.log(element.dataset.animDelay)
          element.classList.contains(visibleClassName) ? '' : element.classList.add(visibleClassName)
        }, element.dataset.animDelay ? element.dataset.animDelay * 1000 : 0)
      }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  let animatedElements = document.getElementsByClassName('animate')
  const observer = new IntersectionObserver(checkIsIntersecting, intersectionOptions);
  Array.from(animatedElements).forEach((element) => {
    observer.observe(element);
  })
})

