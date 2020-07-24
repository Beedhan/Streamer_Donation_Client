import React from 'react'

const LandingNav = () => {
    return (
  <nav>
  <div className="nav-wrapper landingNav">
    <a href="/" className="brand-logo logo-large hide-on-med-and-down">StreamerGems</a>
    <a href="/" className="brand-logo hide-on-large-only">StreamerGems</a>
    <ul id="nav-mobile " className="right hide-on-med-and-down">
      <li><a href="learn">Learn</a></li>
      <li><a href="login">Login</a></li>
    </ul>
  </div>
</nav>
    )
}

export default LandingNav
