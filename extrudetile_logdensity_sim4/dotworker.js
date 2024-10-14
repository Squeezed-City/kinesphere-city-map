// dotWorker.js
importScripts('https://cdn.jsdelivr.net/npm/@turf/turf/turf.min.js');

self.onmessage = function(e) {
  const sidewalks = e.data;
  const features = generateDotsForSidewalks(sidewalks);
  self.postMessage(features);
};

function generateDotsForSidewalks(sidewalks) {
  const features = [];

  sidewalks.forEach(sidewalk => {
    const peopleCount = Math.floor(sidewalk.properties.count13 || 0);
    
    for (let i = 0; i < peopleCount; i++) {
      const point = getRandomPointInPolygon(sidewalk);
      if (point) {
        features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: point.geometry.coordinates,
          },
          properties: {
            sidewalkId: sidewalk.id
          }
        });
      }
    }
  });

  return features;
}

function getRandomPointInPolygon(feature) {
  const bbox = turf.bbox(feature);
  let point;
  let tries = 0;
  const maxTries = 100;

  do {
    point = turf.randomPoint(1, { bbox: bbox }).features[0];
    tries++;
    if (tries > maxTries) {
      console.warn('Max tries reached for feature:', feature);
      return null;
    }
  } while (!turf.booleanPointInPolygon(point, feature));

  return point;
}