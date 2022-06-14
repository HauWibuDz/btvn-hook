import clsx from "clsx";
import { useState } from "react";
import style from "./btvn-demo.module.css"

export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    className: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", className: ""});
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Student Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="className"
            placeholder="Class"
            value={contactInfo.className}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}