import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Taste Lies Here</p>

          <h1>
            Savor the flavor
            <span> one bite at a time.</span>
          </h1>

          <p className="hero-description">
            At Chefs Delight, we are passionate about creating unforgettable culinary experiences. Our team of talented chefs combines fresh, locally sourced ingredients with innovative techniques to craft dishes that delight the senses. From our signature entrees to our delectable desserts, every item on our menu is a testament to our commitment to quality and flavor.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="leaf"></div>
          <h2>Culinary Excellence</h2>
          <p>
            We value quality, innovation, sustainability, and community. We strive to create a welcoming environment where guests can enjoy exceptional food and service while supporting local producers and sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;