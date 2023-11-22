import { instance } from '../index';
import { db } from '../lib/db.js';
require('dotenv').config();

export const checkout = async (req: any, res: any) => {
  try {
    console.log('checkout');
    console.log(req.body.price);
    const options = {
      amount: Number(req.body.price * 100),
      currency: 'INR',
    };

    const user = await db.user.findUnique({
      where: {
        id: req.body.userId,
      },
      include: {
        cartItems: true,
      },
    });

    const order = await instance.orders.create(options);
    console.log(order);
    console.log(user?.cartItems);
    //@ts-ignore

    if (order) {
      //@ts-ignore
      for (const cartItem of user.cartItems) {
        await db.orders.create({
          data: {
            //@ts-ignore
            userId: user.id,
            bookId: cartItem.bookId,
            quantity: cartItem.quantity,
            payId: order.id,
          },
        });

        await db.book.update({
          where: { id: cartItem.bookId },
          data: {
            bought: {
              increment: 1,
            },
          },
        });

        await db.cartItem.delete({
          where: {
            id: cartItem.id,
          },
        });
      }
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (e) {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
  }
};
