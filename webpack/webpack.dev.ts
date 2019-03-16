/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

import { SudooWebpack } from "@sudoo/webpack-react";
import { SudooWebpackPath, SudooWebpackSetting } from "@sudoo/webpack-react/dist/declare";
import { resolve } from "path";

const paths: SudooWebpackPath = {

    APP_DIR: resolve(__dirname, '..', 'src'),
    BUILD_DIR: resolve(__dirname, '..', 'dist'),
    COMMON_SASS_DIR: resolve(__dirname, '..', 'style', 'common'),
    TSCONFIG_PATH: resolve(__dirname, '..', 'typescript', 'tsconfig.dev.json'),
    APP_ENTRY_FILE_NAME: 'entry.tsx',
};

const setting: SudooWebpackSetting = {

    title: 'Example',
};

module.exports = SudooWebpack.create(paths, setting).development(8082);
