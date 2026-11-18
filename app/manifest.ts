import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QABugLabs — Web & Mobile App Development & QA',
    short_name: 'QABugLabs',
    description: 'We design & develop modern responsive websites, native & cross-platform mobile apps, and build reliable automated QA test suites.',
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
