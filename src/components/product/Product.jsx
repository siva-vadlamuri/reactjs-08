import React, { Component } from "react";
import styles from "./Product.module.css";
console.log(styles);

export default class Product extends Component {
  render() {
    return (
      <section>
        <section className="border border-2">
          <p className={styles.error}>Error Occured In Product page</p>
          <h3>Tile: {this.props.title}</h3>
          <p>Description: {this.props.desc}</p>
          <span>Price $:{this.props.price}</span>
        </section>
      </section>
    );
  }
}
