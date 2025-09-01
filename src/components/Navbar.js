import React, { useState } from "react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    updateExpanded(false);
  };

  return (
    <header className={`header ${navColour ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        <div className="logowrapper">
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Blake Zhou</span>
        </div>

        <nav style={{ display: expand ? 'none' : 'block' }}>
          <ul className="nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li>
              <button
                onClick={() => scrollToSection('home')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('capabilities')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Capabilities
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-color)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button
          className={`menubutton ${expand ? 'animate' : ''}`}
          onClick={() => updateExpanded(!expand)}
          style={{
            display: expand ? 'block' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span className={`menubutton__line ${expand ? 'animate' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {expand && (
        <div className="mobile-nav" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 40,
          paddingTop: '100px'
        }}>
          <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('capabilities')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.25rem',
                    color: 'var(--primary-color)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
