import { supabase } from './supabaseClient';
import { personalInfo } from '../data/portfolio-data';

const CV_BUCKET = import.meta.env.VITE_SUPABASE_CV_BUCKET ?? 'assets';
const CV_PATH = import.meta.env.VITE_SUPABASE_CV_PATH ?? 'CV.pdf';

export async function resolveCvUrl(): Promise<string> {
  if (!supabase) return personalInfo.cvUrl;

  try {
    const { data } = supabase.storage.from(CV_BUCKET).getPublicUrl(CV_PATH);
    if (!data.publicUrl) return personalInfo.cvUrl;

    const response = await fetch(data.publicUrl, { method: 'HEAD' });
    if (!response.ok) return personalInfo.cvUrl;

    return data.publicUrl;
  } catch {
    return personalInfo.cvUrl;
  }
}
