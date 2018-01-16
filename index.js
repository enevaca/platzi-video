import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/componentes/media';

//console.log('Hola Mundo!')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, dónde lo haré)
//const holaMundo = <h1>Hola Mundo!!!!</h1>;
render(<Media title="¿Qué es responsive Design?" author="Noel Vaca Moreno" image="./images/covers/responsive.jpg" />, app);