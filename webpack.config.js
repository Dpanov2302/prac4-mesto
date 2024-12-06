const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/components/index.js', // Входной файл
    output: {
        filename: 'bundle.js', // Имя файла сборки
        path: path.resolve(__dirname, 'dist'), // Папка для сборки
        clean: true, // Очистка папки перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Обработка JS файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, // Обработка CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: './dist', // Папка для локального сервера
        open: true,
    },
    mode: 'development', // Режим разработки (или 'production')
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Укажи путь к файлу HTML
        }),
    ],
};