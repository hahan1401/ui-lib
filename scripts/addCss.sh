ts_import="import './index.css';"
cjs_require="require('./styles.css');"

cd ./dist

echo "$ts_import" > temp.js
cat index.js >> temp.js
mv temp.js index.js

echo "$cjs_require" > temp.cjs
cat index.cjs >> temp.cjs
mv temp.cjs index.cjs
