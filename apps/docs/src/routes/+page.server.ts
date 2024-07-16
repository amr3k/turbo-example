import { PRIVATE_EXAMPLE_VAR } from '$env/static/private';

export async function load() {
	return {
		variable: PRIVATE_EXAMPLE_VAR
	};
}
