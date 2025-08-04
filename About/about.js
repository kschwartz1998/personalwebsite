function updateSFTime() {
    const now = new Date();
  
    // Convert to Pacific Time regardless of viewer location
    const options = {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
  
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('sf-time').textContent = `San Francisco, CA ${timeString}`;
  }
  
  // Update immediately, then every 30 seconds
  updateSFTime();
  setInterval(updateSFTime, 30000);

  // ✨ NEW rotating word animation logic
  const words = document.querySelectorAll('#word-block .word');
  let wordIndex = 0;
  
  function showNextWord() {
    words.forEach(word => word.classList.remove('active'));
    words[wordIndex].classList.add('active');
  
    wordIndex = (wordIndex + 1) % words.length;
  }
  
  window.onload = () => {
    updateSFTime();
    setInterval(updateSFTime, 30000);
  
    showNextWord();
    setInterval(showNextWord, 1200); // change word every 1.2 seconds
  };