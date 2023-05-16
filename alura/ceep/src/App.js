import React, { Component } from 'react'
import ListNotes from './components/list';
import Form from './components/form';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  render(){
    return ( 
      <section className='conteudo'>
        <Form/>
        <ListNotes/>
      </section>
    );
  } 
}

export default App;
