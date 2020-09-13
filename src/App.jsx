import React, { useState } from 'react';
import Cluster from './cluster/Cluster';
import Server from './server/Server';
import './App.css';

function App() {
  const servers = new Array(4).fill(<Server/>);
  return (
    <section className="App">
      <header className="App-header">
        <h1>Server Monitoring</h1>
      </header>
      <div>
        <Cluster servers={servers} />
      </div>
    </section>
  );
}

export default App;
