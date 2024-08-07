import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  return (
    <div className="container">
  <h1>Quản lý học sinh</h1>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
  </div>
  <div className="mb-3">
    <label className="form-label">Gender</label>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gender" id="gender" defaultValue="boy" />
      <label className="form-check-label"> Nam </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="gender" id="gender" defaultValue="girl" />
      <label className="form-check-label"> Nữ </label>
    </div>
  </div>
  <div className="mb-3">
    <label className="form-label">Math score</label>
    <input type="text" className="form-control" id="math_score" placeholder="Enter your math score" />
  </div>
  <div className="mb-3">
    <label className="form-label">English score</label>
    <input type="text" className="form-control" id="english_score" placeholder="Enter your english score" />
  </div>
  <div className="mb-3">
    <label className="form-label">Literature score</label>
    <input type="text" className="form-control" id="literature_score" placeholder="Enter your literature score" />
  </div>
  <button id="create" type="button" className="btn btn-primary">
    Create student
  </button>
  <button id="update" type="button" className="btn btn-success" style={{display: 'none'}}>
    Update student
  </button>
  <div className="mb-3 mt-5" style={{display: 'flex'}}>
    <input type="text" className="form-control" id="keyword" placeholder="Enter your keyword" />
    <button id="search" type="button" className="btn btn-primary" style={{marginLeft: '8px'}}>
      Search
    </button>
  </div>
  <div className="mt-5">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#STT</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Math score</th>
          <th scope="col">English score</th>
          <th scope="col">Literature score</th>
          <th scope="col">Average score</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody id="info-student">
      </tbody>
    </table>
  </div>
</div>
  );
}
export default App;