
export interface VideoRequest {
  title: string;
  description: string;
  style: string;
  type: 'text' | 'image' | 'voice';
  content?: string;
  file_url?: string;
}

export interface Video extends VideoRequest {
  id: string;
  user_id: string;
  status: 'processing' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
  output_url?: string;
}
