import { useState } from "react";
import PersonalData from "./components/PersonalData";
import WorkData from "./components/WorkData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Template from "./components/Template";
import Education from "./components/Education";
import uniqid from "uniqid";
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
    linkedin: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [formDataWork, setFormDataWork] = useState([
    {
      id: uniqid(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
      notes: "",
    },
  ]);

  const [formDataEducation, setFormDataEducation] = useState([
    {
      id: uniqid(),
      universityName: "",
      degree: "",
      educationDescription: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function newWorkData() {
    const newWordDataObj = {
      id: uniqid(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
      notes: "",
    };
    setFormDataWork((prevData) => [...prevData, newWordDataObj]);
  }

  function newEducationData() {
    const newEducationDataObj = {
      id: uniqid(),
      universityName: "",
      degree: "",
      educationDescription: "",
      startDate: "",
      endDate: "",
    };

    setFormDataEducation((prevData) => [...prevData, newEducationDataObj]);
  }

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

  function handleWorkData(e, id) {
    const value = e.target.value;
    const newWorkDataObj = formDataWork.map((workObj) => {
      if (workObj.id === id) {
        return {
          ...workObj,
          [e.target.name]: value,
        };
      } else {
        return workObj;
      }
    });
    setFormDataWork(newWorkDataObj);
  }

  function handleEducData(e, id) {
    const value = e.target.value;
    const newEducationObj = formDataEducation.map((eduObj) => {
      if (eduObj.id === id) {
        return {
          ...eduObj,
          [e.target.name]: value,
        };
      } else {
        return eduObj;
      }
    });
    setFormDataEducation(newEducationObj);
  }

  function deleteWorkObj(id) {
    const removeObj = formDataWork.filter((obj) => obj.id !== id);
    setFormDataWork(removeObj);
  }

  function deleteEduObj(id) {
    const removeObj = formDataEducation.filter((obj) => obj.id !== id);
    setFormDataEducation(removeObj);
  }

  let object = { ...formData };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="form">
          <div className="form-inner">
            <PersonalData {...formData} handleChange={handleChange} />

            <h1>Experience</h1>
            {formDataWork.map((data, id) => (
              <WorkData
                {...data}
                handleWorkData={handleWorkData}
                key={id}
                deleteWorkObj={deleteWorkObj}
              />
            ))}
            <button onClick={newWorkData}>Add more</button>

            <h1>Education</h1>
            {formDataEducation.map((data, id) => (
              <Education
                {...data}
                handleEducData={handleEducData}
                key={id}
                deleteEduObj={deleteEduObj}
              />
            ))}
            <button onClick={newEducationData}>Add more</button>
          </div>
        </div>
        <div className="cv-letter">
          <Template
            {...object}
            formDataWork={formDataWork}
            formDataEducation={formDataEducation}
            selectedImage={selectedImage}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

