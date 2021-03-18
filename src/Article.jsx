import React from 'react';
import LikeButton from "./LikeButton";

// Function Componentの書き方
// stateの取得　子コンポーネントで参照したい場合はpropsとして渡す

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlfor="check">公開状態:</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()}/>
      <LikeButton count={props.count}/>
    </div>
  )
};

export default Article