import './App.css';
import { useEffect } from 'react';
import { SurveyEditor } from './components/SurveyEditor';

function App() {
  useEffect(() => {}, []);

  return <SurveyEditor y={4} />;
}

export default App;
