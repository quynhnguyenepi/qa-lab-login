(function () {
  var h = React.createElement, useState = React.useState, useEffect = React.useEffect;
  function useHash() {
    var s = useState(location.hash || '#/');
    useEffect(function () {
      function f() { s[1](location.hash || '#/'); }
      window.addEventListener('hashchange', f);
      return function () { window.removeEventListener('hashchange', f); };
    }, []);
    return s[0];
  }
  function Home() {
    return h('div', null,
      h('div', { id: 'promo-banner' }, 'Free shipping this week'),
      h('h1', { id: 'hero-title' }, 'QA Lab'),
      h('a', { id: 'cta-primary', href: '#/pricing' }, 'Buy now'),
      h('p', { id: 'price' }, '$10'));
  }
  function Pricing() {
    return h('div', null, h('h1', { id: 'hero-title' }, 'QA Lab pricing'), h('p', { id: 'price' }, '$10 per month'));
  }
  function About() {
    return h('div', null, h('h1', { id: 'hero-title' }, 'About QA Lab'), h('p', null, 'A lab page for QA Agent checks.'));
  }
  function App() {
    var hash = useHash();
    var View = hash === '#/pricing' ? Pricing : hash === '#/about' ? About : Home;
    return h('div', null,
      h('nav', null, h('a', { href: '#/' }, 'Home'), ' | ', h('a', { href: '#/pricing' }, 'Pricing'), ' | ', h('a', { href: '#/about' }, 'About')),
      h(View));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
