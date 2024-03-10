import './App.css';
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Weekly todo</h1>
        <h2>You should do these before you get sad</h2>
        <Calendar/>
      </div>
    </div>
  )
}

export default App;