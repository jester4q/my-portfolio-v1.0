import { Routes, Route } from 'react-router-dom';

import './app.scss';
import GoTop from './gotop/GoTop';
import Contact from './contact/Contac';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import Info from './info/Info';
import Privacy from './privacy/Privacy';
import { SnakeGameBoard } from './snake-game-board/SnakeGameBoard';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/snake-game" element={<SnakeGameBoard />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
            <GoTop />
        </>
    );
}

export default App;
