let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ol = document.querySelector('ol');
let div = document.getElementById('mini-container');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inp.value===""){
alert('hato');
    }else{
        let li = document.createElement('li');
        li.textContent=inp.value;
ol.appendChild(li);
let span = document.createElement('span');
span.innerHTML= '\u00d7';
li.appendChild(span);
    }
    inp.value='';
});

ol.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checket');
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
});

