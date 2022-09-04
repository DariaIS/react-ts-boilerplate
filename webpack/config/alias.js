/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '@src': join(rootDir, '/src'),
    '@images': join(rootDir, '/src/images'),
    '@UIElements': join(rootDir, '/src/components/UIElements'),
    '@redux': join(rootDir, '/src/redux'),
    '@sections': join(rootDir, '/src/components/sections'),
    '@pages': join(rootDir, '/src/pages'),
};
