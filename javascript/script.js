
//Controle de Modal
const cardapioModal = document.querySelector(".cardapioModal");
const modalReserva = document.querySelector(".modalReserva");

document.querySelectorAll(".openModal").forEach(btn => {
    btn.addEventListener("click", () =>{
        cardapioModal.showModal()
    })
})

document.querySelectorAll(".openReserva").forEach(btn =>{
    btn.addEventListener("click", () =>{
        modalReserva.showModal()
    })
})

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () =>{
        btn.closest("dialog").close()
    })
});
//Rolagem da página via link
const menuLinks = document.querySelectorAll(".nav-item a");

menuLinks.forEach(Link =>{
    Link.addEventListener('click', function(e){
        e.preventDefault()


        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
});
//Classe active
const navLink = document.querySelectorAll(".nav-item");

navLink.forEach(navLink => {
    navLink.addEventListener('click', () =>{
        document.querySelector('.active').classList.remove('active');
        navLink.classList.add('active')
    })
});
//Disparo de botões
const botoes = document.querySelectorAll('.sacola');

botoes.forEach(botao =>{
    botao.addEventListener('click', function(){
        alert('Ação indisponível: este é um restaurante fictício.Obrigada!')
    })
})

const reserva = document.getElementById('reserva');

reserva.addEventListener('click', function(){
    alert('Ação indisponível: este é um restaurante fictício.Obrigada!')
});
//Menu Hamburguer 
const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', ()=>{
    navList.classList.toggle('active');

    if(navList.classList.contains('active')){
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x-lg');
    }else{
        menuIcon.classList.remove('bi-x-lg');
        menuIcon.classList.add('bi-list');
    }
})