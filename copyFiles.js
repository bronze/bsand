const fs=require('fs-extra');

// Copy image files recursively from src/blog/ to dist/blog/
try {
  fs.copySync('src/blog', 'dist/blog', {
    // filter: (src, dest) => /\.(png|jpg|jpeg)$/.test(src),
    filter: n => {
      if (fs.lstatSync(n).isDirectory()) {
        return true;
      }
      var result=/\.(png|jpg|jpeg)$/.test(n);
      // console.log(result? 'copied':'skipped', n);
      return result;
    },
    recursive: true,
  });
  console.log('Image files copied successfully to dist/blog/');
} catch (err) {
  console.error('Error copying image files:', err);
}

// Copy the entire src/assets/images/ directory recursively to dist/assets/images/
try {
  fs.copySync('src/assets/images', 'dist/assets/images', {
    recursive: true,
  });
  console.log('src/assets/images/ directory copied successfully to dist/assets/images/');
} catch (err) {
  console.error('Error copying src/assets/images/ directory:', err);
}
