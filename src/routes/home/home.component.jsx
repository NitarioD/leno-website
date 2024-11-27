import React, { useEffect } from "react";

import {
  details_1,
  details_2,
  features_smartphone,
  header_smartphones,
  video_frame,
  screenshot_1,
  screenshot_2,
  screenshot_3,
  screenshot_4,
  screenshot_5,
  testimonial_1,
  testimonial_2,
  testimonial_3,
  download_img,
} from "../../assets/images";
import "./home.styles.scss";
import Testimonial from "../../components/testimonial/testimonial.component";
import Footer from "../../components/footer/footer.component";

import GridItem from "../../components/grid_item/grid_item.component";

const Home = () => {
  const testimonialsCard = [
    {
      id: 1,
      imgURL: testimonial_1,
      altText: "Testimonial 1",
      testimonial:
        '"Leno has truly transformed how I manage my time and health. Highly recommended!"',
      testifier: "Samantha Samson",
    },
    {
      id: 2,
      imgURL: testimonial_2,
      altText: "Testimonial 2",
      testimonial:
        '"As a developer, I rely on Leno every day to keep me focused and energized. It\'s a game-changer!"',
      testifier: "Mike Johnson",
    },
    {
      id: 3,
      imgURL: testimonial_3,
      altText: "Testimonial 3",
      testimonial:
        "\"With Leno, I've been able to achieve my goals faster and healthier than ever before. It's a must-have app!\"",
      testifier: "Laney Smith",
    },
  ];

  const handleModalOpen = () => {
    const modal = document.querySelector("#videoModal");
    const videoPlayer = document.querySelector("#videoPlayer");
    modal.style.display = "block";
    videoPlayer.src =
      "https://www.youtube.com/embed/yB2IenqIRL8?si=WAuKw1TtvJ1uR4yJ";
  };

  const handleModalClose = () => {
    const modal = document.querySelector("#videoModal");
    modal.style.display = "none";
    const videoPlayer = document.querySelector("#videoPlayer");
    videoPlayer.src = "";
  };
  // add event listener to window so you can close modal by clicking outside the screen
  useEffect(() => {
    const modal = document.querySelector("#videoModal");
    const videoPlayer = document.querySelector("#videoPlayer");

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <h1 className="hero__title">
              Your
              <span className="hero__title--primary"> productivity</span>{" "}
              assistant
            </h1>
            <p className="hero__description">
              Boost your productivity and improve your health with Leno - the
              all-in-one app for developers and creators.
            </p>
            <div className="hero__buttons">
              <a href="#download" className="hero__button btn">
                <i className="fa-brands fa-apple"></i> For Apple
              </a>
              <a href="#download" className="hero__button btn">
                <i className="fa-brands fa-android"></i> For Android
              </a>
            </div>
          </div>
          <div className="hero__image">
            <img src={header_smartphones} alt="Leno App" />
          </div>
        </div>
      </header>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials__container container">
          {testimonialsCard.map(
            ({ id, imgURL, altText, testimonial, testifier }) => (
              <Testimonial
                key={id}
                imgURL={imgURL}
                altText={altText}
                testimonial={testimonial}
                testifier={testifier}
              />
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="features__container container">
          <div className="features__content">
            <h2 className="features__title">Key Takeaways</h2>
            <p className="features__description">
              Discover the powerful features that make Leno the ultimate
              productivity and health companion:
            </p>
            <div className="features__grid">
              {/* Grid Column 1 */}

              <div className="features__grid-column features__grid-column-left">
                {/* Grid Item 1 */}
                <GridItem
                  title="Real-Time Data"
                  text="Access real-time data instantly, ensuring you're always up-to-date with the latest information."
                  iconClasses="fas fa-rocket fa-4x"
                />
                {/* Grid Item 2 */}
                <GridItem
                  title="Visual Editor"
                  text="Customize your workspace with our intuitive visual editor."
                  iconClasses="fas fa-code fa-4x"
                />

                {/* Grid Item 3 */}
                <GridItem
                  title="Refined Options"
                  text="Access a wide range of refined options to tailor Leno to your unique needs."
                  iconClasses="fas fa-gem fa-4x"
                />
              </div>

              {/* Grid Column 2 */}
              <div className="features__grid-column features__grid-column-center">
                <img src={features_smartphone} alt="" />
              </div>

              {/* Grid Column 3 */}
              <div className="features__grid-column features__grid-column-right">
                {/* Grid Item 1 */}
                <GridItem
                  title="Calendar Input"
                  text="Seamlessly integrate your calendar to stay organized and on track."
                  iconClasses="fas fa-calendar fa-4x"
                />
                {/* Grid Item 2 */}
                <GridItem
                  title="Easy Reading"
                  text="Enjoy distraction-free reading with Leno's clean and intuitive interface."
                  iconClasses="fas fa-book fa-4x"
                />
                {/* Grid Item 3 */}
                <GridItem
                  title="Good Foundation"
                  text="Leno is built on a solid foundation of user feedback and cutting-edge technology."
                  iconClasses="fas fa-cube fa-4x"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className="modal" id="videoModal">
        <div className="modal__content">
          <span onClick={handleModalClose} className="modal__close-button">
            &times;
          </span>
          <iframe
            title="vid"
            src=""
            frameborder="0"
            id="videoPlayer"
            width="560"
            height="315"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* Preview */}
      <section className="preview" id="preview">
        <div className="preview__container container">
          <div className="preview__content">
            <h2 className="preview__title">Preview</h2>
            <p className="preview__description">
              Take a sneak peek at Leno's sleek and intuitive interface:
            </p>
            <div className="preview__image-container">
              <div className="preview__video-wrapper">
                <img src={video_frame} alt="preview" />
                <button
                  onClick={handleModalOpen}
                  className="preview__video-button"
                >
                  <span className="preview__video-play-button">
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="details" id="details">
        <div className="details__container container">
          <div className="details__grid">
            {/* Grid Item 1 */}
            <div className="details__grid-image">
              <img src={details_1} alt="Leno App" />
            </div>
            {/* Grid Item 2 */}
            <div className="details__grid-content">
              <h3 className="details__grid-heading">
                Start using Leno today and set your long term goals
              </h3>
              <p className="details__grid-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, consequuntur? Sint nostrum temporibus eum laudantium,
                quaerat voluptates officia modi perspiciatis!
              </p>
              <a href="/details" className="details__grid-button btn">
                More
              </a>
            </div>
            {/* Grid Item 3 */}
            <div className="details__grid-content">
              <h3 className="details__grid-heading">
                The calendar feature helps you schedule tasks
              </h3>
              <p className="details__grid-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, consequuntur? Sint nostrum temporibus eum laudantium,
                quaerat voluptates officia modi perspiciatis!
              </p>
              <a href="/details" className="details__grid-button btn">
                More
              </a>
            </div>
            {/* Grid Item 4 */}
            <div className="details__grid-image">
              <img src={details_2} alt="Leno App" />
            </div>
          </div>

          {/* Icons */}
          <div className="details__icons">
            <div className="details__icons-item">
              <i className="fas fa-users fa-4x"></i>
              <div className="details__icons-amount">55, 000</div>
              <h4 className="details__icons-title">Happy Customers</h4>
            </div>
            <div className="details__icons-item">
              <i className="fas fa-code fa-4x"></i>
              <div className="details__icons-amount">585</div>
              <h4 className="details__icons-title">Issues Solved</h4>
            </div>
            <div className="details__icons-item">
              <i className="fas fa-comments fa-4x"></i>
              <div className="details__icons-amount">788</div>
              <h4 className="details__icons-title">Good Reviews</h4>
            </div>
            <div className="details__icons-item">
              <i className="fas fa-rocket fa-4x"></i>
              <div className="details__icons-amount">100</div>
              <h4 className="details__icons-title">Case Studies</h4>
            </div>
            <div className="details__icons-item">
              <i className="fas fa-edit fa-4x"></i>
              <div className="details__icons-amount">110</div>
              <h4 className="details__icons-title">Press Article</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="screenshots" id="screenshots">
        <section className="screenshots" id="screenshots">
          <div className="screenshots__container container">
            <div className="screenshots__content">
              <h2 className="screenshots__title">Screenshots</h2>
              <div className="screenshots__images">
                <img src={screenshot_1} alt="Screenshot" />
                <img src={screenshot_2} alt="Screenshot" />
                <img src={screenshot_3} alt="Screenshot" />
                <img src={screenshot_4} alt="Screenshot" />
                <img src={screenshot_5} alt="Screenshot" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Download */}
      <section className="download" id="download">
        <div className="download__container container">
          <div className="download__content">
            <p className="download__description">
              Download Leno today to see the benefits and enjoy the results
              faster than any other app out there
            </p>
            <div className="download__buttons">
              <a href="/details" className="download__button btn">
                <i className="fa-brands fa-apple"></i> For Apple
              </a>
              <a href="/details" className="download__button btn">
                <i className="fa-brands fa-android"></i> For Android
              </a>
            </div>
          </div>
          <div className="download__image">
            <img src={download_img} alt="Download" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
