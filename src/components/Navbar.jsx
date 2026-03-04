import React from 'react';

function Navbar() {
  return (
    <header className="topbar">
      <div className="left">
        <a className="brand" href="/">VIA</a>
        <a className="btn btn-invite" href="/invite">Get invite</a>
      </div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Waitlist</a>
        <a href="#">Blog</a>
      </nav>
    </header>
  );
}

export default Navbar;