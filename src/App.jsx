import { first } from "lodash";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  function handleChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

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
            type="file"
            name=""
            placeholder="Browse image"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
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
    </div>
  );
}

export default App;
