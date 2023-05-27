import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <TodoList/>
            <Footer/>
        </div>
    );
}

export default App