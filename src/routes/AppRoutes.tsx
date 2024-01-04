import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from '../pages/TopPage'
import DefaultPage from '../pages/DefaultPage'
import Roulette from '../pages/RoulettePage'
import CustomRoulettePage from '../pages/CustomRoulettePage'
// import NotFoundPage from '../pages/NotFoundPage'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/" element={<TopPage />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/customroulette" element={<CustomRoulettePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
