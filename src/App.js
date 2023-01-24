import React,{useEffect} from 'react';

import { fetchMusicThunk } from './redux/ducks/music';
import {useSelector, useDispatch} from 'react-redux'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import Spinner from './components/Spinner.js'

import MusicList from './components/MusicList';
import Paginate from './components/Paginate'
import Layout from './components/Layout'
import styled from 'styled-components'

function App() {
  
  const dispatch = useDispatch();

  
  const musics = useSelector(store=>store.musics);
  const downloaded = useSelector(store=>store.downloaded);
  const mylist = useSelector(store=> store.mylist);



  useEffect(()=>{
    dispatch(fetchMusicThunk())
  },[dispatch]);
  

  return (
    <AppWrapper className="App">
     
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={downloaded===false? <Spinner/> : <Paginate musics={musics} downloaded={downloaded}/>}></Route>
            <Route path='/lista' element={ <MusicList musics={mylist} />}></Route>
          </Routes>
        </Layout>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper= styled.div`
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;


.fa:hover{
    color:#1AD2FB;
}

position:relative;
`

export default App;



