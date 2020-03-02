import React from "react";

import "./styles.css";

import Header from "./components/Header";
import Main from "./pages/main";
/* 
Componente é um conjunto isolado de lógica, estrutura e estilização
Todo componente tem um único método obrigatório o 'render()' 
O 'render()' retorna 'return' obrigatoriamente um conteúdo JSX 
*/

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
