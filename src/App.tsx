import { Routes, Route } from 'react-router'
import { NavBar } from './components/NavBar/NavBar'
import { JokePage } from './pages/JokePage/JokePage'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/:category" element={<JokePage />} />
      </Routes>
    </>
  )
}
export default App;