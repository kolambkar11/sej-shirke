import React from "react";
const Achievements = ({ resume }) => {
  console.log(resume.resumeData);
  return (
    <>
      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
          <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Achievements
        </h2>
        {resume.resumeData.profile.achievements.map((edu, i) => {
          return (
            <>
              <div className="w3-container" data-aos="fade-up">
                <h6 className="w3-text-blue-grey">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  {edu.title} - {edu.year}
                </h6>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Achievements;
