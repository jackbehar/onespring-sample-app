import './App.css';
import {Button, MenuList, MenuItem, Paper} from 'material-ui-uxpin';
import {UXPinWrapper as ThemeProvider} from 'material-ui-uxpin';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
     <Button variant="contained">Click me!</Button>
     <Paper>
  <MenuList>
    <MenuItem>
      Profile
    </MenuItem>
    <MenuItem>
      My account
    </MenuItem>
    <MenuItem>
      Logout
    </MenuItem>
  </MenuList>
</Paper>
     </ThemeProvider>
    </div>
  );
}



export default App;
