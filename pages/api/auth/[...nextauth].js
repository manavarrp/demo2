import axios from 'axios';
import Axios from 'axios';
import NextAuth from 'next-auth/next';
import { Providers } from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Custom Provider',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const url = 'http://localhost:8080/user/login';
        const response = await axios.post(url, credentials);
        if (response) {
          return response.data;
        } else {
          return null;
        }
      },
    }),
  ],
};
