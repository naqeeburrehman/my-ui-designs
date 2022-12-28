import { Route, Routes } from "react-router-dom";
import Home from "./components/theme/Home";
import One from "./components/one/Index";
import Two from "./components/two/Index";
import Layout from "./components/theme/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="one" element={<One />} />
                <Route path="two" element={<Two />} />
            </Route>
        </Routes>
    );
}

export default App;
