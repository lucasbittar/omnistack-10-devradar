import React from 'react';

import './style.css';

function DevItem(props) {
  const { dev } = props;
  const firstName = dev.name ? dev.name.split(' ')[0] : 'User';
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        {firstName}'s Github Page
      </a>
    </li>
  );
}

export default DevItem;
