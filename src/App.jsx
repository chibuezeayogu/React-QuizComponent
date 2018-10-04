import React from 'react';

import quizData from './quizData.json';
import './App.css'
import Quiz from './Quiz'

const App = () => (
  <Quiz quizData={quizData} />
)

export default App 