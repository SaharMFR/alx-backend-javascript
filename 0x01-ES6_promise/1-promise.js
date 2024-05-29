export default function getFullResponseFromAPI(success) {
  let myPromise = new Promise(function(myResolve, myReject) {
    if (success) {
      myResolve({
        status: 200,
        body: 'Success',
      });
    } else {
      myReject("The fake API is not working currently");
    }
  });

  return myPromise;
}
