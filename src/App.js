import Header from './components/Header/Header';
import Routes from './config/Routes';

require('./App.scss');

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
