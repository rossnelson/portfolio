import { Anthropic } from '@anthropic-ai/sdk';
import { ContentPiece, Platform } from '@content/shared';

export class ContentGenerator {
  private anthropic: Anthropic;
  private supabase: any;

  constructor(config: {
    anthropicKey: string;
    supabaseUrl: string;
    supabaseKey: string;
  }) {
    this.anthropic = new Anthropic({ apiKey: config.anthropicKey });
    // Initialize Supabase client
  }

  async generateContent(topic: string, platforms: Platform[]): Promise<ContentPiece[]> {
    const systemPrompt = `You are a content strategy expert who understands the nuances 
    of different social media platforms. Generate content that maintains authenticity 
    while optimizing for each platform's unique characteristics.`;

    const pieces: ContentPiece[] = [];

    for (const platform of platforms) {
      const prompt = this.getPromptForPlatform(platform, topic);
      
      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 4000,
        system: systemPrompt,
        messages: [{ role: 'user', content: prompt }]
      });

      pieces.push({
        id: crypto.randomUUID(),
        title: topic,
        content: response.content[0].text,
        platform,
        metadata: {
          keywords: [],  // Extract keywords from content
          generatedAt: new Date().toISOString()
        }
      });
    }

    return pieces;
  }

  private getPromptForPlatform(platform: Platform, topic: string): string {
    const prompts = {
      [Platform.BLOG]: `Create a comprehensive blog post about "${topic}".
        Include:
        - Clear, engaging introduction
        - Well-structured headings
        - Practical examples
        - Code snippets where relevant
        - Call-to-action
        Target length: 1500 words`,

      [Platform.YOUTUBE]: `Create a video script about "${topic}".
        Include:
        - Attention-grabbing hook (15 seconds)
        - Clear structure with timestamps
        - Visual cues in [brackets]
        - Engaging examples
        - Call-to-action
        Target length: 10 minutes`,

      [Platform.REDDIT]: `Create a Reddit post about "${topic}".
        Include:
        - Engaging title
        - Well-structured content
        - Code examples in proper formatting
        - TL;DR at the beginning
        - Follow-up discussion points`
    };

    return prompts[platform] || '';
  }
}
