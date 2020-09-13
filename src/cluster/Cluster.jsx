import React from 'react';
import './Cluster.css';


function Cluster({servers}) {
  if (servers.length < 4) {
    throw `Servers must not least than 4. There is only ${servers.length} passed.`
  }

  return(
    <section className="Cluster">
      <h3>CLUSTER</h3>
      <ul className="ServerList">
        {servers.map(server => <li>{server}</li>)}
      </ul>
    </section>
  )
}

export default Cluster;
