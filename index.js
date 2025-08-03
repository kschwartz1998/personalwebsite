function updateSFTime() {
  const now = new Date();

  const options = {
    timeZone: 'America/Los_Angeles',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };

  try {
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('sf-time').textContent = `San Francisco, CA ${timeString}`;
  } catch (e) {
    console.error('Time formatting error:', e);
    document.getElementById('sf-time').textContent = 'San Francisco, CA [error]';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateSFTime();
  setInterval(updateSFTime, 30000);
});