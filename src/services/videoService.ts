
import { supabase } from '@/integrations/supabase/client';
import { VideoRequest, Video } from '@/types/video';

export const createVideo = async (request: VideoRequest): Promise<Video> => {
  // Get the current user
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    throw new Error('User not authenticated');
  }
  
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        ...request,
        user_id: user.id,
        status: 'processing',
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Video;
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
