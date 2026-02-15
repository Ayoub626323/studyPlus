const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/O4NQGYFYPBDPTI33OCFAMBJRXU.jpg';
const outPath = path.join(__dirname, '..', 'public', 'image', 'classe-prepa.jpg');

https.get(url, (res) => {
  const file = fs.createWriteStream(outPath);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Image saved to', outPath);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
