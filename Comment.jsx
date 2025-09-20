import React from 'react';
 function Comment(props) {
   const { comment } = props;
   return (
     <div style={{ margin: '5px', padding: '5px', backgroundColor: '#f0f0f0' }}>
       <p>{comment.text}</p>
       <p style={{ fontSize: '0.8em', color: '#777' }}>- {comment.author}</p>
     </div>
   );
 }
 export default Comment;