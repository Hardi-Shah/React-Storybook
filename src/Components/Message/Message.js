import React from 'react';
import './Message.css'

const Message = ({author, body, date}) => (
    <div className="message-item">
        <div className="author">{author}</div>
        <div className="body">{body}</div>
        <div className="date">{date}</div>
    </div>
);

export default Message;