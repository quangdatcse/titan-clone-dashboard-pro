
-- Create videos bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
SELECT 'videos', 'videos', true
WHERE NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'videos'
);

-- Add RLS policies for videos bucket
CREATE POLICY "Allow public read access to videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

CREATE POLICY "Allow authenticated users to upload videos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'videos' AND auth.role() = 'authenticated');

CREATE POLICY "Allow users to update their own videos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'videos' AND auth.uid() = owner);

CREATE POLICY "Allow users to delete their own videos"
ON storage.objects FOR DELETE
USING (bucket_id = 'videos' AND auth.uid() = owner);
