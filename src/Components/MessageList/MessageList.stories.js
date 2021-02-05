import React from 'react';
import Message from './MessageList';

import fetchMock from "fetch-mock";
import Messages from '../Data/Messages';

fetchMock.get('/Messages', Messages);

export default {
  title: 'Messages',
  component: Message
};

export const ToStorybook = () => <Message  />;

ToStorybook.story = {
  name: 'Messages list',
};