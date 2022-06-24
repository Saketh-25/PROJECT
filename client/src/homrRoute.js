import React from 'react'
import logo from './logo.svg';
import Home from './pages/home';
import Profileandskills from './pages/profileandskills';
import Educationandlang from './pages/educationandlang';
import Contact from './pages/contactandexp';
import Footer from './pages/footer';
import $ from 'jquery'
import './Mycss.css';
import TopNav from './Sections/TopNav';


function App() {
  $(document).ready(function(){
		var ht=$('.skills').height();
		$('.about').height(ht);
		var ht2=$('.education').height();
		$('.languages').height(ht2);
		var ht3=$('.experience').height();
		$('.contact').height(ht3);
	});

  return (
    <div className="App body">
      <TopNav/>
     <Home />
     <Profileandskills />
     <Educationandlang />
     <Contact />
     <Footer />
    </div>
  );
}


export default App;
