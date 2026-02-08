import { useState, useEffect } from "react";
import "./index.css";

export function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true);
    }, 1000); // Delay for the "boot-up" effect
    return () => clearTimeout(timer);
  }, []);

  const handleNoHover = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    setNoButtonStyle({ position: 'absolute', left: `${x}px`, top: `${y}px`, transition: 'all 0.3s ease' });
  };

  if (yesClicked) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-green-400 font-mono">
        <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-8 border-2 border-green-400">
          <h1 className="text-2xl mb-4">&gt; Mission Accomplished!</h1>
          <pre className="text-lg whitespace-pre-wrap">
            {
`
  _   _   _   _   _   _   _   _   _   _  
 / \ / \ / \ / \ / \ / \ / \ / \ / \ / \
( T | h | a | n | k |   | Y | o | u | ! )
 \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/

Connection established.
Valentine protocol 1.4.3 activated.
Heart-to-heart link synchronized.

Welcome to my heart, Valentine! ❤️
            `}
          </pre>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Cute hug" className="h-48 mx-auto mt-8 rounded-lg border-2 border-green-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-400 font-mono">
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-8 border-2 border-green-400">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">/bin/bash</span>
        </div>
        <div className="mt-4">
          <p>&gt; Initiating valentine_request.sh...</p>
          <p>&gt; Granting permissions...</p>
          <p>&gt; Executing...</p>
          {showQuestion && (
            <div className="mt-8 typewriter">
              <h1 className="text-3xl">Will you be my Valentine?</h1>
              <div className="flex gap-4 mt-8">
                <button
                  className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
                  onClick={() => setYesClicked(true)}
                >
                  &gt; Yes
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded"
                  style={noButtonStyle}
                  onMouseOver={handleNoHover}
                >
                  &gt; No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
