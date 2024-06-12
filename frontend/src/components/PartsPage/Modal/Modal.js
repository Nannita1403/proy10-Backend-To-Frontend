import './Modal.css';

export const Modal = () => {
  const modal = document.createElement('section');
  modal.classList.add('modal', 'visible');
  const closeBtn = document.createElement('span');
  closeBtn.classList.add('material-symbols-outlined');
  closeBtn.textContent = 'close';
  closeBtn.addEventListener('click', () => modal.remove());
  modal.append(closeBtn);
  return modal;
};