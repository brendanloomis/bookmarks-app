import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BookmarkItem from './BookmarkItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '1234',
    title: 'title',
    url: 'https://www.test.com',
    description: 'test',
    rating: 1
  };
  ReactDOM.render(
    <BrowserRouter>
      <BookmarkItem {...props}/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
