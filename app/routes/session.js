import {Router} from 'express'

const router = Router();

router.get('/getAllUsers', async (request, response) => {
    const user = await request.context.models.User.findById(
        request.context.me.id,
    );
    return response.send(user);
});
