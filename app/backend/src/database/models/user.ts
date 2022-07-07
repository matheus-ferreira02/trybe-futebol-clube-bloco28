import { Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!:string;
  password!:string;
}

User.init({
  username: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
