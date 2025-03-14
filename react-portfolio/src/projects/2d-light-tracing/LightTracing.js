import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LightTracing = () => {
  // const canvasRef = useRef(null);

  useEffect(() => {
    // const canvas = canvasRef.current;
    // const context = canvas.getContext('2d');
    
    // Initialize your 2D light tracing logic here
    // Example: Clear canvas and set a background
    // context.fillStyle = "#000";
    // context.fillRect(0, 0, canvas.width, canvas.height);

    // Insert your drawing / light tracing logic
  }, []);

  return (
    <div>
      <h1>2D Light Tracing</h1>
      {/* Navigation Menu */}
      <nav style={{ padding: '1rem', background: '#333' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li>
            <Link to="/ballpassgame" style={{ color: '#fff', textDecoration: 'none' }}>
              Ball Pass Game
            </Link>
          </li>
          {/* <li>
            <Link to="/lighttracing" style={{ color: '#fff', textDecoration: 'none' }}>
              2D Light Tracing
            </Link>
          </li>
          <li>
            <Link to="/other" style={{ color: '#fff', textDecoration: 'none' }}>
              Other Projects
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* <canvas ref={canvasRef} width={1920} height={800} /> */}
    </div>
  );
};

export default LightTracing;
