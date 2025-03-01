import React, { useEffect, useRef } from "react";
import "./about.css";

function About() {
  const mainImgRef = useRef(null);
  const hoverImgsRef = useRef([]);

  useEffect(() => {
    const mainImg = mainImgRef.current;

    const handleMouseOver = (event) => {
      if (mainImg) {
        mainImg.src = event.target.src;
      }
    };

    const handleMouseLeave = () => {
      if (mainImg) {
        mainImg.src = "../img/whitesandNM.png"; // Reset to default
      }
    };

    // Attach event listeners
    hoverImgsRef.current.forEach((img) => {
      img.addEventListener("mouseover", handleMouseOver);
      img.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      hoverImgsRef.current.forEach((img) => {
        img.removeEventListener("mouseover", handleMouseOver);
        img.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section name="about" className="section-about">
      <div className="about-flex-box">
        <div className="about-img-grid">
          {/* Main Image */}
          <img
            ref={mainImgRef}
            id="main-img"
            className="profile-img main-img"
            src="../img/whitesandNM.png"
            alt="selfportrait"
          />

          {/* Side Images */}
          {[
            "glacier.jpeg",
            "goldengate.jpeg",
            "jeju.jpeg",
            "rome.jpeg",
            
          ].map((img, index) => (
            <img
              key={index}
              ref={(el) => (hoverImgsRef.current[index] = el)}
              className="profile-img"
              src={`../img/${img}`}
              alt="selfportrait"
            />
          ))}
        </div>

        <div className="introducing-content">
          <h2>About me:</h2>
          <p>
            I'm at the start of my journey, learning new skills every day to
            bring innovative ideas to life on the web. I am passionate about
            creating functional and useful websites. I also enjoy solving
            complex problems to turn something great. My goal is to continue
            improving my skills and contribute to meaningful projects. When I'm
            not coding, you'll find me practicing yoga, meditating, or exploring
            the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
