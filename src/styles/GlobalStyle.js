import {createGlobalStyle} from 'styled-components';

const GlobalStyled = createGlobalStyle`
:root{
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --border-color:#2e344e;
    --background-light-color: #F1F1F1;
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
}


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
    font-size; 1.2rem;
}


 body{
     background-color: var(--background-dark-color);
 }

`;

export default GlobalStyled;