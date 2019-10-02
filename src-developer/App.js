import React, { Component } from 'react';
import Form from './components/Form';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias : [] 
  }

  componentDidMount(){
    // si el documento ha cargado, consultar API
    // if the document has loaded, request API
    this.consultarApi()
  }

  consultarApi = async (pais = "us", categoria = "science") => {
    // consultar API con informacion predeterminada.
    // request API with default data.
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=72233c3581624dc98f9862d77969b1e4`;
    // esperar respuesta y convertir a JSON
    // wait response and convert to JSON
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    // establecer datos en el State
    // set data in the State
    this.setState({
      noticias: noticias.articles
    })
  }
  
  render() {
    return (
      <div className="App py-5">
        <header className="fixed-top p-3 mx-3 rounded-bottom shadow">
          <h3 className="text-center text-white">News Filter App</h3>
        </header>

        <div className="container-fluid my-5 py-4">
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>

        <div className="footer fixed-bottom p-3 mx-3 shadow rounded-top">
          <Form 
            consultarApi={this.consultarApi}
          />
        </div>
      </div>
    );
  }
}

export default App;