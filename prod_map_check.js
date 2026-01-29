const fs=require('fs');
const p='prod_chunk_db994.map';
if(!fs.existsSync(p)){console.error('map file not found:',p); process.exit(2);} 
const j=JSON.parse(fs.readFileSync(p,'utf8'));
const names=j.names||[];
const matches=names.filter(n=>n==='rK'||(typeof n==='string' && n.includes('rK')));
console.log('names_total:',names.length);
console.log('exact_match:',names.includes('rK'));
console.log('matches_count:',matches.length);
if(matches.length>0) console.log('sample_matches:',matches.slice(0,20));
