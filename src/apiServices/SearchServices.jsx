import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.getData(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {}
};
