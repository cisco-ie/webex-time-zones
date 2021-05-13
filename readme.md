# webex-time-zones [![Build Status](https://img.shields.io/travis/cisco-ie/webex-time-zones.svg?style=flat-square&branch=master)](https://travis-ci.org/cisco-ie/webex-time-zones)

> 🌐 A small node package that helps with dealing with Webex's Timezone enumerated value

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
### getTimezone(index)
Returns the name of the timezone based on the WebEx Id/Enum Value

#### index
**Type:** `number`    
The enumerated value or index

### getIdByOffet(offset)
> **Note:**
>
> This is an approximation (https://stackoverflow.com/tags/timezone/info) as many time zones fall into a offset. You can try using the `<fallInDST>` webex xml attribute to allow webex to determine the DST offset of a given timezone and datetime.

Returns the first matching WebEx Id associated with the offset

#### offset
**Type:** `string` (XX:XX) or `integer` (-12 to 12)    
The GMT offset it must be a valid number between -12 to 12, or valid GMT offset hours. Please be aware that when using `integer` not all time zones can be used. For example India that uses a time zone with a 30 minute offset. If you need to support all time zones, use the `string` (hh:mm) argument.


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

## Related
If you found this client useful for collaboration, don't forget to star this repository and check other related open-source Cisco modules by the Innovation Edge team:

- [webex-api-client](https://github.com/cisco-ie/webex-api-client) - A node module to simplify interacting with Cisco WebEx XML-based APIs from the browser or server
- [rrule-to-webex](https://github.com/cisco-ie/rrule-to-webex) - Converts a RRULE (iCalendar RFC-5545) to Cisco's WebEx recurrence repeat XML tree.
- [cisco-tp-client](https://github.com/cisco-ie/cisco-tp-client) - A node API client to ease interactions with Cisco WebEx Telepresence-enabled endpoints / codecs
- [webex-date](https://github.com/cisco-ie/webex-date) - 🕰 Convert a JavaScript date type, RFC 2822, ISO-8601 to the WebEx XML API supported format.
- [webex-enum-types](https://github.com/cisco-ie/webex-enum-types) - 🍭 A JSON mapping of enumerated types for Cisco's WebEx XML API

## License

MIT © [Cisco Innovation Edge](https://github.com/cisco-ie/webex-time-zones)
