const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
        const { email, password, username, profilePicture } = req.body;
      
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({
            username,
            email,
            hashedPassword,
            profilePicture
        });

        await setTokenCookie(res, user);
    
        return res.json({user})
    }),
  );



module.exports = router;