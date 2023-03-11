import './style.css';

import React from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';

import { socialprofils } from '../../content_option';

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
