export default function useAuth(
	permissons,
	lookUpPermissons = false,
	rols = [],
	lookUpRols = false,
) {
	const user = JSON.parse(localStorage.getItem('permissionsMergeData'));
	const userPermissons = [];
	const userRol = user?.role;
	let auth = false;
	let userAccessP = false;
	let userAccessR = false;

	if (user) {
		auth = true;
	}

	if (lookUpPermissons) {
		for (let i = 0; i < permissons.length; i++) {
			if (userPermissons.includes(permissons[i])) {
				userAccessP = true;
			}
		}
	}

	if (lookUpRols) {
		if (rols.includes(userRol)) {
			userAccessR = true;
		}
	}

	return [auth, userAccessP, userAccessR];
}
