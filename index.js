import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/componentes/playlist';
import data from './src/api.json'

//console.log('Hola Mundo!')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, dónde lo haré)
//const holaMundo = <h1>Hola Mundo!!!!</h1>;
render(<Playlist data={data} />, app);