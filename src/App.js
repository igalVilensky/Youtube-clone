import "./App.scss";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
