# webex-time-zones [![Build Status](https://travis-ci.org/brh55/webex-timezones.svg?branch=master)](https://travis-ci.org/brh55/webex-timezones)

> 🌐 A small node package that helps with dealing with WebEx's Timezone enumerated value

## Install

```
$ npm install --save webex-time-zones
```


## Usage

```js
const webexTz = require('webex-time-zones');

webexTz.getTimezone(0) // => GMT-12:00, Dateline (Eniwetok)
webexTz.getTimezone(3) // => GMT-09:00, Alaska (Ancorage)
webexTz.getIdByOffset('11:00') // => 60
webexTz.getIdByOffset('-10:00') // => 2=
```

# API
## getTimezone(index)
Returns the name of the timezone based on the WebEx Id/Enum Value

### index
**Type:** `number`
The enumerated value or index

## getIdByOffet(offset)
Returns the first matching WebEx Id associated with the offset

### offset
**Type:** `string` (XX:XX) or `number` (-12 to 12)
The GMT offset it must be a valid number between -12 to 12, or valid GMT offset hours


### Update Table
Update the table on the readme by running the script below: `$ npm run build`

## Time Zones

<!-- START TABLE -->
### 63 Time Zones:

| Index | Timezone |
| :------ | :------ |
| `0` | GMT-12:00, Dateline (Eniwetok) |
| `1` | GMT-11:00, Samoa (Samoa) |
| `2` | GMT-10:00, Hawaii (Honolulu) |
| `3` | GMT-09:00, Alaska (Ancorage) |
| `4` | GMT-08:00, Pacific (San Jose) |
| `5` | GMT-07:00, Mountain (Arizona) |
| `6` | GMT-07:00, Mountain (Denver) |
| `7` | GMT-06:00, Central (Chicago) |
| `8` | GMT-06:00, Mexico (Mexico City,Tegucigalpa) |
| `9` | GMT-06:00, Central (Regina) |
| `10` | GMT-05:00, S. America Pacific (Bogota) |
| `11` | GMT-05:00, Eastern (New York) |
| `12` | GMT-05:00, Eastern (Indiana) |
| `13` | GMT-04:00, Atlantic (Halifax) |
| `14` | GMT-04:00, S. America Western (Caracas) |
| `15` | GMT-03:30, Newfoundland (Newfoundland) |
| `16` | GMT-03:00, S. America Eastern (Brasilia) |
| `17` | GMT-03:00, S. America Eastern (Buenos Aires) |
| `18` | GMT-02:00, Mid-Atlantic (Mid-Atlantic) |
| `19` | GMT-01:00, Azores (Azores) |
| `20` | GMT+00:00, Greenwich (Casablanca) |
| `21` | GMT+00:00, GMT (London) |
| `22` | GMT+01:00, Europe (Amsterdam) |
| `23` | GMT+01:00, Europe (Paris) |
| `24` | GMT+01:00, Europe (Prague) |
| `25` | GMT+01:00, Europe (Berlin) |
| `26` | GMT+02:00, Greece (Athens) |
| `27` | GMT+02:00, Eastern Europe (Bucharest) |
| `28` | GMT+02:00, Egypt (Cairo) |
| `29` | GMT+02:00, South Africa (Pretoria) |
| `30` | GMT+02:00, Northern Europe (Helsinki) |
| `31` | GMT+02:00, Israel (Tel Aviv) |
| `32` | GMT+03:00, Saudi Arabia (Baghdad) |
| `33` | GMT+03:00, Russian (Moscow) |
| `34` | GMT+03:00, Nairobi (Nairobi) |
| `35` | GMT+03:00, Iran (Tehran) |
| `36` | GMT+04:00, Arabian (Abu Dhabi, Muscat) |
| `37` | GMT+04:00, Baku (Baku) |
| `38` | GMT+04:00, Afghanistan (Kabul) |
| `39` | GMT+05:00, West Asia (Ekaterinburg) |
| `40` | GMT+05:00, West Asia (Islamabad) |
| `41` | GMT+05:30, India (Bombay) |
| `42` | GMT+06:00, Columbo (Columbo) |
| `43` | GMT+06:00, Central Asia (Almaty) |
| `44` | GMT+07:00, Bangkok (Bangkok) |
| `45` | GMT+08:00, China (Beijing) |
| `46` | GMT+08:00, Australia Western (Perth) |
| `47` | GMT+08:00, Singapore (Singapore) |
| `48` | GMT+08:00, Taipei (Hong Kong) |
| `49` | GMT+09:00, Tokyo (Tokyo) |
| `50` | GMT+09:00, Korea (Seoul) |
| `51` | GMT+09:30, Yakutsk (Yakutsk) |
| `52` | GMT+09:30, Australia Central (Adelaide) |
| `53` | GMT+09:30, Australia Central (Darwin) |
| `54` | GMT+10:00, Australia Eastern (Brisbane) |
| `55` | GMT+10:00, Australia Eastern (Sydney) |
| `56` | GMT+10:00, West Pacific (Guam) |
| `57` | GMT+10:00, Tasmania (Hobart) |
| `58` | GMT+10:00, Vladivostok (Vladivostok) |
| `59` | GMT+11:00, Central Pacific (Solomon Is) |
| `60` | GMT+12:00, New Zealand (Wellington) |
| `61` | GMT+12:00, Fiji (Fiji) |
| `62` | GMT-09:00, Alaska (Anchorage) |

<!-- END TABLE -->

## License

MIT © [Cisco-IE](https://github.com/cisco-ie/webex-time-zones)
