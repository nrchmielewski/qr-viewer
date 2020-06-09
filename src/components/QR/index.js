import React from "react";
import Square from "../../components/Square/index.js";
import * as variables from "./variables.js";
import "./index.css";

export default class QR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: []
    };
  }

  generateQR() {
    var base = variables.QRBase;
    var qr = []

    for (var i = 0; i < base.length; i++) {
      let row = [];
      for (var j = 0; j < base.length; j++) {
        row.push(<Square value={base[i][j]} row={i} col={j}/>)
      }
      qr.push(<div className="row">{row}</div>);
    }
    
    return qr;
  }

  getDeets() {
    var chunks = variables.chunks;
    var data 
    for (var i = 0; i < chunks.data.length; i++) {

    }
  }

  render() {
    return (
      <div className="qr">
        {this.generateQR()}
      </div>
    );
  }
}
