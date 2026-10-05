function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thanks for contacting CHEFS DELIGHT! We'll get back to you soon.");
  }

  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTACT US</p>

          <h1>Let's make a difference together.</h1>

          <p className="lead">
            Have a question, idea, or environmental project you'd like to
            discuss? Send us a message.
          </p>

          <div className="contact-info">
            <p>hello@vitalenvironment.com</p>
            <p>Green Earth, India</p>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea
              rows="6"
              placeholder="Tell us how we can help..."
              required
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;