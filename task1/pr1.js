let count = {
    javascript : 0,
    python : 0,
    java : 0
}

const resultDiv = document.querySelector('.counter');

function result(){
    resultDiv.innerHTML = `
    <ul >
        <li style="color:#0d6efd;">JavaScript: ${count.javascript}</li>
        <li style="color:#0d6efd;">Python: ${count.python}</li>
        <li style="color:#0d6efd;">Java: ${count.java}</li>
    </ul>
    `
}

let buttons = document.querySelectorAll('.buttons button')
buttons.forEach(btn => {
    btn.onclick = function(){   
        let lang = btn.innerText.toLowerCase();
        count[lang]++
        result()
    }
})
result()

setInterval(() => {
    const languages = ["javascript", "python", "java"];
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    count[randomLang]++;
    result()
}, 2000);