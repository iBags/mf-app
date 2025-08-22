import React from 'react'
import ReactDOM from 'react-dom'

const mount = (el) => {
  ReactDOM.render(
    <h1>Hello from Marketing</h1>,
    el
  );
}

// Mount function to start up the app


// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_dev-marketing-root');

  if(el) {
    mount(el);
  }
}


// We are running through container
// and we should export the mount function
export { mount };