function login() {

    const pass = document.getElementById("password").value;

    if (pass === "ilysm_meri_pookie_dookie") {

        document.body.innerHTML = `

        <div class="container">

            <div class="container">

<h1>🎉 Welcome Pookie ❤️</h1>

<p>Someone left a gift for you...</p>

<div class="gift" onclick="openGift()">
🎁
</div>

<p>Tap the Gift 🎀</p>

</div>

        `;

    } else {

        document.getElementById("error").innerHTML =
        "❌ Wrong Password, try again Pookie!";

    }

}
function openGift(){
const music = new Audio("music.mp3");
music.loop = true;
music.play();
document.body.innerHTML = `

<div class="container">

<h1>🎂 Happy Birthday Pookie ❤️</h1>

<p>

Before you continue...

<br><br>

I just want to tell you that you are the person who makes me the happiest. ❤️

<br><br>

This little website is just a tiny way of saying thank you for everything you do for me. 🙃🎀

</p>

<button onclick="showGallery()">

Continue 🌸

</button>

</div>

`;

}function showGallery(){

document.body.innerHTML = `

<div class="container">

<h1>📸 Our Memories ❤️</h1>

<img src="pookie.jpg"
style="width:100%;border-radius:20px;">

<p>

Our memories will live here... 🌸

</p>

<button onclick="nextPhoto()">

Next ➜

</button>

</div>

`;

}

function nextPhoto(){

document.body.innerHTML = `

<div class="container">

<h1>💌 A Letter For You ❤️</h1>

<p style="text-align:left; line-height:1.9; font-size:18px;">

Happy Birthday meri pyaari Pookiee. 🎀❤️

<br><br>

Obviously, words aren't enough to explain my feelings, but... thank youuu for being with me till now in every situation. 🥹

<br><br>

I know you'll always try your best to stay with me forever. 🙃

<br><br>

Even when situations get worse, you somehow make everything feel better.

<br><br>

When I'm low, you make me feel recharged without even doing anything. It just feels unreal that someone is there to care about me this much, love me beyond limits. 🫠❤️

<br><br>

Keep smiling. 🌸

<br><br>

<b>— Yours, Yaraa 🎀</b>

</p>

<br><br>

<button onclick="showVideo1()">
Continue 🎥
</button>
</div>

`;

}
function showVideo1(){

document.body.innerHTML = `

<div class="container">

<h1>🎥 Just Watch This... ❤️</h1>

<video controls style="width:100%;border-radius:20px;">
<source src="video1.mp4" type="video/mp4">
</video>

<br><br>

<button onclick="showVideo2()">

Next ▶️

</button>

</div>

`;

}
function showVideo2(){

document.body.innerHTML = `

<div class="container">

<h1>🎀 One Last Video...</h1>

<video controls style="width:100%;border-radius:20px;">
<source src="video2.mp4" type="video/mp4">
</video>

<br><br>

<button onclick="finalPage()">

Final Surprise ❤️

</button>

</div>

`;

}function finalPage(){

document.body.innerHTML = `

<div class="container">

<h1>🎉 Happy Birthday Pookie ❤️</h1>

<p style="font-size:20px;line-height:1.8;">

Thank you for watching everything. 🥹🎀

I hope this little surprise made you smile.

<br><br>

❤️ Forever Yours, Yaraa ❤️

</p>

</div>

`;
createHearts();
createConfetti();
}
function createHearts(){

for(let i=0;i<30;i++){

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

}

}

function createConfetti(){

const colors=["#ff4d6d","#ffd60a","#4cc9f0","#80ed99","#c77dff"];

for(let i=0;i<80;i++){

let c=document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"vw";
c.style.background=colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(c);

}

}