import "../styles/css/Extra.css";

function Extra(props) {
  return (
    <div className="Extra card">
      <h2 className="headerStrip">Extracurricula Activities</h2>
      <div className="content">
        <div className="job">
          <div className="title">Volunteer work for Sea Cadets</div>
          <div className="content">(Led lessons and supervised cadets trips)</div>
        </div>
        <div className="job">
          <div className="title">Gold Duke of Edinburgh Award</div>
          <div className="content">(Expedition across Royal National Park, Sydney)</div>
        </div>
        <div className="job">
          <div className="title">Three Peaks Challenge UK</div>
          <div className="content">(Climbed UK’s three highest peaks in three days)</div>
        </div>
        <div className="job">
          <div className="title">Travelling Australasia and Asia</div>
        </div>
        <div className="job">
          <div className="title">Wild camping across the Outer Hebrides</div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
