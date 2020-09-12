import React from "react";
import "../css/ProjectSlider.scss";

const ProjectSlider = (props) => {
  return (
    <div>
      <div className="content-heading">
        <h1>Projects</h1>
        <p>List of projects from SagiPinas</p>
      </div>

      <div className="projects-slider">
        <div
          className="project-card"
          style={{
            background: `linear-gradient(rgba(3, 16, 22, 0.13), rgba(10, 3, 36, 0.966))
            center,
          url("https://mist.now.sh/mist/v1-app.png")`,
            backgroundSize: "cover",
          }}
        >
          <div className="project-info">
            <div className="info">
              <h3>SagiPinas / v1</h3>
              <p>Disaster Risk Reponse platform</p>
            </div>
            <i className="la la-chevron-circle-right" />
          </div>
        </div>

        <div
          className="project-card"
          style={{
            background: `linear-gradient(rgba(3, 16, 22, 0.13), rgba(10, 3, 36, 0.966))
            center,
          url("https://seantinel-demo-blue.vercel.app/dashboard.png")`,
            backgroundSize: "cover",
          }}
        >
          <div className="project-info">
            <div className="info">
              <h3>Seantinel</h3>
              <p>Open Network platform monitoring municipal fishing areas</p>
            </div>
            <i className="la la-chevron-circle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
