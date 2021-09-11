import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from './components/header/header';
import Form from './components/sidebar/form';
import Resume from './components/resume/resume';
import data from './data.js';

export default function App() {
  const [showSidebar, setShowSideBar] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  localStorage.setItem('resumeData', JSON.stringify(data()));

  useEffect(() => {
    //call the api for dummy data
    let apiData = JSON.parse(localStorage.getItem('resumeData'));
    console.log(apiData);
    setResumeData(apiData);
  }, []);

  const showsideBar = () => {
    setShowSideBar(!showSidebar);
  };
  return (
    <div className="app">
      <Header
        showsideBar={() => {
          showsideBar();
        }}
      />
      <div className="resume-body">
        {showSidebar && (
          <div className="form_div">
            <Form />
          </div>
        )}
        <div className={`${!showSidebar ? 'resume-padding' : ''} resume_div`}>
          <Resume formData={resumeData} />
        </div>
      </div>
    </div>
  );
}
