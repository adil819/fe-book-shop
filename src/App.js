import logo from './logo.svg';
// import './App.css';

function App() {
  
  const fullName = 'Ahmad Adil';

  const buttonText = 'Click Me';

  const buttonStyle = {backgroundColor: 'black', color: 'white'};
  
  const summation = <p>Hasil dari 5 + 5 adalah {5 + 5}</p>

  return (
    <div>
      <h3>Hai {fullName}, lagi belajar ReactJS ya?  Keren!!</h3>
      <hr/>
      <label className="label" htmlFor="name">Masukkan nama : </label>
      <input type="text" id="name" />
      <button style={buttonStyle}>{buttonText}</button>
    
      <hr/>
      {summation}
    
    </div>
  );
}

export default App;
