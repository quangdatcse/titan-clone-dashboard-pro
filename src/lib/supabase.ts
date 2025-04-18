
import { createClient } from '@supabase/supabase-js';

// Kiểm tra biến môi trường
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Đảm bảo có giá trị mặc định
let supabase;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error('Supabase URL và Anon Key chưa được cấu hình. Vui lòng kết nối với Supabase để lấy thông tin cấu hình.');
  // Tạo một client giả để tránh lỗi runtime
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: new Error('Supabase chưa được cấu hình') }),
      select: () => ({ single: () => Promise.resolve({ data: null, error: new Error('Supabase chưa được cấu hình') }) }),
    }),
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: new Error('Supabase chưa được cấu hình') }),
      }),
    },
    auth: {
      signIn: () => Promise.resolve({ data: null, error: new Error('Supabase chưa được cấu hình') }),
      signUp: () => Promise.resolve({ data: null, error: new Error('Supabase chưa được cấu hình') }),
      signOut: () => Promise.resolve({ error: null }),
    },
  };
}

export { supabase };
