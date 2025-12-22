function updateSFTime() {
  const now = new Date();
  const options = {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };

  try {
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    const sfTimeElement = document.getElementById('sf-time');
    if (sfTimeElement) {
      sfTimeElement.textContent = `New York, NY ${timeString}`;
    }
  } catch (e) {
    console.error("Time formatting failed:", e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateSFTime();
  setInterval(updateSFTime, 30000);
});