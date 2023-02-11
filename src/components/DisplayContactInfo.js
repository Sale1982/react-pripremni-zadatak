import React from "react";

class DisplayContactInfo extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="info-container">
        <span className="main-title">{info.uciliste}</span> -{" "}
        <span className="moto-title">{info.moto}</span>
        <ul>
          <li>
            <strong>Adresa: </strong>
            {info.adresa}
          </li>
          <li>
            <strong>Tel: </strong>
            {info.telefon}
          </li>
        </ul>
      </div>
    );
  }
}

export default DisplayContactInfo;
