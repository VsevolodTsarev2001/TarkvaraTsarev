# Ülesanded
**1) Muuda nuppu teksti**

Ülesanne: Muuda nupu tekst "Tee kingitus" midagi pidulikumat, näiteks "Kingita südameke".

Nõuded: Muuda HTML failis nuppude teksti ```<button id="loveButton">.```

**2) Lisa taustapilt lehele**

Ülesanne: Lisa veebilehe taustale pilt, mis kordub üle kogu ekraani (näiteks pilt südamekeega).

Nõuded: Kasuta background-image CSS-is. 
> Näide:
```
body {
    background-image: url('your-image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
```
**3) Muuda südame kuju** 

Ülesanne: Muuda südame kuju, tehes selle väljendusrikkamaks. Võid kasutada teisi CSS omadusi või isegi gradiente, et süda oleks rohkem 3D.

Nõuded: Proovi kasutada box-shadow efekti, et luua maht.

**4) Lisa nuppude animatsioon hiirele peale viies** 

Ülesanne: Lisa nuppudele sujuv animatsioon, et nupp suureneks natuke, kui sellele hiirega peale minna.

Nõuded: Kasuta transform: scale() nuppude suurendamiseks ja transition sujuva efekti jaoks. 
> Näide:
```
button:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
}
```
**5) Lisa sõnum pärast nupu klikkimist**

Ülesanne: Kui nuppu klikitakse, kuvada sõnum "Sa kinkisid südame!".

Nõuded: Lisa HTML elemendi, mis kuvatakse pärast nupu klikkimist. Kasuta JavaScripti, et kuvada sõnum. 
> Näide JavaScriptis:
```
document.getElementById('loveButton').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    const message = document.createElement('p');
    message.textContent = 'Sa kinkisid südame!';
    document.body.appendChild(message);
    heart.style.transform = 'scale(1)';
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
    }, 1000);
});
```
**6) Muuda südame värvi klikkides**

Ülesanne: Tee nii, et süda muutuks igal klikkimisel oma värvi.

Nõuded: Kasuta JavaScripti, et muuta #heart elementi stiili iga kliki järel. Näide JavaScriptis:
```
document.getElementById('heart').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    heart.style.backgroundColor = randomColor;
});
```
**7) Lisa muusika nupu klikil**

Ülesanne: Lisa muusika, mis mängib, kui kasutaja klikib nuppu.

Nõuded: Lisa projektile helifail ja kasuta JavaScripti, et seda esitada. 
> Näide HTML-is:
```
<audio id="audio" src="happy_valentine.mp3"></audio>
```
> Näide JavaScriptis:
```
document.getElementById('loveButton').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
});
```
**8) Lisa ajastus sõnumi peitmiseks**

Ülesanne: Tee nii, et sõnum "Sa kinkisid südame!" kaoks pärast paar sekundit pärast selle kuvamist.

Nõuded: Kasuta setTimeout() funktsiooni, et sõnum peituks teatud aja möödudes. 
>Näide JavaScriptis:
```
const message = document.createElement('p');
message.textContent = 'Sa kinkisid südame!';
document.body.appendChild(message);
setTimeout(() => {
    message.style.display = 'none';
}, 3000);  // Peida pärast 3 sekundit
```
Lisa tausta animatsioon lehele

**9) Ülesanne: Lisa sujuv tausta animatsioon, et taust muudaks värve paar sekundi jooksul.**

Nõuded: Kasuta @keyframes ja animation sujuva värvi ülemineku jaoks. 
>Näide:
```
@keyframes changeBackground {
    0% { background-color: #f8d7da; }
    50% { background-color: #e63946; }
    100% { background-color: #f8d7da; }
}

body {
    animation: changeBackground 5s infinite;
}
```
**10) Lisa nupp kingituse saatmiseks sõbrale**

Ülesanne: Loo nupp kingituse saatmiseks sõbrale. Kui sellele klikitakse, kuvada sõnum "Kingitus on saadetud!" ja animatsioon südamele.

Nõuded: Lisa veel üks nupp, mis suhtleb kasutajaga, saates kingituse ja kuvades sõnumi. 
> Näide HTML-is:

```
<button id="sendGiftButton">Saada kingitus sõbrale</button>
```
Näide JavaScriptis:
```
document.getElementById('sendGiftButton').addEventListener('click', function() {
    const message = document.createElement('p');
    message.textContent = 'Kingitus on saadetud!';
    document.body.appendChild(message);
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
});
```
