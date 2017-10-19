import test from 'ava';
import fn from '.';

test('Get Id By Offset', t => {
	t.is(fn.getIdByOffset('-10:00'), 2);
	t.is(fn.getIdByOffset(-10), 2);
	t.is(fn.getIdByOffset('11:00'), 60);
	t.is(fn.getIdByOffset(11), 60);

	let error = t.throws(() => fn.getIdByOffset([]));
	t.is(error.message, 'Not a valid offset input, received object');

	let error2 = t.throws(() => fn.getIdByOffset(-14));
	t.is(error2.message, 'Not a valid offset, offset should be between -12 to 12');

	let error3 = t.throws(() => fn.getIdByOffset(14));
	t.is(error3.message, 'Not a valid offset, offset should be between -12 to 12');
});

test('Get Name By Id', t => {
	t.is(fn.getTimezone(1), 'GMT-11:00, Samoa (Samoa)');
	t.is(fn.getTimezone(4), 'GMT-08:00, Pacific (San Jose)');
});
