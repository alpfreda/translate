<template>
  <div class="circle-loading" />
</template>

<style scoped>
  .circle-loading {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: spin 400ms infinite linear;
    border-top-color: #178ced;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
