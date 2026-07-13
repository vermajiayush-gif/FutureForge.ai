import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdyptdtitktlkngxwpge.supabase.co';
const supabaseAnonKey = 'sb_publishable_0D8zUKYJVrEQCCeAHl4Jsg_WQOOZ96O';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course_id: string;
  payment_status: 'pending' | 'completed' | 'failed';
  payment_id?: string;
  amount: number;
  enrolled_at: string;
  completed_days: number[];
  certificate_id?: string;
  created_at: string;
}

export interface AdminSettings {
  id: string;
  cashfree_app_id: string;
  cashfree_secret_key: string;
  course_price: number;
  discount_percentage: number;
  admin_password_hash: string;
  updated_at: string;
}

export interface CourseAnalytics {
  total_students: number;
  total_revenue: number;
  active_today: number;
  completion_rate: number;
}

// Helper functions
export const getStudents = async () => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as Student[];
};

export const getStudentByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('email', email)
    .single();
  
  if (error && error.code !== 'PGRST116') throw error;
  return data as Student | null;
};

export const createStudent = async (student: Omit<Student, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('students')
    .insert([student])
    .select()
    .single();
  
  if (error) throw error;
  return data as Student;
};

export const updateStudentPayment = async (email: string, paymentId: string, status: string) => {
  const { data, error } = await supabase
    .from('students')
    .update({ 
      payment_id: paymentId, 
      payment_status: status,
      enrolled_at: new Date().toISOString()
    })
    .eq('email', email)
    .select()
    .single();
  
  if (error) throw error;
  return data as Student;
};

export const getAdminSettings = async () => {
  const { data, error } = await supabase
    .from('admin_settings')
    .select('*')
    .single();
  
  if (error && error.code !== 'PGRST116') throw error;
  return data as AdminSettings | null;
};

export const updateAdminSettings = async (settings: Partial<AdminSettings>) => {
  const { data, error } = await supabase
    .from('admin_settings')
    .upsert([{ id: 'main', ...settings, updated_at: new Date().toISOString() }])
    .select()
    .single();
  
  if (error) throw error;
  return data as AdminSettings;
};
