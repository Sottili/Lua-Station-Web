// React //
import React, { useState, useEffect } from "react";

// React Router DOM
import { useParams } from "react-router-dom";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../../services/configFirebase";

const PostDetails = () => {
  const { key } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const db = getDatabase(app);

    const postRef = ref(db, "Services");
    onValue(postRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      const postActually = postList.find((item) => item.idProject === key);
      setPost(postActually);
    });
  }, [key]);

  return (
    <>
      <div>
        <h1>oi</h1>
        <h1>{post.idProject}</h1>
        <h2>{post.descProject}</h2>
      </div>
    </>
  );
};

export default PostDetails;
