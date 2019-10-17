// simulate the network request time...
export const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

// a fire-and-forget function to report errors for componentDidCatch
export const reportError = async () => {
  await sleep(1000);
  return { success: true };
};
