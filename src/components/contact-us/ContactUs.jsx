import React from "react";

function ContactUs() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data submitted");
  };
  return (
    <form>
      <input onChange={handleChange} type="text" name="" />
      <input onChange={handleChange} type="text" name="" />
      <input onChange={handleChange} type="text" name="" />
      <input onChange={handleChange} type="text" name="" />
      <button type="submit" onClick={handleSubmit} className="btn btn-info">
        Login
      </button>
    </form>
  );
}

export default ContactUs;
