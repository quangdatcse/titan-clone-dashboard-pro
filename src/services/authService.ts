
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export type SignUpCredentials = {
  email: string;
  password: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export const signUp = async ({ email, password }: SignUpCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    toast.error('Đăng ký thất bại: ' + error.message);
    throw error;
  }

  toast.success('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.');
  return data;
};

export const signIn = async ({ email, password }: SignInCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error('Đăng nhập thất bại: ' + error.message);
    throw error;
  }

  toast.success('Đăng nhập thành công!');
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    toast.error('Đăng xuất thất bại: ' + error.message);
    throw error;
  }

  toast.success('Đã đăng xuất');
};
