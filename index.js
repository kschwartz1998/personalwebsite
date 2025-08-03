function updateSFTimeFromAPI() {
  fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles')
    .then(response => response.json())
    .then(data => {
      const date = new Date(data.datetime);
      const options = { hour: 'numeric', minute: '2-digit', hour12: true };
      const timeString = date.toLocaleTimeString('en-US', options);
      document.getElementById('sf-time').textContent = `San Francisco, CA ${timeString}`;
    })
    .catch(error => {
      console.error('SF Time fetch error:', error);
      document.getElementById('sf-time').textContent = 'San Francisco, CA --:--';
    });
}

window.addEventListener('DOMContentLoaded', () => {
  updateSFTimeFromAPI();
  setInterval(updateSFTimeFromAPI, 30000);
});