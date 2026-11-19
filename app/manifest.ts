import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZeroBugLabs — US Web & Mobile App Development & QA Agency',
    short_name: 'ZeroBugLabs',
    description: 'We design & develop modern responsive websites, native & cross-platform mobile apps, and build reliable automated QA test suites for US startups and global engineering teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09080e',
    theme_color: '#6c3cff',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
