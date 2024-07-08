import { EXAMPLE_VAR } from '$env/static/private';

export async function load() {
	return {
		variable: EXAMPLE_VAR
	};
}
