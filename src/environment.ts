const dev = {
    ssContext: 'localhost:5500'
  }
  
  const prod = {
    ssContext: 'some aws url'
  }
  
  export let environment = dev;
  
  if (process.env.NODE_ENV === 'production') {
    environment = prod;
  }