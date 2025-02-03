import { serve } from 'https://deno.fresh.dev/std/http/server.ts';
import { ContentGenerator } from '../../lib/content.ts';

serve(async (req) => {
  try {
    const { topic, platforms } = await req.json();
    
    const generator = new ContentGenerator({
      anthropicKey: Deno.env.get('ANTHROPIC_API_KEY'),
      supabaseUrl: Deno.env.get('SUPABASE_URL'),
      supabaseKey: Deno.env.get('SUPABASE_ANON_KEY')
    });

    const content = await generator.generateContent(topic, platforms);

    return new Response(JSON.stringify(content), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
