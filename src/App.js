import './App.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import TopBar from './component/TopBar';
import ExamDetails from './component/ExamDetails';
import ActualExam from './component/ActualExam';
import Qustions from './component/Qustions';
import FooterTop from './component/FooterTop';
import Footer from './component/Footer';
import Discussion from './component/Discussion';
import QuestionMultiple from './component/QuestionMultiple';

function App() {
  return (
    <>
      <Header />
      <TopBar />
      <NavBar />
      <ExamDetails />
      <ActualExam />
      <Qustions />
      <QuestionMultiple/>
      <Discussion/>
      <FooterTop />
      <Footer/>
    </>
  );
}

export default App;
