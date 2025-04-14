function createTimer() {
  const timer = new Date();
  const current = setTimeout();
  console.log(timer);
  return {
    start() {
      setTimeout(() => 5000);
    },

    pause() {
      clearTimeout();
    },
    reset() {
      this.timer = new Date();
    },
  };
}
