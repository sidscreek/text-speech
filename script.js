const textarea = document.querySelector("textarea");
const submit = document.querySelector(".submit-btn");
const clear = document.querySelector(".clear-btn");

const textSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = textarea.value; 

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
};

const clearText = () =>{
    const textarea = document.querySelector('textarea');
    textarea.value = '';
};
submit.addEventListener("click", textSpeech);
clear.addEventListener("click", clearText);
