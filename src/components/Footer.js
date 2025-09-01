import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{
      background: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '4rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Blake Zhou
            </h3>
            <p style={{
              color: '#4b5563',
              fontSize: '0.875rem'
            }}>
              Vancouver, Canada
            </p>
          </div>

          <div className="footer-right" style={{ textAlign: 'right' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '1rem'
            }}>
              <a
                href="https://github.com/jwzhou1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b5563',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                <AiFillGithub style={{ fontSize: '1.25rem' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/blake-zhou-b50952302/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b5563',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                <FaLinkedinIn style={{ fontSize: '1.25rem' }} />
              </a>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              © 2025 Blake Zhou
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
