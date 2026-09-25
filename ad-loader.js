/* Adsterra loader for 300x250 placement */
(function () {
  var atOptions = {
    key: '0a6708683c6bdbe0115b1397aeb18eb6',
    format: 'iframe',
    height: 250,
    width: 300,
    params: {}
  };

  var s = document.createElement('script');
  s.src = 'https://www.highrevenueformat.com/0a6708683c6bdbe0115b1397aeb18eb6/invoke.js';
  s.async = true;
  document.currentScript && document.currentScript.parentNode
    ? document.currentScript.parentNode.appendChild(s)
    : document.body.appendChild(s);
})();
