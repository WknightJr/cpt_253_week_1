import React from 'react';

function MyButton() {
    return (
      <button onclick="showAlert()">Hello World!</button>
    );
  }
//This is the button. What I am hoping it does is both say Hello World and give a message when clicked.//

export const MyButton = () =>{

    const sayHelloWorld = () =>{
        alert('Hello World!');
    }

return (
    <button onClick={ () => sayHelloWorld()}>Say Hi!</button>
    )
}
        
//This is the message text.//
