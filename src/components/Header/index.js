import React from "react";

import "./styles.css";

/* - Stateless Components:
Em muitos casos temos componentes que não possuem nenhum ciclo de vida ou estado e retornam apenas JSX, 
nesse caso chamamos eles de Stateless Components e podem ser escritos utilizando uma função */

const Header = () => <header id="main-header"> Hello React! </header>;

export default Header;
