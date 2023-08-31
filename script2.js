const keys=document.querySelectorAll('.key');
const whiteKeys=document.querySelectorAll('.key.white');
const blackKeys=document.querySelectorAll('.key.black');
const WHITE_KEYS=['z','x','c','v','b','n','m'];
const BLACK_KEYS=['s','d','g','h','j'];
keys.forEach(key=>{
    key.addEventListener('click',()=>playNote(key));
});
function playNote(key){
    const noteAudio=document.getElementById(key.dataset.note);
    noteAudio.currentTime=0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active');
    });
}


// --------------------------
// Path: script3.js

const listaSonidos=[
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G'
]
const audio1=document.getElementById('C');
const audio2=document.getElementById('Db');
const audio3=document.getElementById('D');
const audio4=document.getElementById('Eb');
const audio5=document.getElementById('E');
const audio6=document.getElementById('F');
const audio7=document.getElementById('Gb');
const audio8=document.getElementById('G');
const elements=document.querySelectorAll('.imagenes > div');
const listaNotas= Array.from(elements).map((nota,i)=>{
    nota.setAttribute('data-note',listaSonidos[i]);
    return nota;
})
document.querySelectorAll('.imagenes > div').forEach(nota=>{
    nota.addEventListener('click',()=>{
        playNota(nota);
    })
})
console.log(listaNotas);
function playNota(nota){
    const audio=document.getElementById(nota.dataset.note);
    audio.currentTime=0;
    audio.play();
    // nota.classList.add('active');
    // audio.addEventListener('ended',()=>{
    //     nota.classList.remove('active');
    // })
}