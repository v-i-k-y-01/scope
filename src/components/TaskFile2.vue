<template>
    <div class="form-container">
      <div class="form-box">
        <h2>Select your Domain</h2>
        <router-link to="./TaskFile3"><div class="radio-options">
          <div class="radio-option">
            <input type="radio" id="c#" name="domain" value="C#">
            <label for="c#">C#</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="java" name="domain" value="Java">
            <label for="java">Java</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="python" name="domain" value="Python">
            <label for="python">Python</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="sql" name="domain" value="sql">
            <label for="sql">Sql</label>
          </div>
        </div></router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-box {
    width: 300px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .radio-options {
    margin-bottom: 20px;
  }
  
  .radio-option {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  input[type="radio"] {
    margin-right: 10px;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
  
  input[type="radio"]:checked {
    background-color: #007bff;
  }
  
  label {
    font-weight: bold;
    font-size: 18px;
  }
  
  label::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #007bff;
    margin-left: 10px;
    visibility: hidden;
  }
  
  input[type="radio"]:checked + label::after {
    visibility: visible;
  }
  </style>
  