import './App.css';
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className="App">
      <h1>My todo list</h1>
      <h2>You should do these before you start being sad</h2>
      <Calendar/>
      
    </div>
  )
}

export default App