const stateSequence = ["FL", "VA", "CT", "CA", "ID", "CT", "NM", "ID", "NM", "OK", "TX"];

const stateCoords = {
  FL: [27.6648, -81.5158],
  VA: [37.4316, -78.6569],
  CT: [41.6032, -73.0877],
  CA: [36.7783, -119.4179],
  ID: [44.0682, -114.7420],
  NM: [34.5199, -105.8701],
  OK: [35.4676, -97.5164],
  TX: [31.9686, -99.9018]
};

const map = L.map('map').setView([39.8283, -98.5795], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

stateSequence.forEach((state, idx) => {
  const coords = stateCoords[state];
  if (coords) {
    L.marker(coords).addTo(map).bindPopup(`${idx + 1}. ${state}`);
  }
});
