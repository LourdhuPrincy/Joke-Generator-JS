const jokeContainer=document.getElementById('joke');
const btn=document.getElementById('jokeBtn');
const h2=document.createElement('h2');
const p= document.createElement('p');
jokeContainer.append(h2, p);
h2.style.fontSize='30px';
p.style.fontSize='25px';
p.style.color='#8D3DAF';

// initial jokes
h2.textContent='Can a kangaroo jump higher than the Empire State Building?';
p.textContent='Of course! The Empire State Building can’t jump.';

const jokeApi='https://official-joke-api.appspot.com/random_joke';

// generting jokes
function generateJoke(){
    fetch(jokeApi)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        h2.textContent=data.setup;
        p.textContent=data.punchline;
    });
};


btn.addEventListener('click', generateJoke);

