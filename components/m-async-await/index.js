
function mockDelay() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log('2s后');
      res();
    }, 2000);
  });
}

Component({
  async attached() {
    await mockDelay();
    console.log('111111111111');
  },
});
