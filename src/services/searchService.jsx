import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.getData(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {}
};
