const imageList = [
  { image: 'images/img1.jpg', text: '1 Ay' },
  { image: 'images/img2.jpg', text: '1 Seneye' },
  { image: 'images/img3.jpg', text: '10 Seneye' },
  { image: 'images/img4.jpg', text: 'Bir Ömüre Dönüşecek' }
];

 let index = 0;
 const bg = document.getElementById('bg');
 const text = document.getElementById('text');
 const btn = document.getElementById('nextBtn');
 
btn.addEventListener('click', () => {
  // Müzik
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play().catch(err => console.warn('Müzik oynatılamadı:', err));
  }

  // Fotoğraf & metin
  index++;
  if (index < imageList.length) {
    bg.style.backgroundImage = `url('${imageList[index].image}')`;
    text.innerText = imageList[index].text;
  } else {
    text.innerText = 'Sonsuza Kadar ❤️';
    btn.style.display = 'none';
  }
});

function startMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play().catch(e => console.warn('Müzik başlatılamadı:', e));
  }
}
