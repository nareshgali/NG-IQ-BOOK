import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainComponent from "./components/MainComponent";
import HtmlQuestions from "./components/HtmlQuestions";
import CssQuestions from "./components/CssQuestions";
import QuestionsTable from "./components/QuestionsTable";
import CodingQuestions from "./components/CodingQuestions";
import ReactQuestionsTable from "./components/ReactQuestionsTable";
import ReduxQuestions from "./components/ReduxQuestions";
import UnitTestingQuestions from "./components/UnitTestingQuestions";
import ResourcesList from "./components/ResourcesList";
import MiscellaneousQuestoins from "./components/MiscellaneousQuestoins";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/htmlquestions" element={<HtmlQuestions />} />
            <Route path="/cssquestions" element={<CssQuestions />} />
            <Route path="/jsquestions" element={<QuestionsTable />} />
            <Route path="/codingquestions" element={<CodingQuestions />} />
            <Route path="/reactquestions" element={<ReactQuestionsTable />} />
            <Route path="/reduxquestions" element={<ReduxQuestions />} />
            <Route
              path="/unittestingquestions"
              element={<UnitTestingQuestions />}
            />
            <Route path="/resources" element={<ResourcesList />} />
            <Route path="/miscellaneous" element={<MiscellaneousQuestoins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
