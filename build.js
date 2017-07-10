const fs = require('fs');
const template = fs.readFileSync('readme.md').toString();
const timezones = require('.');

let table = `### ${timezones.length} Time Zones:\n`;
table += '\n';
table += '| Index | Timezone |\n';
table += '| :------ | :------ |\n';

timezones.forEach((tz, index) => {
	table += `| \`${index}\` | ${tz} |\n`;
});

const inject = /<!-- START TABLE -->(\w|\W)*<!-- END TABLE -->/gim;
const updated = template.replace(inject, `<!-- START TABLE -->\n${table}\n<!-- END TABLE -->`);
fs.writeFileSync('readme.md', updated);
