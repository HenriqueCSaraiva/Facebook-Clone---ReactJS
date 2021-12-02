import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://www.giantbomb.com/a/uploads/square_medium/15/151174/2194850-ed_177_animestocks_com_.jpg"
        message="I love this picture!"
        timestamp="this is a timestamp"
        username="Edward Elric"
        image="https://pa1.narvii.com/6435/bb74727262ca482f9da57cd73bf1e0167161495d_hq.gif"
      />
      
      <Post
        profilePic="https://cosmonerd.com.br/wp-content/webp-express/webp-images/doc-root//uploads/2020/01/obi-wan.jpg.webp"
        message="The truth is often what we make of it; you heard what you wanted to hear, believed what you wanted to believe."
        timestamp="this is a timestamp"
        username="Obi-Wan/ Ben Kenobi"
      />

      <Post
        profilePic="https://www.figurerealm.com/userimages/characterprofiles/3000/2781-1-56ee658c4c4e9.jpg"
        message="Wow this works!"
        timestamp="this is a timestamp"
        username="Frodo Baggins"
        image="https://media.makeameme.org/created/it-works-it-5bff9f.jpg"
      />
    </div>
  );
}

export default Feed;
