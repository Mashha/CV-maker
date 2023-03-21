import { useState } from "react";
import PersonalData from "./components/PersonalData";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  function handleChange(e) {
    if(e.target.name === "image"){
      setSelectedImage(URL.createObjectURL(e.target.files[0]))
    } else {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    })}
  }

  //console.log(formData)

  return (
    <div className="App">
      {/* header, main with two divs and footer */}
      <div className="data-container">
        <h1>Personal information</h1>
        <div className="data-input">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            placeholder="Browse image"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Street name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>


      <div className="cv-container">
        <PersonalData {...formData} selectedImage={selectedImage}/>
      </div>
    </div>
  );
}

export default App;
