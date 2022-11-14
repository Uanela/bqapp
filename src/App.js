import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import SecondSection from "./components/SecondSection";
import "./styles/scss/main_style.scss";
import FourthSection from "./components/FourthSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="separator"></div>
      <SecondSection></SecondSection>
      <div className="separator orange"></div>
      <ProfileSection></ProfileSection>
      <div className="separator orange"></div>
      <FourthSection></FourthSection>
    </div>
  );
}

export default App;
