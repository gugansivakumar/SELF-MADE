import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import FrameComponent4 from "./pages/FrameComponent4";
import FrameComponent5 from "./pages/FrameComponent5";
import FrameComponent6 from "./pages/FrameComponent6";
import FrameComponent7 from "./pages/FrameComponent7";
import FrameComponent8 from "./pages/FrameComponent8";
import FrameComponent9 from "./pages/FrameComponent9";
import FrameComponent10 from "./pages/FrameComponent10";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-20":
        title = "";
        metaDescription = "";
        break;
      case "/frame-19":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-17":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-18":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />

      <Route path="/frame-20" element={<FrameComponent1 />} />

      <Route path="/frame-19" element={<FrameComponent2 />} />

      <Route path="/frame-6" element={<FrameComponent3 />} />

      <Route path="/frame-7" element={<FrameComponent4 />} />

      <Route path="/frame-5" element={<FrameComponent5 />} />

      <Route path="/frame-17" element={<FrameComponent6 />} />

      <Route path="/frame-1" element={<FrameComponent7 />} />

      <Route path="/frame-4" element={<FrameComponent8 />} />

      <Route path="/frame-18" element={<FrameComponent9 />} />

      <Route path="/frame-2" element={<FrameComponent10 />} />
    </Routes>
  );
}
export default App;
