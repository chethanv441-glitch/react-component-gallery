import { useState } from "react";
import "../../App.css";

function FormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedName, setSubmittedName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) return;

    setSubmittedName(formData.name.trim());

    setSubmitted(true);

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
      setSubmittedName("");
    }, 5000);
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="form-success">
          <strong>Thank you, {submittedName || "there"}!</strong>
          <p>We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-textarea"
          />
          <button type="submit" className="form-submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default FormDemo;
