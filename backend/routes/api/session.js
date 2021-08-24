const express = require('express')
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

router.get('/', restoreUser, (req, res) => {
      const { user } = req;

      if (user) {
        return res.json({
          user
        });
      } else return res.json({});
    }
  );

router.post('/', asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;
  
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
        where: {
        [Op.or]: {
            username: credential,
            email: credential,
        },
        },
    });

    if (user && bcrypt.compareSync(password, user.hashedPassword.toString())) {
        return await User.scope('currentUser').findByPk(user.id);
    }
  
    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }
  
    await setTokenCookie(res, user);
  
    return res.json({user});

    }),
);

router.delete('/', (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);



module.exports = router;