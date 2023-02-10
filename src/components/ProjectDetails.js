/* eslint-disable react/jsx-no-target-blank */
const ProjectDetails = ({ prop, isReverse }) => {
  return (
    <div className={+isReverse ? "container containerReverse" : "container"}>
      <div className="img">
        <img src={prop.img} alt="" />
      </div>
      <div className="details">
        <h3>{prop.name}</h3>
        {/* <a href="http://shillong-choice.herokuapp.com/" target="_blank">
          LAxman
        </a> */}
        <span>{prop.details}</span>
        <span>Technology Used: {prop.techUsed} </span>
        <div className="button">
          <a href={prop.gitUrl} target="_blank">
            <button>Code</button>
          </a>
          {prop.liveUrl ? (
            <a href={prop.liveUrl} target="_blank">
              <button>Live</button>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
