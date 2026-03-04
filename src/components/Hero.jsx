import React from 'react';

function Hero() {
  return (
    <div className="heroCard">
      <div className="heroGrid">
        {/* Left Column */}
        <div className="heroContent">
          {/* Headline */}
          <h1 className="heroTitle">
            Talk.<br />
            Walk.<br />
            <span className="textOrange">Create.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="heroBody">
            Via is a mobile IDE for real software work. Open a repository, make changes, review, and ship from your phone.
          </p>

          {/* Actions */}
          <div className="ctaRow">
            <button className="btn btn-primary">
              Join waitlist
              <span className="icon">→</span>
            </button>
            <a href="#" className="linkMore">Read more</a>
          </div>
        </div>

        {/* Right Column - Mock Window */}
        <div className="heroArt">
          <div className="mock-window">
            {/* Window controls */}
            <div className="window-controls">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>

            {/* Mock content area */}
            <div className="mock-content">
              <div className="code-lines">
                <div className="code-line line-1"></div>
                <div className="code-line line-2"></div>
                <div className="code-line line-3"></div>
                <div className="code-line line-4"></div>
                <div className="code-line line-5"></div>
              </div>
              <div className="status-strip">
                <div className="status-group">
                  <span className="dot dot-green"></span>
                  <span>Live coding flow</span>
                </div>
                <span className="flow-breadcrumb">Prompt → Code change → Review → Commit → Ship</span>
              </div>
            </div>

            {/* Callout Card 1 - Task */}
            <div className="card-task">
              <span className="dot-dot dot-orange"></span>
              <div>
                <div className="card-label">Task</div>
                <div className="card-text">"Refactor auth middleware"</div>
              </div>
            </div>

            {/* Callout Card 2 - Ready to ship */}
            <div className="card-ready">
              <div className="card-header">
                <span className="dot dot-green"></span>
                <span className="card-status">Ready to ship</span>
              </div>
              <div className="card-desc">3 files changed, tests passed.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;