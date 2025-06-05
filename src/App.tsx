import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import DataAnalysis from './pages/research/DataAnalysis';
import AITools from './pages/research/AITools';
import ResearchInitiatives from './pages/research/ResearchInitiatives';
import SpaceScience from './pages/research/SpaceScience';
import MachineLearning from './pages/research/MachineLearning';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research/data-analysis" element={<DataAnalysis />} />
        <Route path="/research/space-science" element={<SpaceScience />} />
        <Route path="/research/machine-learning" element={<MachineLearning />} />
        <Route path="/research/ai-tools" element={<AITools />} />
        <Route path="/research/initiatives" element={<ResearchInitiatives />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;