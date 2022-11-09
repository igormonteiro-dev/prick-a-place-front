import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import "./index.css";
import Homepage from "./pages/homepage";
import AppThemeProvider from "./themes/AppThemeProvider";
import PlaceDetail from "./pages/PlaceDetail";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <AppThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
        <Footer />
      </AppThemeProvider>
    </div>
  );
}

export default App;
