import logo from './logo.svg';
import './App.css';
import {Button, IconButton} from "@mui/material"
import CommuteIcon from '@mui/icons-material/Commute';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { LoadingButton } from '@mui/lab';
import {styled} from "@mui/material/styles";
import AppBarExample from './components/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomeExample from './components/Home';
import CardExample from './components/Card';
import CarouselExample from './components/Carousel';
import TableExample from './components/Table';
import ChipsExample from './components/Chips';

const StyledButton = styled(Button)({
  fontSize: 25,
  backgroundColor: "red",
  padding: 25
})

function App() {
  return (
    <div className="App">
      <AppBarExample />
      <Routes>
        <Route path="/" element={<HomeExample />}/>
        <Route path="/Cards" element={<CardExample />}/>
        <Route path="/Carousel" element={<CarouselExample />}/>
        <Route path="/Table" element={<TableExample />}/>
        <Route path="/Chips" element={<ChipsExample />}/>

      </Routes>
    </div>
  );
}

export default App;
