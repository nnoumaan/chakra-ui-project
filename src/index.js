import React ,{StrictMode}from "react";
import  ReactDOM  from "react-dom/client";
import ColorModeSwitcher from "./ColorModeSwitcher";
import {ColorModeScript,ChakraProvider,theme} from '@chakra-ui/react'
import App from './App'


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)


root.render(

<StrictMode>
  <ColorModeScript/>


<ChakraProvider theme={theme}>
  


<App/>

<ColorModeSwitcher/>  

</ChakraProvider>


</StrictMode>




)

// import React,{StrictMode} from "react";
// import  ReactDOM  from "react-dom/client";
// import App from './App'; 
// import {ChakraProvider,ColorModeScript,theme} from '@chakra-ui/react'
// import ColorModeSwitcher from "./ColorModeSwitcher";


// const container = document.getElementById('root')

// const root  = ReactDOM.createRoot(container);


// root.render(

//   <StrictMode>
//     <ColorModeScript/>
    
//     <ChakraProvider theme={theme}>
      
//       <ColorModeSwitcher/>
      
//       <App/>
//       </ChakraProvider>
    

//   </StrictMode>

// )