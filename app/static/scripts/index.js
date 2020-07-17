const text = ['<p> Welcome to my portfolio... </p>'];
const typing = document.querySelector('#typing');
let renderedText = '';
let i = 0;
setTimeout(() => { }, 8000)
const id = setInterval(() => {
    if (i < text[0].length) {
        renderedText = renderedText + getChar();
        typing.innerText = renderedText;
        i += 1;
    }
    else clearInterval(id);
}, 100);

const getChar = () => {
    console.log('still running')
    return text[0][i];
}

