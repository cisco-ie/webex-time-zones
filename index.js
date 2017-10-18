'use strict';
const timeZones = [
	'GMT-12:00, Dateline (Eniwetok)',
	'GMT-11:00, Samoa (Samoa)',
	'GMT-10:00, Hawaii (Honolulu)',
	'GMT-09:00, Alaska (Ancorage)',
	'GMT-08:00, Pacific (San Jose)',
	'GMT-07:00, Mountain (Arizona)',
	'GMT-07:00, Mountain (Denver)',
	'GMT-06:00, Central (Chicago)',
	'GMT-06:00, Mexico (Mexico City,Tegucigalpa)',
	'GMT-06:00, Central (Regina)',
	'GMT-05:00, S. America Pacific (Bogota)',
	'GMT-05:00, Eastern (New York)',
	'GMT-05:00, Eastern (Indiana)',
	'GMT-04:00, Atlantic (Halifax)',
	'GMT-04:00, S. America Western (Caracas)',
	'GMT-03:30, Newfoundland (Newfoundland)',
	'GMT-03:00, S. America Eastern (Brasilia)',
	'GMT-03:00, S. America Eastern (Buenos Aires)',
	'GMT-02:00, Mid-Atlantic (Mid-Atlantic)',
	'GMT-01:00, Azores (Azores)',
	'GMT+00:00, Greenwich (Casablanca)',
	'GMT+00:00, GMT (London)',
	'GMT+01:00, Europe (Amsterdam)',
	'GMT+01:00, Europe (Paris)',
	'GMT+01:00, Europe (Prague)',
	'GMT+01:00, Europe (Berlin)',
	'GMT+02:00, Greece (Athens)',
	'GMT+02:00, Eastern Europe (Bucharest)',
	'GMT+02:00, Egypt (Cairo)',
	'GMT+02:00, South Africa (Pretoria)',
	'GMT+02:00, Northern Europe (Helsinki)',
	'GMT+02:00, Israel (Tel Aviv)',
	'GMT+03:00, Saudi Arabia (Baghdad)',
	'GMT+03:00, Russian (Moscow)',
	'GMT+03:00, Nairobi (Nairobi)',
	'GMT+03:00, Iran (Tehran)',
	'GMT+04:00, Arabian (Abu Dhabi, Muscat)',
	'GMT+04:00, Baku (Baku)',
	'GMT+04:00, Afghanistan (Kabul)',
	'GMT+05:00, West Asia (Ekaterinburg)',
	'GMT+05:00, West Asia (Islamabad)',
	'GMT+05:30, India (Bombay)',
	'GMT+06:00, Columbo (Columbo)',
	'GMT+06:00, Central Asia (Almaty)',
	'GMT+07:00, Bangkok (Bangkok)',
	'GMT+08:00, China (Beijing)',
	'GMT+08:00, Australia Western (Perth)',
	'GMT+08:00, Singapore (Singapore)',
	'GMT+08:00, Taipei (Hong Kong)',
	'GMT+09:00, Tokyo (Tokyo)',
	'GMT+09:00, Korea (Seoul)',
	'GMT+09:30, Yakutsk (Yakutsk)',
	'GMT+09:30, Australia Central (Adelaide)',
	'GMT+09:30, Australia Central (Darwin)',
	'GMT+10:00, Australia Eastern (Brisbane)',
	'GMT+10:00, Australia Eastern (Sydney)',
	'GMT+10:00, West Pacific (Guam)',
	'GMT+10:00, Tasmania (Hobart)',
	'GMT+10:00, Vladivostok (Vladivostok)',
	'GMT+11:00, Central Pacific (Solomon Is)',
	'GMT+12:00, New Zealand (Wellington)',
	'GMT+12:00, Fiji (Fiji)',
	'GMT-09:00, Alaska (Anchorage)'
];

const gmtOffsets = [
	'-12:00',
	'-11:00',
	'-10:00',
	'-9:00',
	'-8:00',
	'-7:00',
	'-7:00',
	'-6:00',
	'-6:00',
	'-6:00',
	'-5:00',
	'-5:00',
	'-5:00',
	'-4:00',
	'-4:00',
	'-3:30',
	'-3:00',
	'-3:00',
	'-2:00',
	'-1:00',
	'-9:00',
	'00:00',
	'00:00',
	'1:00',
	'1:00',
	'1:00',
	'1:00',
	'2:00',
	'2:00',
	'2:00',
	'2:00',
	'2:00',
	'2:00',
	'3:00',
	'3:00',
	'3:00',
	'3:00',
	'4:00',
	'4:00',
	'4:00',
	'5:00',
	'5:00',
	'5:30',
	'6:00',
	'6:00',
	'7:00',
	'8:00',
	'8:00',
	'8:00',
	'8:00',
	'9:00',
	'9:00',
	'9:30',
	'9:30',
	'9:30',
	'10:00',
	'10:00',
	'10:00',
	'10:00',
	'10:00',
	'11:00',
	'12:00',
	'12:00',
];

const findIdByOffset = (offset) => {
	let serializedOffset = offset;

	if (typeof offset === 'number') {
		if (offset > 12 || offset < -12) {
			throw new Error('Not a valid offset, offset should be between -12 to 12');
		} else {
			serializedOffset = `${offset}:00`;
		}
	}

	if (typeof serializedOffset !== 'string') {
		throw new Error(`Not a valid offset input, received ${typeof serializedOffset}`);
	}

	const isAValidOffset = serializedOffset.match(/\d{1,2}:[0|3]0/).length > 1;

	if (!isValidOffset) {
		throw new Error('Not a valid offset');
	}

	const timeZoneId = gmtOffsets.indexOf(serializedOffset);

	if (timeZoneId === -1) {
		throw new Error('Not valid offset found');
	} else {
		return timeZoneId;
	}
};

const findTimezoneName = (index) => {
	const timezoneName = timeZones[index];
	if (timezoneName === -1) {
		throw new Error(`No matching timezone, based on index: ${index}`);
	}

	return timezoneName;
}

module.exports = {
	findIdByOffset,
	findTimezoneName
};
