const $pTips = document.querySelector('#tips')
async function callAPI(){
    let randomNum = Math.floor(Math.random() * 11);
    const res =  await fetch('http://localhost:3000/gatos');
    const fatos = await res.json();
    $pTips.innerHTML = fatos[randomNum].fact;
}