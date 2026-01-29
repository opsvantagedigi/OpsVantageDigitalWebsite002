const fs = require('fs');
const { SourceMapConsumer } = require('source-map');

async function main(){
  const [,, mapPath, lineStr, colStr] = process.argv;
  if(!mapPath || !lineStr || !colStr){
    console.error('Usage: node scripts/map_lookup.js <map-file> <line> <column>');
    process.exit(2);
  }
  const line = parseInt(lineStr,10);
  const column = parseInt(colStr,10);
  const raw = fs.readFileSync(mapPath,'utf8');
  const smc = await new SourceMapConsumer(JSON.parse(raw));
  const pos = smc.originalPositionFor({ line, column });
  console.log('Original position:');
  console.log(JSON.stringify(pos,null,2));
  if(pos.source){
    const src = smc.sourceContentFor(pos.source, true);
    if(src){
      const srcLines = src.split(/\r?\n/);
      const start = Math.max(0, (pos.line||1)-3);
      const end = Math.min(srcLines.length, (pos.line||1)+2);
      console.log('\nContext from source (approx):');
      for(let i=start;i<end;i++){
        const n = i+1;
        const prefix = (n === pos.line) ? '>' : ' ';
        console.log(prefix + ' ' + n + ' | ' + (srcLines[i]||''));
      }
    }
  }
  smc.destroy && smc.destroy();
}

main().catch(err=>{ console.error(err); process.exit(1); });
