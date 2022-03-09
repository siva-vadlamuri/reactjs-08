import React from "react";
import Button from "./components/Button";
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

        <Button name="Play store" />
        <Button name="App Store" />
      </div>
    );
  }
}

// export default App;
