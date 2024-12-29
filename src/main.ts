import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
	hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));

	app.setViewEngine('hbs');

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
