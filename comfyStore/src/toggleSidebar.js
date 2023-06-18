import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

export const ts = toggleNav.addEventListener('click', ()=> {
  sidebarOverlay.classList.add('show');
})

export const cb = closeBtn.addEventListener('click', ()=> {
  sidebarOverlay.classList.remove('show');
})