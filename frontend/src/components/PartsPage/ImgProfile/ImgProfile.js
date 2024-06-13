import './ImgProfile.css';

export const profileIcon = imgSrc => {
  return `
    <div class="profile-icon" title="Log out">
    <span class="logout-icon"><img src="/assets/logout.svg" /></span>
    <img src="${
      imgSrc ||
      'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'
    }" /></div>
    `;
};