import './App.css';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <section className='cards'>
        <div className="container">
          <div className="cardParent">
    <Card title="selam burda başlık yazıyor."
    content ="burada içerik yazıyor."/>
    <Card 
    title ="burada 2.başlık yazıyor."
    content ="2.içerik yazıyor."/>
    <Card/>
    </div>
    </div>
    </section>
    </div>
  );
}

export default App;
