

const handleSearch=()=>{
    // console.log('hello');
    const inputValue= document.getElementById('text-value').value ;
    if(inputValue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
.then((response) => response.json())
.then((data)=>{
    if(data.title==="No Definitions Found"){
        alert(data.message);
    }
    else{
        displayResult(data);
    }
});
    
}
else{
    alert('empty input');
}
};
const displayResult=(data)=>{
    const parent=document.getElementById('audio-container');
    data[0].phonetics.forEach((element)=>{
        const Audio=document.createElement('audio');
        Audio.src=element.audio;
        // console.log(Audio);
        
        const button=document.createElement('button');
        button.innerHTML="play";
        button.onclick=()=>{
            Audio.play();
        };
        const container=document.createElement('div');
        container.appendChild(button);
        container.appendChild(Audio);
        parent.appendChild(container);
    });
};