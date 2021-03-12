import React, { useState, useEffect } from "react";
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos')
          .onSnapshot((snapshot) => 
          setVideos(snapshot.docs.map((doc) => doc.data()))
      );

      // console.log(videos);
      
  }, [videos])

  return (
    <div className="app">
      <h5>Let's build a tiktok clone </h5>
      <div class="app__videos">
        {videos.map(
            ({ id, url, channel, description, song, likes, messages, shares }) => (
              <Video
                key={id}
                url={url}
                channel={channel}
                song={song}
                likes={likes}
                messages={messages}
                description={description}
                shares={shares}
              />
            )
          )}
      </div>
    </div>
  );
}

export default App;
