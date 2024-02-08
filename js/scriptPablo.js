let gif = 
["gifs/1.gif",
"gifs/2.gif",
"gifs/3.gif",
"gifs/4.gif",
"gifs/5.gif",
"gifs/6.gif",
"gifs/7.gif",
"gifs/8.gif",
"gifs/9.gif",
"gifs/10.gif",
];

const trocaBack = document.getElementById("troca__marcal");

let GifRandom = Math.floor((Math.random() * 9)+1);

document.getElementById("troca__marcal").src = gif[GifRandom];

console.log(GifRandom);

