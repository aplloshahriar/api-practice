

const handleSearch=()=>{
    // console.log('hello');
    const inputValue= document.getElementById('text-value').value ;
    if(inputValue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
.then(response => response.json())
.then(data=>console.log(data))
    
}
else{
    alert('empty input')
}
};
const displayResult=()=>{
    const parent=document.getElementById('audio-container')
};