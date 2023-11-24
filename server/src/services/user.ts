import { db } from '../lib/db';
import { createHmac, randomBytes } from 'node:crypto';
import JWT from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

const SECRET = 'TRabdom2ejed';

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface GetUserTokenPayload {
  email: string;
  password: string;
}

class UserService {
  private static generateHash(salt: string, password: string) {
    const hashedPassword = createHmac('sha256', salt)
      .update(password)
      .digest('hex');
    return hashedPassword;
  }

  public static getUserById(id: string) {
    return db.user.findUnique({
      where: { id },
      include: {
        orders: true,
      },
    });
  }

  public static async createUser(payload: CreateUserPayload) {
    const { name, email, password, address } = payload;

    const salt = randomBytes(32).toString('hex');
    const hashedPassword = UserService.generateHash(salt, password);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        salt,
        password: hashedPassword,
        address,
      },
    });

    if (newUser) {
      // const otp = await UserService.sendOTP(email);
      const data = {
        ...newUser,
      };
      return data;
    }
  }

  private static getUserByEmail(email: string) {
    return db.user.findUnique({ where: { email } });
  }

  private static async sendOTP(email: string) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    const uuid = uuidv4();
    const otp = uuidv4();

    async function main() {
      const info = await transporter.sendMail({
        from: process.env.NODEMAILER_USER,
        to: email,
        subject: 'Registration',
        html: `<h3>Your OTP: ${otp}</h3>`,
      });
      console.log('Registration message sent: %s', info.messageId);
    }

    await main();
    return otp;
  }

  public static async loginUser(payload: GetUserTokenPayload) {
    const { email, password } = payload;
    const user = await UserService.getUserByEmail(email);

    if (!user) throw new Error('user not found');

    const userSalt = user.salt;
    const usersHashPassword = UserService.generateHash(userSalt, password);

    if (usersHashPassword !== user.password)
      throw new Error('Incorrect Password');

    return user;
  }

  public static decodeJWTToken(token: string) {
    return JWT.verify(token, SECRET);
  }
}

export default UserService;
