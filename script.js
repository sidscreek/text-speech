let isSpeaking = true;
const textarea = document.querySelector("textarea");
const submit = document.querySelector(".submit-btn");
const clear = document.querySelector(".clear-btn");

const textSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = textarea.value; 
    if(!synth.speaking && text)
    {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    if(text.length > 5)
    {
        if(synth.speaking && isSpeaking)
        {
            //change the button text 
            submit.innerText = "Pause";
            synth.resume(); 
            isSpeaking = false;
        }
        else{
            submit.innerText = "Resume";
            synth.pause();
            isSpeaking = true;
        }
    }
};

const clearText = () =>{
    const textarea = document.querySelector('textarea');
    textarea.value = '';
};
submit.addEventListener("click", textSpeech);
clear.addEventListener("click", clearText);

