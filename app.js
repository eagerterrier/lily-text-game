let title = document.getElementById("page-title");

const generateRandomIndex = () => Math.floor(Math.random() * titleArray.length);

const selectTitle = () => titleArray[generateRandomIndex()];

const titleArray = [
  "Leave now",
  "OK, you can stay... for a while",
  "This land is cursed",
  "It is dangerous here",
];
title.innerHTML = selectTitle();

const revealMessage = () => {
  document.getElementById("hiddenMessage").style.display = "block";
};
