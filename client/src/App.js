import React from 'react'
import { Counter } from './features/counter/Counter';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {

  // //* request api from server(express)
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div>
      <Header />
      <Body />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Counter />
      </header> */}
    </div>
  );
}

export default App;
 