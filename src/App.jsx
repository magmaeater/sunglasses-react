import "./App.css";
import Footer from "./components/Footer";
import Section1 from "./components/section-1/section-1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import WebgiViewer from "./components/webgi-viewer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        <WebgiViewer />
      </div>
    </>
  );
}

export default App;
