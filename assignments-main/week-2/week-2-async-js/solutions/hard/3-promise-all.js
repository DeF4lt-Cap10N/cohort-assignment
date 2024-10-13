function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000); // Convert seconds to milliseconds
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
  }
  
  async function calculateTime(t1, t2, t3) {
    const startTime = new Date();
  
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  
    const totalTime = new Date() - startTime;
    return totalTime;
  }
  
  module.exports = calculateTime;
  