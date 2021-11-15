import React from "react";
import ilustracao from "../../assets/Ilust.png";

function Ilustracao() {
  return (
    <img
      style={{
        display: "flex",
        height: "700px",
        marginTop: "25px",
      }}
      src={ilustracao}
      alt="Reciclagem"
      height={"100%"}
      width={"100%"}
      margin="10px"
    />
  );
}

export default Ilustracao;
