import logo from './logo.svg';
import './App.css';
import {Button, IconButton} from "@mui/material"
import CommuteIcon from '@mui/icons-material/Commute';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { LoadingButton } from '@mui/lab';
import {styled} from "@mui/material/styles";
import AppBarExample from './components/AppBar';

const StyledButton = styled(Button)({
  fontSize: 25,
  backgroundColor: "red",
  padding: 25
})

function App() {
  return (
    <div className="App">
      <AppBarExample />
      <StyledButton variant='outlined' size="small" startIcon={<CommuteIcon />} endIcon={<CommuteIcon />}>
        Button1
      </StyledButton>
      <IconButton color="warning" size="large">
        <CopyrightIcon />
      </IconButton>
      <LoadingButton variant='contained'  loadingPosition='start'  startIcon={<CommuteIcon />}>
        LOADING BUTTON
      </LoadingButton>
    </div>
  );
}

export default App;
