navBar = document.querySelector('.header .flex .navBar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    profile.classList.remove('active');
} 


profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    navBar.classList.remove('active');
} 

window.onscroll = () =>{
    navBar.classList.remove('active');
    profile.classList.remove('active');
}