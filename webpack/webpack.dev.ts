/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

import { SudooWebpack } from "@sudoo/webpack-react";
import { SudooWebpackSetting, SudooWebpackPath } from "@sudoo/webpack-react/dist/declare";
import { resolve } from "path";

const paths: SudooWebpackPath = {

    APP_DIR: resolve(__dirname, '..', 'src'),
    BUILD_DIR: resolve(__dirname, '..', 'dist'),
    COMMON_SASS_DIR: resolve(__dirname, '..', 'style', 'common'),
    TSCONFIG_PATH: resolve(__dirname, '..', 'typescript', 'tsconfig.dev.json'),
    APP_ENTRY_FILE_NAME: 'index.tsx',
};

const setting: SudooWebpackSetting = {
    title: 'Red - Brontosaurus',
};

module.exports = SudooWebpack.create(paths, setting).development(8082);
