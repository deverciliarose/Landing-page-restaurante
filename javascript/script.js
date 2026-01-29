
//Controle de Modal
const cardapioModal = document.querySelector(".cardapioModal");
const modalReserva = document.querySelector(".modalReserva");

document.getElementById("openModal").addEventListener("click", () => {
    cardapioModal.showModal()
});

document.getElementById("openReserva").addEventListener("click", () => {
    modalReserva.showModal()
});

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () =>{
        btn.closest("dialog").close()
    })
});