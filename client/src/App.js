import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

function App() {
  const [overlays, setOverlays] = useState([]);
  
  useEffect(() => {
    // Fetch overlay settings from the Flask API
    axios.get('http://localhost:5000/overlays')
      .then((response) => setOverlays(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Livestream Application</h1>
      </header>
      <div>
        <ReactPlayer
          url="your_rtsp_url_here"
          playing={true}
          controls={true}
          volume={0.5}
          width="100%"
          height="auto"
        />
      </div>
      <div>
        {/* Overlay management component */}
        {overlays.map((overlay, index) => (
          <div key={index}>
            {/* Render overlay content with position and size */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
