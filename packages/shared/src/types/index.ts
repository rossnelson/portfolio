export interface ContentPiece {
  id: string;
  title: string;
  content: string;
  platform: Platform;
  metadata: {
    keywords: string[];
    description?: string;
    generatedAt: string;
  };
}

export enum Platform {
  BLOG = 'blog',
  YOUTUBE = 'youtube',
  TIKTOK = 'tiktok',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  REDDIT = 'reddit'
}
