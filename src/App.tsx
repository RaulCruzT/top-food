import './App.css';

import { Navbar } from './components';
import {
  Header,
  Awards,
  Menu,
  Team,
  Enjoy,
  Contact,
  Footer
} from './containers';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Awards />
        <Menu />
        <Team />
        <Enjoy />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;
