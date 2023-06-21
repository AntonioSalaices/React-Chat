// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module 'ApiData' {
  export interface GifData {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {
      original: GifImage;
      downsized: GifImage;
      downsized_large: GifImage;
      downsized_medium: GifImage;
      downsized_small: {
        height: string;
        width: string;
        mp4_size: string;
        mp4: string;
      };
      downsized_still: GifImage;
      fixed_height: GifImage;
      fixed_height_downsampled: GifImage;
      fixed_height_small: GifImage;
      fixed_height_small_still: GifImage;
      fixed_height_still: GifImage;
      fixed_width: GifImage;
      fixed_width_downsampled: GifImage;
      fixed_width_small: GifImage;
      fixed_width_small_still: GifImage;
      fixed_width_still: GifImage;
      looping: {
        mp4_size: string;
        mp4: string;
      };
    };
  }

  interface GifImage {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size?: string;
    webp?: string;
    frames?: string;
    hash?: string;
  }
}
