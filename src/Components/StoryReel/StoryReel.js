import React, { useState, useEffect } from "react";
import Story from "../Story/Story";
import "./StoryReel.css";
import db from "../../firebase";

function StoryReel() {
  const [storys, setStory] = useState([]);

  useEffect(() => {
    db.collection("storyReel").onSnapshot((snapshot) => {
      setStory(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="storyReel">
      {storys.map((story) => (
        <Story
          key={story.data.id}
          image={story.data.image}
          profileSrc={story.data.profileSrc}
          title={story.data.title}
        />
      ))}
    </div>
  );
}

export default StoryReel;
