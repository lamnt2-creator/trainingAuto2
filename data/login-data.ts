export type LoginCase = {
  username: string;
  password: string;
  expectedResult: string;
}

export const Case1: LoginCase = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!',
  expectedResult: 'You logged into a secure area!'
}

export const Case2: LoginCase = {
  username: 'tomsmith',
  password: 'password',
  expectedResult: 'Your password is invalid!'
}

export const Case3: LoginCase = {
  username: '',
  password: '',
  expectedResult: 'Your username is invalid!'
}