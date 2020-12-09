interface Response {
    token: string;
    user: {
      name: string;
      email: string;
    };
  }
  
  export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: '1234',
          user: {
            name: 'admin',
            email: 'admin@admin.com.br'
          },
        });
      }, 5000);
    });
  }