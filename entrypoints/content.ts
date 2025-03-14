export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    setTimeout(() => {
      console.log('Hello content.');
    }, 1000);
  },
});
