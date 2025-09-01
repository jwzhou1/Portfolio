import React from "react";

function Pre(props) {
  if (!props.load) return null;

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#4b5563', fontWeight: '500' }}>Loading...</p>
      </div>
    </div>
  );
}

export default Pre;
