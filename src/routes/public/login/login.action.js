import { redirect } from 'react-router-dom';
import { store } from '@/redux/store';
import { logIn } from '@/redux/userSlice';

export async function loginAction({ request }) {
  const formData = await request.formData();
  const value = formData.get('login')?.toString().trim();

  if (!value) {
    return { error: 'Введите логин' };
  }

  store.dispatch(logIn(value));

  return redirect('/dashboard');
}
