import './App.css'

import Animate from './Animate';
import Header from './Header';
import ProjectList from './ProjectList';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Animate>
        <div className="w-full h-screen">

          <Header />

          <ProjectList />

          <Footer />

        </div>
      </Animate>
    </>
  );
}