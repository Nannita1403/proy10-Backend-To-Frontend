import Toastify from 'toastify-js';

export const showToast = (text, background) => {
  Toastify({
    text,
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true,
    style: {
      background
    }
  }).showToast();
};