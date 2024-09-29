import { SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';

describe('Oppgave 1', () => {
	it('should say "Hello, Webkom!"', async () => {
		const response = await SELF.fetch('https://echo.webkom');

		expect(await response.text()).toMatchInlineSnapshot(`"Hello, Webkom!"`);
	});
});

describe('Oppgave 2', () => {
	it('should have multiple routes', async () => {
		const response = await SELF.fetch('https://echo.webkom');
		expect(await response.text()).toMatchInlineSnapshot(`"Hello, Webkom!"`);

		const response2 = await SELF.fetch('https://echo.webkom/ping');
		expect(await response2.text()).toMatchInlineSnapshot(`"Pong!"`);
	});
});

describe('Oppgave 3', () => {
	it('should return the count', async () => {
		const response = await SELF.fetch('https://echo.webkom/count');
		expect(await response.text()).toBe('0');
		const response2 = await SELF.fetch('https://echo.webkom/count');
		expect(await response2.text()).toBe('1');
		const response3 = await SELF.fetch('https://echo.webkom/count');
		expect(await response3.text()).toBe('2');
	});
});
