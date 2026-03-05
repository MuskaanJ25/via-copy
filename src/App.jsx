import React from 'react'

const App = () => {
  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav__inner">
          <img
            src="/assets/via-mark.svg"
            alt="Via"
            className="nav__logo"
          />
          <button className="nav__menu-btn" aria-label="Menu">
            <svg
              className="nav__menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Card */}
      <div className="heroCard">
        <h1 className="heroTitle">
          Talk.
          <br />
          Walk.
          <br />
          Create<span className="accent">.</span>
        </h1>

        <p className="heroDesc">
          Via is a mobile IDE for real software work. Open a repository, make changes, review, and ship from your phone.
        </p>

        <div className="heroCtas">
          <a href="#" className="btnPrimary">
            Join waitlist
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="linkSecondary">
            Read more
          </a>
        </div>

        {/* Window Mock */}
        <div className="heroMockWrapper">
          <div className="mockWindow">
            <div className="mockWindow__chrome">
              <div className="dot dot--red"></div>
              <div className="dot dot--yellow"></div>
              <div className="dot dot--green"></div>
            </div>
            <div className="mockWindow__content">
              <div className="mockWindow__watermark">
                <span className="dimmed">Empowering </span>
                <span className="highlight">Developers</span>
                <span className="dimmed"> with Instant, Intelligent Code.</span>
              </div>
              <div className="flowCard">
                <div className="flowCard__dot"></div>
                <div className="flowCard__content">
                  <div className="flowCard__title">Live coding flow</div>
                  <div className="flowCard__text">
                    Prompt → Code change → Review → Commit → Ship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="featuresSection">
        <div className="featureItem">
          <h2 className="featureTitle">Intent-first workflow</h2>
          <p className="featureDesc">
            Describe what you want and focus on the outcome, not file-by-file edits.
          </p>
        </div>

        <div className="featureItem">
          <h2 className="featureTitle">GitHub-native execution</h2>
          <p className="featureDesc">
            Work in existing repositories with clean diffs and straightforward review.
          </p>
        </div>

        <div className="featureItem">
          <h2 className="featureTitle">Mobile full-stack shipping</h2>
          <p className="featureDesc">
            Frontend, backend, and infra workflows from one mobile workspace.
          </p>
        </div>
      </section>

      {/* Blog Card */}
      <div className="blogCard">
        <div className="blogHeader">
          <div className="blogHeader__left">
            <div className="blogLabel">Blog</div>
            <h2 className="blogTitle">From the Blog</h2>
          </div>
          <div className="blogHeader__right">
            <a href="#" className="blogLink">
              All posts
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="blogPost">
          <div className="blogMeta">January 23, 2026  •  Via Team</div>
          <h3 className="blogPostTitle">The Future of Autonomous Software Engineering</h3>
          <p className="blogPostExcerpt">
            Exploring how AI is transforming the way we build and ship software at scale, and why accuracy matters more than speed.
          </p>
        </div>

        <div className="postDivider"></div>

        <div className="blogPost">
          <div className="blogMeta">December 16, 2025  •  Ila Mathur and Shray Alag</div>
          <h3 className="blogPostTitle">Our Mission</h3>
          <p className="blogPostExcerpt">
            The new age of programming is ruled by ideas, not IDEs. Via exists to make software creation mobile, intent-first, and accessible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App