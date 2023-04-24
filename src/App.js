import { useState } from "react";
import QRcode from "react-qr-code";
import QRCodeLink from "qrcode"; // Lib para baixar o QRcode
import React from "react";
import "./App.css";

function App() {
  const [link, SetLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(event) {
    SetLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <div className="body">
      <div className="container">
        <QRcode value={link} />
        <h1>Gerador de QRCode.</h1>
        <input
          className="input"
          placeholder="Digite seu Link."
          value={link}
          onChange={(event) => handleQrcode(event)}
        />

        <a href={qrcodeLink} download={`qrcode.png`} className="footer">
          {" "}
          Baixar QRCode.
        </a>
      </div>
    </div>
  );
}

export default App;
