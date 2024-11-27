const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false
})

const historias = {
  LUN: [
    {
      titulo: "Operacion: Amor Puro",
      genero: "Romance",
      imagen: "../img/15Thumb_PC.jpg",
      overlay: "OPERACION: AMOR PURO. Es difícil salir con alguien que no te da la hora del día. Su-ae Shim lo sabe mejor que nadie...",
      link: "../pages/operacion.html"
    },
    {
      titulo: "Mi liberación en tu fuego",
      genero: "Romance",
      imagen: "../img/2Thumbnail_Desktop.jpg",
      overlay: "MI LIBERACIÓN EN TU FUEGO. Diez años atrás, una niña le salvó la vida a un dragón. No imaginaban...",
      link: "../pages/liberacion.html"
    },
    {
      titulo: "Muerte: Programada",
      genero: "Paranormal",
      imagen: "../img/8Muerte_Reprogramada_desktop_thumbnail.jpg",
      overlay: "En este mundo, todos tienen el derecho, garantizado por ley, de matar a una persona por año. Luego de perder a su mejor amigo, Kreyul conoce desde joven lo brutal que puede ser esa práctica, y jura ponerle fin...",
      link: "../pages/muerteprogramada.html"
    },
  ],
  MAR: [
    {
      titulo: "La reina en esta vida",
      genero: "Fantasia",
      imagen: "../img/2Yo_soy_la_reina_en_esta_vida_thumbnail_desktop (1).jpg",
      overlay: "LA REINA EN ESTA VIDA. El reino Etruscan se tiñe de sangre cuando Cesare, el hijo ilegítimo del rey, conspira con su prometida Ariadne para usurpar el trono de su medio hermano, Alfonso.",
      link: "../pages/reina.html"
    },
    {
      titulo: "Jugo de Jungla",
      genero: "Acción",
      imagen: "../img/63JungleJuice_desktop_thumbnail.jpg",
      overlay: "JUGO DE JUNGLA. El reino Etruscan se tiñe de sangre cuando Cesare, el hijo ilegítimo del rey, conspira con su prometida Ariadne para usurpar el trono de su medio hermano, Alfonso.",
      link: "../pages/jugodejungla.html"
    },
    {
      titulo: "Dulce Hogar",
      genero: "Terror",
      imagen: "../img/3.jpg",
      overlay: "DULCE HOGAR. Después de una tragedia familiar inesperada, un solitario estudiante de preparatoria se ve obligado a abandonar su hogar, solo para encontrarse con algo mucho más aterrador: una realidad donde los monstruos quieren exterminar a la humanidad.",
      link: "../pages/dulcehogar.html"
    },
  ],
  MIE: [
    {
      titulo: "Yo soy la muerte",
      genero: "Paranormal",
      imagen: "../img/2.jpg",
      overlay: "YO SOY LA MUERTE. ¿Y si toda tu vida se rigiera por una profecía? ¿Y si tu futuro fuera...",
      link: "../pages/yosoylamuerte.html"
    },
    {
      titulo: "La niñera de la mafia",
      genero: "Romance",
      imagen: "../img/4Thumb_PC.jpg",
      overlay: "LA NIÑERA DE LA MAFIA. Ser una niñera de élite es simple: proteger al objetivo, acatar las reglas, no involucrarse emocionalmente. Algo mucho más fácil de decir que de hacerlo cuando el primer cliente de Davina es un peligroso e irresistible segundo al mando de la mafia Veneciana, quien está decidido a metérsele por debajo de la piel. No puede ni imaginar lo que él quiere de ella, pero Gabriele Angelini la llevará de vuelta al mundo del crimen organizado que ella pensaba que ya había dejado atrás por el resto de su vida.",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
    {
      titulo: "Eleceed: Velocidad eléctrica",
      genero: "Acción",
      imagen: "../img/62.jpg",
      overlay: "ELECEED. Jiwoo es un joven amable que utiliza sus reflejos increíblemente rápidos, como los de un gato, para hacer del mundo un mejor lugar salvando niños o mascotas. Kayden es un agente secreto prófugo que termina encerrado en el cuerpo de un... mmm... gato gordo, peludo y viejo. Juntos y con la ayuda de los superpoderes de Jiwoo y la inteligencia de Kayden lucharán contra las fuerzas que desean que el mal tome control del mundo. Aunque solo lo lograrán si consiguen soportarse lo suficiente para hacerlo.",
      link: "../pages/eleceed.html"
    },
  ],
  JUE: [
    {
      titulo: "El romance de Iseop",
      genero: "Romance",
      imagen: "../img/7Thumb_PC.jpg",
      overlay: "EL ROMANCE DE ISEOP. Con su excepcional perspicacia empresarial, Mingyeong Kang ascendió rápidamente en la jerarquía corporativa del Grupo TK, el principal conglomerado de Corea, convirtiéndose en gerente senior en tiempo récord. Sin embargo, después de 10 años en la compañía, le han asignado ser la secretaría de Iseop Tae, el sucesor del Grupo TK. ",
      link: "../historias/ep0_Yo_soy_la_muerte.pdf"
    },
    {
      titulo: "Tu trono",
      genero: "Fantasía",
      imagen: "../img/92.jpg",
      overlay: "TU TRONO. Debajo de la aparente tranquilidad del Imperio Vasilios, todo es tensión. Lady Medea Solon estaba destinada a casarse con el príncipe Eros, heredero al trono, hasta que le arrebataron su futuro. Ella está dispuesta a luchar para recuperar lo que le corresponde, pero ¿podrá reclamar su trono?.",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
    {
      titulo: "Trastorno",
      genero: "Terror",
      imagen: "../img/6TrastornoLaunch_desktop_thumbnail.jpg",
      overlay: "TRASTORNO. Rayne despierta en la azotea de un edificio sin ningún recuerdo del apocalipsis. Samael es... un delincuente que se encuentra con Rayne por casualidad. De este encuentro azaroso nace una alianza: Rayne y Samael deben trabajar juntos si quieren sobrevivir en un nuevo mundo plagado de monstruos caníbales.",
      link: "../pages/trastorno.html"
    },
  ],
  VIE: [
    {
      titulo: "Detras de tu sonrisa",
      genero: "Romance",
      imagen: "../img/10_EC8DB8EB84A4EC9DBC_ipad.jpg",
      overlay: "DETRAS DE TU SONRISA.Kiyu ha vivido toda su vida adorado por los demás por su belleza. Pero después de renunciar al show de talentos en el que participaba, Kiyu sueña con llevar una vida de estudiante común en la preparatoria. Sin embargo, las cosas no son tan fáciles. Se pone anteojos para pasar inadvertido entre sus compañeros, pero se da cuenta de que hacer amigos es mucho más difícil sin una cara bonita.",
      link: "../pages/dtsonrisa.html"
    },
    {
      titulo: "La emperatriz divorciada",
      genero: "Fantasía",
      imagen: "../img/01Thumb_PC.jpg",
      overlay: "LA EMPERATRIZ DIVORCIADA. Navier Ellie Trovi era la emperatriz perfecta en todos los sentidos: inteligente, valiente y sociable. Era amable con sus súbditos y devota de su marido. Se conformaba con vivir el resto de sus días como la sabia emperatriz del Imperio de Oriente… Pero un día, su esposo trajo a una amante y le exigió el divorcio. “Acepto este divorcio… y solicito autorización para volver a casarme”. En un giro inesperado, Navier se vuelve a casar con otro emperador y conserva su título y su sueño de ser emperatriz. Pero ¿cómo se desarrollaron los hechos?.",
      link: "../pages/emperatriz.html"
    },
    {
      titulo: "Contrato a Mordiscos",
      genero: "Romance",
      imagen: "../img/3Contrato+a+mordiscos_thumbnail_desktop.jpg",
      overlay: "CONTRATO A MORDISCOS. ¿Quién necesita medicamentos cuando una mordida de vampiro puede mejorarnos al instante? Chae-i sufre de dolor de cabeza crónico lo que le ha provocado una terrible reputación como actriz. Al sentir mejoría, después de haber sido mordida por el famoso Ijun —quien resulta ser un vampiro— ella le pide que la siga mordiendo, a cambio, Ijun le propone una relación por contrato. ¿Qué lo motiva? ¿Chae-i encontrará mejoría?",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
  ],
  SAB: [
    {
      titulo: "Yo soy la muerte",
      genero: "Paranormal",
      imagen: "../img/2.jpg",
      overlay: "YO SOY LA MUERTE. ¿Y si toda tu vida se rigiera por una profecía? ¿Y si tu futuro fuera...",
      link: "../historias/ep0_Yo_soy_la_muerte.pdf"
    },
    {
      titulo: "Jugo de Jungla",
      genero: "Acción",
      imagen: "../img/63JungleJuice_desktop_thumbnail.jpg",
      overlay: "JUGO DE JUNGLA. El reino Etruscan se tiñe de sangre cuando Cesare, el hijo ilegítimo del rey, conspira con su prometida Ariadne para usurpar el trono de su medio hermano, Alfonso.",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
    {
      titulo: "Yo soy la villana",
      genero: "Romance",
      imagen: "../img/9YoSoyLaVillana_Thumbnail_Thumbnail_Desktop.jpg",
      overlay: "YO SOY LA VILLANA. Se supone que el esfuerzo te lleva lejos, pero nunca me imaginé que tan lejos como al mundo dentro de la novela de mi mejor amiga... Lucy se despierta en un mundo totalmente nuevo, donde aún vive la nobleza y tardes de té, pero como la villana que espera la pena de muerte. Para escapar de este destino, debe convertirse en una estafadora de la alta sociedad. ¿Podrá Lucy volver a su mundo?",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
  ],
  DOM: [
    {
      titulo: "Yo soy la muerte",
      genero: "Paranormal",
      imagen: "../img/2.jpg",
      overlay: "YO SOY LA MUERTE. ¿Y si toda tu vida se rigiera por una profecía? ¿Y si tu futuro fuera...",
      link: "../historias/ep0_Yo_soy_la_muerte.pdf"
    },
    {
      titulo: "Jugo de Jungla",
      genero: "Acción",
      imagen: "../img/63JungleJuice_desktop_thumbnail.jpg",
      overlay: "JUGO DE JUNGLA. El reino Etruscan se tiñe de sangre cuando Cesare, el hijo ilegítimo del rey, conspira con su prometida Ariadne para usurpar el trono de su medio hermano, Alfonso.",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
    {
      titulo: "Contrato a Mordiscos",
      genero: "Romance",
      imagen: "../img/3Contrato+a+mordiscos_thumbnail_desktop.jpg",
      overlay: "CONTRATO A MORDISCOS. ¿Quién necesita medicamentos cuando una mordida de vampiro puede mejorarnos al instante? Chae-i sufre de dolor de cabeza crónico lo que le ha provocado una terrible reputación como actriz. Al sentir mejoría, después de haber sido mordida por el famoso Ijun —quien resulta ser un vampiro— ella le pide que la siga mordiendo, a cambio, Ijun le propone una relación por contrato. ¿Qué lo motiva? ¿Chae-i encontrará mejoría?",
      link: "../historias/ep0_Operacion_Amor_Puro.pdf"
    },
  ],
};

function mostrarHistorias(dia) {
  const contenedor = document.querySelector(".comics-dias");
  contenedor.innerHTML = ""; // Limpia las historias previas

  historias[dia].forEach(historia => {
    const card = `
          <div class="card">
              <img src="${historia.imagen}" class="card-img" alt="${historia.titulo}">
              <div class="card-img-overlay c-black">
                  <h5 class="card-title">${historia.titulo}</h5>
                  <p class="card-text">${historia.genero}</p>
              </div>
              <a href="${historia.link}">
                  <div class="overlay">
                      <p class="overlay-text">${historia.overlay}</p>
                  </div>
              </a>
          </div>
      `;
    contenedor.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarHistorias("LUN");
});