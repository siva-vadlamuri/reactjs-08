import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Parent from "./components/hooks/context/Parent";
import ReducerHook from "./components/hooks/reducer/ReducerHook";
import Router from "./components/router/Router";
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

// context API
// Creating the contex
// Provider
// cusomer

// named export
export const ThemeContext = createContext();
// theme, (light theme and dark theme)
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      {/* header goes here */}
      <Header />
      {/* <ReducerHook /> */}
      {/* <p>Theme:{theme}</p>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Parent />
      </ThemeContext.Provider> */}
      {/* main */}
      {/* routes are two type
        static routes /about /home /blog
        dynamic routes */}
      <Router />

      {/* footer */}
      {/* <h2>App Js Works With Class Component</h2> */}
      {/* <UserGreetings isLoggedIn={false} /> */}

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

      {/* <ContactUs /> */}
      {/* <Users /> */}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
