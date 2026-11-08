import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import Page4 from './page4/page4';
import Page5 from './page5/page5';
import Page6 from './page6/page6';
import Page7 from './page7/page7';
import Page8 from './page8/page8';
import Admin from './pageadmin/admin';

function App() {

  
  return (
    <>
       <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/page1" index element={<Page1/>}/>
            <Route path="/page2" index element={<Page2/>}/>
            <Route path="/page3" index element={<Page3/>}/>
            <Route path="/page4" index element={<Page4/>}/>
            <Route path="/page5" index element={<Page5/>}/>
            <Route path="/page6" index element={<Page6/>}/>
            <Route path="/page7" index element={<Page7/>}/>
            <Route path="/page8" index element={<Page8/>}/>
            <Route path="/admin" index element={<Admin/>}/>
          </Routes>
        <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
