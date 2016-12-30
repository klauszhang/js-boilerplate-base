import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.green('Build with production setting...'))

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(err => console.log(chalk.red(err)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpac generated the following warnings: '));
        jsonStats.warnings.map(war => console.log(chalk.yellow(war)));
    }

    console.log(`webpack stats: ${stats}`);

    console.log(chalk.green('build successful!'));

    return 0;
})


