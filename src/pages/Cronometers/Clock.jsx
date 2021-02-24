import React from 'react';
import { Media } from 'reactstrap';
import './Cronometers.css';

export default function Clock(props) {
  const {
    clock: { author, gitHubId, url, photo },
  } = props;
  return (
    <div className="container d-flex justify-content-center">
      <Media href={url} target="_blank">
        <Media left>
          <div className="image-cropper">
            <img className="profile-pic" src={photo} alt={author} />
          </div>
          {gitHubId}
        </Media>
        <Media body className="container-fluid">
          <Media heading>{author}</Media>
        </Media>
      </Media>
    </div>
  );
}
