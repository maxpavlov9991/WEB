const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
const isEquivalent = (obj1, obj2) => {
	for (let [key, value] of Object.entries(obj1)) {
		if (!(obj2.hasOwnProperty(key) && Object.is(obj1[key], obj2[key]))) return false
	}
	return true
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false