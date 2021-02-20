/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable more/no-window */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Media } from 'reactstrap';
import './Cronometers.css';

export default function Clock(props) {
  const {
    clock: { author, gitHubId, github, url, photo },
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
