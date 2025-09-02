import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={{
      padding: '4rem 0',
      background: 'white'
    }}>
      <div className="container">

        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '2rem'
          }}>Get in touch</h3>

          {/* Contact Info in one line */}
          <div className="contact-info" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <p style={{ color: '#4b5563', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Email</p>
              <a
                href="mailto:zhou.jiaw@northeastern.edu"
                style={{
                  color: 'var(--primary-color)',
                  fontWeight: '500',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                zhou.jiaw@northeastern.edu
              </a>
            </div>
            <div>
              <p style={{ color: '#4b5563', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Location</p>
              <p style={{ color: '#1f2937', fontSize: '1rem' }}>Vancouver, Canada</p>
            </div>
          </div>

          {/* Social Links - Centered */}
          <div>
            <ul className="social-links" style={{
              display: 'flex',
              gap: '1.5rem',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              justifyContent: 'center'
            }}>
              <li>
                <a
                  href="https://github.com/jwzhou1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <AiFillGithub style={{ fontSize: '1.25rem', color: '#374151' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/blake-zhou-b50952302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none'
                  }}
                >
                  <FaLinkedinIn style={{ fontSize: '1.25rem', color: '#2563eb' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
