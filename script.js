document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const seek = document.getElementById('seek');
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');

  btnEn.addEventListener('click', ()=>{
    document.getElementById('title-en').classList.remove('hidden');
    document.getElementById('tag-en').classList.remove('hidden');
    document.getElementById('lead-en').classList.remove('hidden');
    document.getElementById('lead-text-en').classList.remove('hidden');
    document.getElementById('contact-en').classList.remove('hidden');
    document.getElementById('contact-text-en').classList.remove('hidden');
    // hide Spanish
    document.getElementById('title-es').classList.add('hidden');
    document.getElementById('tag-es').classList.add('hidden');
    document.getElementById('lead-es').classList.add('hidden');
    document.getElementById('lead-text-es').classList.add('hidden');
    document.getElementById('contact-es').classList.add('hidden');
    document.getElementById('contact-text-es').classList.add('hidden');
    btnEn.setAttribute('aria-pressed','true');
    btnEs.setAttribute('aria-pressed','false');
  });
  btnEs.addEventListener('click', ()=> location.reload());

  playBtn.addEventListener('click', ()=>{
    if(audio.paused){
      audio.currentTime = 0;
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '🎧 Listen Demo';
    }
  });

  audio.addEventListener('timeupdate', ()=>{
    if(audio.duration){
      seek.value = Math.floor((audio.currentTime / audio.duration) * 100);
    }
  });

  audio.addEventListener('ended', ()=>{
    playBtn.textContent = '🎧 Listen Demo';
    seek.value = 0;
  });

  seek.addEventListener('input', ()=>{
    if(audio.duration){
      audio.currentTime = (seek.value/100) * audio.duration;
    }
  });
});