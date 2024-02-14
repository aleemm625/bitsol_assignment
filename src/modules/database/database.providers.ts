import * as mongoose from 'mongoose';

const PASSWORD = 'abcd1234';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://aleem:${PASSWORD}@cluster0.d47myu6.mongodb.net/?retryWrites=true&w=majority`,
      ),
  },
];
