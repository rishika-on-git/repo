import React from 'react';
import "./Hero2.css";
const HelloWorldComponent = () => {
  return (
    <div className="body-her">
      <h1>
        System<span style={{ color: 'white' }}>.</span>
        <span style={{ color: '#e06c75' }}>out</span>
        <span style={{ color: '#61afef' }}>.println</span>("
      </h1>
      <div className="string">
        <h1 className="greeting en">Hello World!</h1>
        <h1 className="greeting es">¡Hola Mundo!</h1>
        <h1 className="greeting de">Hallo Welt!</h1>
        <h1 className="greeting it">Ciao Mondo!</h1>
      </div>
      <h1 className="closure">");</h1>
      </div>
  );
};

export default HelloWorldComponent;
