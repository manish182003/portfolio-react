import "./Skill.css";
import uiDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled and passionate app developer with expirence in developing
        cross platform mobile apps with flutter and have little bit knowledge of
        Deep Learning.I am currently knowledge of CNN and learning other parts
        of deep learning.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Cross Platform Development</h2>
            <p>I have Devloped many apps for my clients like Quiz App,etc.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              I have knowledge of React js to create fully responsive website.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Deep Learning</h2>
            <p>
              Currently I am in learning phase of deep learning where I have
              knowledge of CNN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
