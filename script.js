const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {

    if (gridContainer.children.length >= 30) {
        const confirmation = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?");
        if (confirmation) {
            gridContainer.innerHTML = ''; 
        }
        else {
            return;
        }
    }

    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`

    const img = document.createElement('img')
    img.src = imgUrl

    gridContainer.appendChild(img)

});
