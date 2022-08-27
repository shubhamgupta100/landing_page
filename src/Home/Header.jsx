import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>MakeOurApp</span>
          </a>
          <span>MakeOurApp</span>
        </h1>
      </div>
    </header>
  );
}
