import test from 'ava';
import fn from '.';

test('Find Id By Offset', t => {
	t.is(fn.findIdByOffset('-10:00'), 2);
	t.is(fn.findIdByOffset(-10), 2);
	t.is(fn.findIdByOffset('11:00'), 60);
	t.is(fn.findIdByOffset(11), 60);

	let error = t.throws(() => fn.findIdByOffset([]));
	t.is(error.message, 'Not a valid offset input, received object');

	let error2 = t.throws(() => fn.findIdByOffset(-14));
	t.is(error2.message, 'Not a valid offset, offset should be between -12 to 12');

	let error3 = t.throws(() => fn.findIdByOffset(14));
	t.is(error3.message, 'Not a valid offset, offset should be between -12 to 12');
});

test('Find Name By Id', t => {
	t.is(fn.findTimezoneName(1), 'GMT-11:00, Samoa (Samoa)');
	t.is(fn.findTimezoneName(4), 'GMT-08:00, Pacific (San Jose)');
});
