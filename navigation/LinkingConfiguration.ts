import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
        },
      },
      Login: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
