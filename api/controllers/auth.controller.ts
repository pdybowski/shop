import config from 'config';
import { CookieOptions, NextFunction, Request, Response } from 'express';
import { User, comparePasswords } from '../models/user.model';
import { CreateUserInput, LoginUserInput } from '../schemaValidators/user.schema';
import { createUser, findUser, signToken } from '../services/user.service';
import AppError from '../utils/appError';
import bcrypt from 'bcrypt';
import { userInfo } from 'os';

// Exclude this fields from the response
export const excludedFields = ['password'];

// Cookie options
const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(
    Date.now() + config.get<number>('accessTokenExpiresIn') * 60 * 1000
  ),
  maxAge: config.get<number>('accessTokenExpiresIn') * 60 * 1000,
  httpOnly: true,
  sameSite: 'lax',
};

// Only set secure to true in production
if (process.env.NODE_ENV === 'production')
  accessTokenCookieOptions.secure = true;

export const registerHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {

  console.log("registerHandler, req body: ", req.body)
  try {
    const user = await createUser({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    });

    const { access_token } = await signToken(user);

    res.status(201).json({
      status: 'success',
      access_token,
        user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
        }
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: 'fail',
        message: 'Email already exist',
      });
    }
    next(err);
  }
};

export const loginHandler = async (
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) => {

  try {
    // Get the user from the collection
    const user = await findUser({ email: req.body.email });


    if (user) {
      // await user.comparePasswords(user.password, req.body.password)
      await bcrypt.compare(user.password, req.body.password)
    } else {
      return next(new AppError('Invalid email or password', 401));
    }

    // Create an Access Token
    const { access_token } = await signToken(user);

    console.log(user)
    // Send Access Token in Cookie
    res.cookie('access_token', access_token, accessTokenCookieOptions);
    res.cookie('logged_in', true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    
    // Send Access Token
    res.status(200).json({
      status: 'success',
      access_token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
     
    });
  } catch (err: any) {
    next(err);
  }
};