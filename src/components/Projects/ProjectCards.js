import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="card hover-lift" style={{
      background: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={props.imgPath}
          alt={props.title}
          style={{
            width: '100%',
            height: '16rem',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      <div style={{ padding: '2rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          {props.title}
        </h3>

        <p style={{
          color: '#4b5563',
          marginBottom: '1.5rem',
          lineHeight: '1.625'
        }}>
          {props.description}
        </p>

        {/* Tags */}
        {props.tags && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            {props.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  fontSize: '0.875rem',
                  borderRadius: '9999px'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: '#1f2937',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease'
            }}
          >
            <BsGithub style={{ marginRight: '0.5rem' }} />
            {props.isBlog ? "View Paper" : "View Code"}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                border: '1px solid #d1d5db',
                color: '#374151',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease'
              }}
            >
              <CgWebsite style={{ marginRight: '0.5rem' }} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
