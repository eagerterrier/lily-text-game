let title = document.getElementById('page-title');

const generateRandomIndex = () => 
    Math.floor(Math.random() * titleArray.length);

const selectTitle = () => titleArray[generateRandomIndex()];

const titleArray = [    
        "Leave now", 
        "OK, you can stay... for a while", 
        "Who do you think you are?", 
        "It is dangerous here"
     ];
title.innerHTML = selectTitle()

