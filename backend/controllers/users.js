import { User } from "../models/user.js"
import HTTP_STATUS from "../utils/httpStatus.js"

export const users = async (req, res, next) => {

    const userId = req.session.user.id;

    try {

        const userData = await User.getUserById(userId)
        return res.status(HTTP_STATUS.OK).json({ userdata: userData })

    } catch (error) {
        next(error)
    }
}