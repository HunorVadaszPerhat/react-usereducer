import './App.css';
import React from 'react';
// import Post from './components/usestate/post/Post';
// import Post from './components/usereducer/post/Post';
import Form from './components/usestate/forms/Form';
import FormReducer from './components/usereducer/post/FormReducer';

function App() {
  return (
      <React.Fragment> 
        {/* <Post/> */}
        {/* <Post/> */}
        {/* <Form/> */}
        <FormReducer/>
      </React.Fragment>
  );
}

export default App;
