import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art/ArtsSection";
import UsersSection from "./sections/Users/UsersSection";
import "./styles.css";

function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}

export default App;
