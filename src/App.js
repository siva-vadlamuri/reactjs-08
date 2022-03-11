import React from "react";
import Button from "./components/Button";
import Product from "./components/product/Product";
import "./App.css";
import ContactUs from "./components/contact-us/ContactUs";
// There are two ways of creating component
// 1 ES6 class based component
// 2 function component is a normal javascript functions which return the jsx

// export default function App() {
//   return (
//     <div>
//       <h2>App Js works</h2>
//     </div>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>App Js Works With Class Component</h2>

        {/* <Button name="Play store" />
        <Button name="App Store" /> */}
        {/* <p className="App__error">An Error Occured On [App.js]</p>
        <Product
          title="Apple 13 pro"
          desc="Apple 13 pro is build with M13 ionic chip"
          price={100000}
        />
        <Product
          title="Samsung S13"
          desc="Samsung S13 has high quality display screen"
          price={80000}
        />
        <Product
          title="Redmi 5 pro"
          desc="Redmin 5 pro was built with snapdragon 430"
          price={20000}
        /> */}

        <ContactUs />
      </div>
    );
  }
}

// export default App;
