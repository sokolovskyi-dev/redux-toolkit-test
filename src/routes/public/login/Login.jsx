// import { Form } from 'react-router';

import { Form } from 'react-router';

export default function LoginPage() {
  return (
    <div className="container mx-auto mt-12 w-md rounded bg-blue-100/40 p-4 shadow-xl">
      <Form method="post">
        <h1 className="text-center">Login</h1>
        <div className="mx-auto mt-4 flex flex-col items-center gap-4">
          <input
            type="text"
            name="login"
            className="w-80 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-all duration-200 hover:bg-blue-700 active:scale-95"
          >
            Log in
          </button>
        </div>
      </Form>
    </div>
  );
}
