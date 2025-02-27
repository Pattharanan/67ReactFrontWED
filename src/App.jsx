import Hello from "./assets/Hello";
import Contact from "./assets/Conract";
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {name: 'Anirach', message: 'Hi there'},
    {name: 'Tom', message: 'Hello..'}
  ]

  return(
    <div className='App'>
      < Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Anirach@gmail.com" phone ="0970340731" />
    </div>
  );
}

export default App;