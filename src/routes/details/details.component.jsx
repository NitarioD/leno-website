import React from "react";
import { Link } from "react-router-dom";

import Features from "../../components/features/features.component";
import "./details.styles.scss";
import Footer from "../../components/footer/footer.component";

const Details = () => {
  return (
    <>
      {/* Inner Header */}
      <header className="inner-header">
        <div className="inner-header__container container">
          <h1 className="inner-header__title">Details</h1>
        </div>
      </header>
      {/* Pricing */}
      <section className="pricing">
        <div className="pricing__container container">
          <h2 className="pricing__title">Pricing Options</h2>
          <div className="pricing__cards">
            {/* Card 1 */}
            <div className="pricing__card">
              <div className="pricing__card-box">
                <h4 className="pricing__card-title">Standard</h4>
                <h3 className="pricing__card-price">Free</h3>
                <div className="pricing__card-body">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i> Unlimited access to all
                      features
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      24/7 Customer Support
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      1GB Storage
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      Cancel Anytime
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="#" className="pricing__card-button btn">
                Get Started
              </Link>
            </div>

            {/* Card 2 */}
            <div className="pricing__card">
              <div className="pricing__card-box">
                <h4 className="pricing__card-title">Advanced</h4>
                <h3 className="pricing__card-price">$19</h3>
                <div className="pricing__card-body">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i> Unlimited access to all
                      features
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      24/7 Customer Support
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      5GB Storage
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      Cancel Anytime
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="#" className="pricing__card-button btn">
                Get Started
              </Link>
            </div>

            {/* Card 3 */}
            <div className="pricing__card">
              <div className="pricing__card-box">
                <h4 className="pricing__card-title">Complete</h4>
                <h3 className="pricing__card-price">$29</h3>
                <div className="pricing__card-body">
                  <ul className="pricing__card-list">
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i> Unlimited access to all
                      features
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      24/7 Customer Support
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      10GB Storage
                    </li>
                    <li className="pricing__card-item">
                      <i className="fas fa-check"></i>
                      Cancel Anytime
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="#" className="pricing__card-button btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="pricing-notes">
        <div className="pricing-notes__container container">
          <p className="pricing-notes__text">
            * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            temporibus!
          </p>
          <p className="pricing-notes__text">
            * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            temporibus Lorem ipsum dolor sit amet.
          </p>
          <p className="pricing-notes__text">
            * Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            quibusdam rem magnam, mollitia autem tempora.
          </p>
        </div>
      </section>

      {/* Details Features */}
      <section className="details-features">
        <div className="details-features__container container">
          <h2 className="details-features__title">Features</h2>
          <div className="details-features__list">
            {/* Item 1 */}
            <Features
              heading="Real-Time Data"
              description="Access real-time data instantly, ensuring you're always
                  up-to-date with the latest information. Whether it's market
                  trends, user activity, or system performance metrics, stay
                  informed with our real-time data solutions."
              iconClass="fas fa-rocket fa-4x"
            />

            {/* Item 2 */}
            <Features
              heading="Simple Integration"
              description="Integrate our solutions seamlessly into your existing workflow
                  with minimal effort. Our easy-to-use APIs and intuitive
                  documentation make integration a breeze, allowing you to focus
                  on what matters most - delivering value to your users."
              iconClass="fas fa-user fa-4x"
            />

            {/* Item 3 */}
            <Features
              heading="Easy To Use"
              description="Experience unparalleled ease of use with our user-friendly
                  interface and intuitive features. From beginners to experts,
                  our platform is designed to cater to all skill levels,
                  ensuring a smooth and hassle-free experience for everyone."
              iconClass="fas fa-code fa-4x"
            />

            {/* Item 4 */}
            <Features
              heading="High Accuracy"
              description="Rely on our high-precision algorithms and robust data
                  processing techniques to deliver accurate insights every time.
                  With our advanced technology and rigorous validation
                  processes, you can trust that your data is always reliable and
                  precise."
              iconClass="fas fa-compass fa-4x"
            />

            {/* Item 5 */}
            <Features
              heading="Reporting Tools"
              description="Empower your team with powerful reporting tools that provide
                  actionable insights and in-depth analysis. From customizable
                  dashboards to comprehensive reports, our reporting tools make
                  it easy to track performance, identify trends, and make
                  informed decisions."
              iconClass="fas fa-chart-pie fa-4x"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Details;
