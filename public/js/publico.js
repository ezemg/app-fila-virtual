const socket = io();

socket.on('estado-actual', (payload) => {
  const audio = new Audio('./audio/new-ticket.mp3');
  audio.play();

  payload.forEach((ticket, i) => {
    document.querySelector(
      `#lblTicket${i + 1}`
    ).innerText = `Ticket ${ticket.numero}`;
    document.querySelector(`#lblEscritorio${i + 1}`).innerText =
      ticket.escritorio;
  });
});
