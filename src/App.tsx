import './App.css';
import { SurveyDashboard } from './components/SurveyDashboard';

function App() {
  return (
    <div className="mb-2">
      <div className="w-full p-4 mb-4 text-4xl bg-blue-400 navbar">
        <span className="p-2 bg-blue-300 rounded-md">GeniusSurvey</span>
      </div>
      <SurveyDashboard />
    </div>
  );
}

export default App;
