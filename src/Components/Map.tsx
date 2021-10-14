import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import pontos from "./pontos.json";

import "./Styles/map.css";

const Mapa = () => {
  const [filtro, setFiltro] = useState("");

  const pontoss = pontos.filter((pontos) => pontos.descricao?.includes(filtro));
  const mudarFiltro = (arg: string) => setFiltro(arg);

  return (
    <div className="container">
      <div id="divBottons">
        <button onClick={() => mudarFiltro("Papel")}>Papel</button>
        <button onClick={() => mudarFiltro("Metal")}>Metal</button>
        <button onClick={() => mudarFiltro("Óleos")}>Óleos</button>
        <button onClick={() => mudarFiltro("Pilhas")}>Pilhas</button>
        <button onClick={() => mudarFiltro("Eletrônicos")}>Eletrônicos</button>
        <button onClick={() => mudarFiltro("Orgânicos")}>Orgânicos</button>
        <button onClick={() => mudarFiltro("")}>Outros</button>
      </div>

      <MapContainer
        id="mapa"
        center={[-22.432, -46.9582]}
        zoom={15}
        scrollWheelZoom={false}
        fullscreenControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pontoss.map((pontos) => (
          <Marker position={[pontos.x, pontos.y]}>
            <Popup>
              <h5>{pontos.nome}</h5>
              <p>{pontos.descricao}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
