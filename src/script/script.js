const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false
})


//gestion de clicks en los comics card
document.addEventListener("DOMContentLoaded",() => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const pdfUrl = card.getAttribute("data-pdf");

      window.open(pdfUrl, "_blank");
    })
  })
})