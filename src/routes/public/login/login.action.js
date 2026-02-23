// import { logIn } from '@/redux/userSlice';
// import { useDispatch } from 'react-redux';

export async function loginAction({ request }) {
  const formData = await request.formData();
  const value = formData.get('login');
  if (value === '') console.log('empty!!!!!!!!!');
  console.log(value);

  //   const dispatch = useDispatch();
  //   dispatch(logIn(value));
}
