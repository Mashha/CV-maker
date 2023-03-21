import { useState } from "react";
import PersonalData from "./components/PersonalData";
import WorkData from "./components/WorkData";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header />
      <main>
        <div className="form">
          <PersonalData {...formData} onChange={() => handleChange(e)} />
          <WorkData {...formDataWork} onChange={() => handleWorkData(e)} />
        </div>
        <div className="letter"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
