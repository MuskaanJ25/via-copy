import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page-bg">
      <div className="page-container">
        {/* Faux browser header */}
        <div className="browser-header">
          <span className="browser-url">via.dev</span>
        </div>

        {/* Nav pill */}
        <div className="header-pill">
          <div className="logo">ViA</div>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Hero Card */}
        <div className="hero-card">
          <h1 className="hero-title">
            Talk.<br />
            Walk.<br />
            <span className="accent">Create.</span>
          </h1>
          <p className="hero-desc">
            Via is a mobile IDE for real software work.<br />
            Open a repository, make changes, review,<br />
            and ship from your phone.
          </p>
          <div className="cta-row">
            <button className="btn-primary">
              Join waitlist
              <span className="icon">→</span>
            </button>
            <a href="#" className="link-secondary">Read more</a>
          </div>

          {/* Window mock */}
          <div className="window-mock">
            <div className="traffic-lights">
              <span className="light red"></span>
              <span className="light yellow"></span>
              <span className="light green"></span>
            </div>
            <div className="inner">
              <div className="large-text">
                Empowering<br />
                <span className="blue-text">Developers</span><br />
                with Instant, Intelligent<br />
                Code.
              </div>
              <div className="info-pill">
                <span className="dot"></span>
                <div className="info-text">
                  <div className="info-title">Live coding flow</div>
                  <div className="info-subtitle">Prompt → Code change → Review → Commit → Ship</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature">
            <h3>Intent-first workflow</h3>
            <p>Describe what you want and focus on the outcome, not file-by-file edits.</p>
          </div>
          <div className="feature">
            <h3>GitHub-native execution</h3>
            <p>Work in existing repositories with clean diffs and straightforward review.</p>
          </div>
          <div className="feature">
            <h3>Mobile full-stack shipping</h3>
            <p>Frontend, backend, and infra workflows from one mobile workspace.</p>
          </div>
        </div>

        {/* Blog Card */}
        <div className="blog-card">
          <div className="blog-header">
            <div className="blog-header-left">
              <div className="blog-eyebrow">BLOG</div>
              <h2 className="blog-title">From the Blog</h2>
            </div>
            <a href="#" className="blog-link">All posts →</a>
          </div>

          <div className="blog-posts">
            <div className="blog-post">
              <div className="post-meta">January 23, 2026  •  Via Team</div>
              <h3 className="post-title">The Future of Autonomous Software Engineering</h3>
              <p className="post-excerpt">
                Exploring how AI is transforming the way we build and ship software at scale, and why accuracy matters more than speed.
              </p>
              <div className="post-divider"></div>
            </div>

            <div className="blog-post">
              <div className="post-meta">December 16, 2025  •  Ila Mathur and Shray Alag</div>
              <h3 className="post-title">Our Mission</h3>
              <p className="post-excerpt">
                The new age of programming is ruled by ideas, not IDEs. Via exists to make software creation mobile, intent-first, and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;