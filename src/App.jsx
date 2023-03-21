import { useState } from "react";
import PersonalData from "./components/PersonalData";
import WorkData from "./components/WorkData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Template from "./components/Template";
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
    cityWork: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    if (e.target.name === "image") {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    } else {
      const value = e.target.value;
      console.log(e.target.value)
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

  let objects = {...formData, ...formDataWork}

  return (
    <div className="App">
      <Header />
      <main>
        <div className="form">
          <PersonalData {...formData} handleChange={handleChange} />
          <WorkData {...formDataWork} handleWorkData={handleWorkData} />
        </div>
        <div className="cv-letter">
          <Template {...objects}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
