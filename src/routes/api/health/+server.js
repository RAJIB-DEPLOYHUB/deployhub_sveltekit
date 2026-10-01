import { json } from '@sveltejs/kit';

export function GET() {
  return json({
    status: 'healthy',
    service: 'deployhub_sveltekit',
    framework: 'SvelteKit 2',
    timestamp: new Date().toISOString()
  });
}
