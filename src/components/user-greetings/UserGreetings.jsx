import React from "react";

function UserGreetings(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome User</h2>;
  //   } else {
  //     return <h2>Please Login</h2>;
  //   }
  return (
    <section>
      {props.isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </section>
  );
}

export default UserGreetings;
