import React from "react";
import Routes from "./routes";

import "./styles.css";

import Header from "./components/Header";

/* 
Componente é um conjunto isolado de lógica, estrutura e estilização
Todo componente tem um único método obrigatório o 'render()' 
O 'render()' retorna 'return' obrigatoriamente um conteúdo JSX 
*/

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
