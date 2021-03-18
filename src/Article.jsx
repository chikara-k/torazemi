import React, {useState} from 'react';
import LikeButton from "./LikeButton";

// Function Componentの書き方
// stateの取得　子コンポーネントで参照したい場合はpropsとして渡す
// React HooksでFunctional component内でもstateを使えるようになった

const Article = (props) => {
  const[isPublished, togglePublished] = useState(false)

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlfor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
      <LikeButton />
    </div>
  )
};

export default Article