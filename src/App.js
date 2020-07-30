import React from 'react';

import './index.css'

import Header from './components/Header'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

import dadosIniciais from './data/dados_iniciais.json'

function App() {

  const {categorias} = dadosIniciais

  return (
    <div>
      <Header />

      <BannerMain 
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription="Oxe é muito oxente!!!..."
      />

      {
        categorias.map(categoria => (
          <Carousel 
          ignoreFirstVideo
          category={categoria}/>
          )
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;
