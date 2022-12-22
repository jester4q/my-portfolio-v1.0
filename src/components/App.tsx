import { Routes, Route } from 'react-router-dom';

import './app.scss';
import Contact from './contact/Contac';
import Header from './header/Header';
import Home from './home/Home';
import Info from './info/Info';
import Privacy from './privacy/Privacy';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
