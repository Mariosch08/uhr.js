function clock() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 180; // Rotate 180° 
  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 180; // Rotate 180° 
  const minuteHand = document.querySelector(".min-hand");
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 180;// Rotate 180° 
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call function evrey 1000 miliseconds
setInterval(clock, 1000);

// Initialize clock immediately to avoid delay
setClock();
