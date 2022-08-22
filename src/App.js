import './App.css';
import {Button} from 'material-ui-uxpin';
import {UXPinWrapper as ThemeProvider} from 'material-ui-uxpin';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
     <Button variant="contained">Click me!</Button>
     </ThemeProvider>
    </div>
  );
}

export default App;
