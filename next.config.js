const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to', // Ajout de media2.dev.to pour corriger l'erreur
        pathname: '**',
      },
    ],
    unoptimized: true, // Optionnel, si vous ne souhaitez pas utiliser l'API d'optimisation d'images de Next.js
  },
  output: 'export', // Cette ligne active l'export statique
};
