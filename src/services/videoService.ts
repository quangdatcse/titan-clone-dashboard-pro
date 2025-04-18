
import { supabase } from '@/lib/supabase';
import { VideoRequest, Video } from '@/types/video';

export const createVideo = async (request: VideoRequest): Promise<Video> => {
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        ...request,
        status: 'processing',
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const uploadFile = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(path, file);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
