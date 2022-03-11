import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <section>
        <section className="border border-2">
          <h3>Tile: {this.props.title}</h3>
          <p>Description: {this.props.desc}</p>
          <span>Price $:{this.props.price}</span>
        </section>
      </section>
    );
  }
}
