import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/componentes/playlist';
import data from '../api.json';

//console.log('Hola Mundo!')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, dónde lo haré)
//const holaMundo = <h1>Hola Mundo!!!!</h1>;
render(<Home data={data} />, app);