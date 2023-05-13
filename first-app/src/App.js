import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App