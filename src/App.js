import React from "react";
import Grid from '@mui/material/Grid';

import PostList from './features/PostList/PostList';
import SubredditList from "./features/SubredditList/SubredditList";
import "./App.css";
import Header from './features/Header/Header';



const App = () => {

  return (
    <div className="root">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={6}>
          <PostList />
        </Grid>
        <Grid item xs={2}>
          <SubredditList />
        </Grid>
        <Grid item xs={2}/>
      </Grid >
    </div>
  )
};

export default App;
