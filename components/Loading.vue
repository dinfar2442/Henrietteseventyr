<template>
    <div class="loading-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </template>
  
  <style scoped>
div {
    margin: 2rem;
}

  .loading-dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background-color: #fff;
    box-shadow: 1px 4px 4px black;
    border-radius: 50%;
    margin: 0 5px;
    animation: bounce 0.8s infinite alternate;
  }
  
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  </style>
  