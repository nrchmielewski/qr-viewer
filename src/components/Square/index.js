import React from "react";
import "./index.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.value === 0) {
      this.setState({ value: 1 });
    } else if (this.state.value === 1) {
      this.setState({ value: 0 });
    }
  }

  render() {
    var className = "square";
    switch (this.state.value) {
      case 0:
        className += " white";
        break;
      case 1:
        className += " black";
        break;
      case 2:
        className += " white static";
        break;
      case 3:
        className += " black static";
        break;
      default:
        className += " white static";
    }

    return <div className={className} onClick={() => this.onClick()} 
    title={this.props.row + " " + this.props.col}/>;
  }
}
