const redirect = function () {
  var URL = location.pathname.replace(/^\//, "");
  location.href = "https://twitter.com/" + URL;
};

if (location.host == "mobile.twitter.com") {
  redirect();
} else if (location.search != "") {
  redirect();
}
