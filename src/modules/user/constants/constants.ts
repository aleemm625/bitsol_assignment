export const adminUserSeedData = {
  name: 'abcd',
  email: 'abcd@abc.com',
  password: '1234',
  role: 'admin',
  phoneNo: '12345678901',
  addresses: [
    {
      addressLine1: 'address 1',
      addressLine2: 'address 2',
      city: 'islamabad',
      state: 'islamabad',
      country: 'pakistan',
    },
  ],
};

export const normalUserSeedData = (n: number) => ({
  name: `user${n}`,
  email: `user+${n}@abc.com`,
  password: '1234',
  role: 'normal',
  phoneNo: '12345678901',
  addresses: [
    {
      addressLine1: 'address 1',
      addressLine2: 'address 2',
      city: 'islamabad',
      state: 'islamabad',
      country: 'pakistan',
    },
  ],
});
