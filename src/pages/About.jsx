function About() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">ABOUT US</p>

        <h1>Chefs Delight Resturant</h1>

        <p className="lead">
            At Chefs Delight, we are passionate about creating unforgettable culinary experiences. Our team of talented chefs combines fresh, locally sourced ingredients with innovative techniques to craft dishes that delight the senses. From our signature entrees to our delectable desserts, every item on our menu is a testament to our commitment to quality and flavor.
        </p>

        <div className="cards">
          <article className="card">
            <div className="card-icon"></div>
            <h2>Our Mission</h2>
            <p>
                To inspire a love for food and foster a sense of community through exceptional dining experiences.
            </p>
          </article>

          <article className="card">
            <div className="card-icon"></div>
            <h2>Our Vision</h2>
            <p>
                To be a leading culinary destination, known for our creativity, sustainability, and dedication to providing memorable dining experiences.
            </p>
          </article>

          <article className="card">
            <div className="card-icon"></div>
            <h2>Our Values</h2>
            <p>
                We value quality, innovation, sustainability, and community. We strive to create a welcoming environment where guests can enjoy exceptional food and service while supporting local producers and sustainable practices.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;