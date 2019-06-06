function MudarConteudo(frame) {
  document.getElementById("frame").src = frame;
  var iframe = document.getElementById("frame");
  var innerDocs = iframe.contentDocument || iframe.contentWindow.document;
  let pagers = innerDocs.getElementById("nav");
  let anchors = pagers.getElementsByTagName("a");
  console.log(anchors);
  if (frame == "conteudo.html#agendamento") {
    anchors[0].click();
  }
  if (frame == "conteudo.html#execucao") {
    anchors[1].click();
  }
  if (frame == "conteudo.html#minhaConta") {
    anchors[2].click();
  }
  if (frame == "conteudo.html#ajuda") {
    anchors[3].click();
  }
}

function AlterarCorDeFundo() {
  fundoEscuro = "#282923";
  fundoClaro = "#FAF0E6";

  estado = document.getElementsByName("botaoNoturno");
  conteudo = document.getElementById("conteudo");
  iframe = conteudo.getElementsByTagName("iframe")[0];

  for (var i = 0; i < estado.length; i++) {
    if (estado[i].checked == true) {
      conteudo.style.backgroundColor = fundoEscuro;
      iframe.style.backgroundColor = fundoEscuro;
    } else {
      conteudo.style.backgroundColor = fundoClaro;
      iframe.style.backgroundColor = fundoClaro;
    }
  }
}

function pager() {
  $("#wrapper")
    .before('<div id="nav">')
    .cycle({
      fx: "scrollDown",
      speed: "300",
      timeout: 0,
      pager: "#nav"
    });
}

function calendario() {
  let CalendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(CalendarEl, {
    plugins: ['interaction', 'dayGrid'],
    selectable: true
  });
  calendar.render();
  calendar.setOption('height', 600);
  calendar.option('aspectRatio', 0.5);
}

