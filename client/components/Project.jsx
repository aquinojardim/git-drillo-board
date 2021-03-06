/**
 * @module  Project
 * @author Jonathan
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders each project info
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Project (props) {
  const {id, repo, isOwner } = props.projectInformation
  let projectStyling = {};
  if (isOwner) {
    projectStyling = { border: 'thin solid blue' }
  } else {
    projectStyling = {  }
  }

  return(
    <div className="individualProject" style={projectStyling} project={id}>
      <Link to={`project-board/${repo}`}> {repo} </Link>
    </div>
  );
}

export default Project;