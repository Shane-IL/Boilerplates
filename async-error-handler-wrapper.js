//Stolen from Wes Bos video
//Old school node solution I like
//Wrapper for async logic that always returns an array with the data at index 0 and error at index 1
//E.G. [data,null] for success, [null, error] for failure

async function asyncHandlerWrapper(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}

//Usage e.g.
const [myAPIData, myAPIError] = await asyncHandlerWrapper(getDataFromMyApi())


//Different solution from same video leverageing Promise.allSettled
const nonAsyncHandlerWrapper = promise => Promise.allSettled([promise])
  .then(([{value, reason}]) => [value,reason]);

//usage

const [value, error] = await nonAsyncHandlerWrapper(getDataFromMyApi())
