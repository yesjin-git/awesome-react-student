import React from "react";
import PropTypes from "prop-types";

// const Note = ({ title, content }) => {
//   return (
//     <div className="col s12 m6 l4">
//       <div className="card teal lighten-2">
//         <h5 className="card-content white-text">{title}</h5>
//         <div className="card-content white-text">{content}</div>
//       </div>
//     </div>
//   );
// };

function Note({ title, content }) {
  return (
    <div className="Note col s12 m6 l4">
      <div className="card light-green darken-3">
        <h5 className="card-content white-text">{title}</h5>
        <div className="card-content white-text">{content}</div>
      </div>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Note;
