// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeHeader, closeMenu, toggleMenu } from './menu';

// import spockImg from '../assets/images/icon-spock.svg'; en caso de necesitar rutas de las imágenes

const botonMenu = document.getElementById('boton-menu');

botonMenu.addEventListener('click', () => toggleMenu(botonMenu));
