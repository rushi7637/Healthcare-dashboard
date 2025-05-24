import React from 'react';
     import Sidebar from './components/Sidebar';
     import Header from './components/Header';
     import DashboardMainContent from './components/DashboardMainContent';
     import './App.css';

     const App = () => {
       return (
         <div className="app-container">
           <h1></h1> {/* Test to ensure something renders */}
           <Sidebar />
           <div className="main-content">
             <Header />
             <DashboardMainContent />
           </div>
         </div>
       );
     };

     export default App;