import { routes } from '../index.js';

export const $ = selector => document.querySelector(selector);

export const router = (routes, path) => {
  const component = routes
    .find(route => route.path === path)
    .component;
  
  $('.app').innerHTML = '';
  $('.app').append(component());
};

export const navigate = e => {
  e.preventDefault();

  const path = e.target.getAttribute('href');
  
  window.history.pushState({}, null, path);
  router(routes, path);
};