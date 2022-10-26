import React, {useReducer} from 'react';
import { ACTION_TYPES } from "../action/postActionTypes";
import { INITIAL_STATE, postReducer } from "../reducer/postReducer";

function Post() {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };
    return (
        <React.Fragment>
            <h1>Post</h1>    
            <div>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error && "Something went wrong!"}</span>
            </div>
        </React.Fragment>
    )
}

export default Post