import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly password: string;
  readonly email: string;
  readonly role: string;
  readonly phoneNo: string;
  readonly addresses: [
    {
      readonly addressLine1: string;
      readonly addressLine2: string;
      readonly city: string;
      readonly state: string;
      readonly country: string;
    },
  ];
}
