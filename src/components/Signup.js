import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "No",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    let error = "";

    switch (name) {
      case "fullName":
        if (value.trim().length < 3) {
          error = "Full name must contain at least 3 characters";
        }
        break;

      case "phone":
        if (!/^[0-9]{10}$/.test(value)) {
          error = "Phone number must be exactly 10 digits";
        }
        break;

      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
          error = "Email must be a valid @gmail.com address";
        }
        break;

      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
        ) {
          error =
            "Password must contain uppercase, lowercase, number and be at least 8 characters";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (form.fullName.trim().length < 3) {
      newErrors.fullName =
        "Full name must contain at least 3 characters";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone =
        "Phone number must be exactly 10 digits";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)
    ) {
      newErrors.email =
        "Email must be a valid @gmail.com address";
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/account");
    }
  };

  return (
    <div className="mobile-container">
      <div className="signup-wrapper">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            placeholder="Enter full name"
            onChange={handleChange}
            className={
              errors.fullName ? "error-input" : ""
            }
          />
          {errors.fullName && (
            <span className="error-text">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Phone Number*</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Enter phone number"
            onChange={handleChange}
            className={
              errors.phone ? "error-input" : ""
            }
          />
          {errors.phone && (
            <span className="error-text">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter email address"
            onChange={handleChange}
            className={
              errors.email ? "error-input" : ""
            }
          />
          {errors.email && (
            <span className="error-text">
              {errors.email}
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter password"
            onChange={handleChange}
            className={
              errors.password ? "error-input" : ""
            }
          />
          {errors.password && (
            <span className="error-text">
              {errors.password}
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            placeholder="Enter company name"
            onChange={handleChange}
          />
        </div>

        <div className="radio-section">
          <p>Are you an Agency?*</p>

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={form.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={form.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          className="primary-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;