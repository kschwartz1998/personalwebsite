function updateSFTime() {
    const now = new Date();
  
    // Convert to Pacific Time regardless of viewer location
    const options = {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
  
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('sf-time').textContent = `New York, NY ${timeString}`;
  }
  
  // Update immediately, then every 30 seconds
  updateSFTime();
  setInterval(updateSFTime, 30000);