import React, {useState, useEffect} from 'react';
import Message from '../Message/Message';

const MessagesList = () => {
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch('/Messages')
            .then(res => res.json())
            .then(data => setMessage(data.Messages));
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message) => <Message key={message.body} {...message} />)}
        </div>
    )
};

export default MessagesList;