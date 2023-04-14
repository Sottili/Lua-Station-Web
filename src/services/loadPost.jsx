import { useState, useEffect } from "react";

import { PostCard } from "../components/PostCard";

// Firebase //
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "./configFirebase";

export default function PostList() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    const db = getDatabase(app);

    const postRef = ref(db, "Services");
    onValue(postRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      setPostList(postList);
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {postList
        ? postList.map((data) => (
            <PostCard
              title={data.nameProject}
              body={data.descProject}
              platform={data.platform}
              deadline={data.deadline}
              id={data.idProject}
              key={data.idProject}
              price={data.price}
            />
          ))
        : ""}
    </div>
  );
}
