const dev = {

    ssContext: 'http://localhost:5500'

  }
  
  const prod = {
    ssContext: 'http://ec2-52-15-85-15.us-east-2.compute.amazonaws.com:5500'
  }
  
  export let environment = dev;
  
  if (process.env.NODE_ENV === 'production') {
    environment = prod;
  }