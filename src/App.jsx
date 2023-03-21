import { useState } from "react";
import PersonalData from "./components/PersonalData";
import WorkData from "./components/WorkData";
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
  const [formDataWork, setFormDataWork] = useState({
    position: "",
    company: "",
    city: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    if (e.target.name === "image") {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    } else {
      const value = e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }
  }

  function handleWorkData(e) {
    const value = e.target.value;
    setFormDataWork({
      ...formDataWork,
      [e.target.name]: value,
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Create your resume</h1>
      </header>
      {/* main with personal data */}
      <main>
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

          {/* experience */}

          <div className="data-experience">
            <h1>Experience</h1>
            <div className="data-experience-inner">
              <input
                type="text"
                name="position"
                placeholder="Position"
                onChange={handleWorkData}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleWorkData}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleWorkData}
              />
              <input
                type="text"
                name="dateFrom"
                placeholder="From (2015)"
                onChange={handleWorkData}
              />
              <input
                type="text"
                name="dateTo"
                placeholder="To (2017)"
                onChange={handleWorkData}
              />
              <button>Add more</button>
            </div>
          </div>
        </div>

        <div className="cv-container">
          <PersonalData {...formData} selectedImage={selectedImage} />
          <WorkData {...formDataWork} />
        </div>
      </main>

      <footer>
        <p>Copyright -icon </p>
      </footer>
    </div>
  );
}

export default App;
