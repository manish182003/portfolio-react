import "./Intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="IntroName">Manish</span>
          <br />
          Flutter Developer
        </span>
        <p className="intro-para">
          I am a skilled Flutter Developer with experience in developing <br />
          cross platform mobile applications with user friendly interfaces.
        </p>
        <Link to="">
          <button className="btn">
            <img className="btnImg" src={btnImg} alt="Hire Me" />
            Hire Me
          </button>
        </Link>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
