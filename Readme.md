# Node.js basics

### Running task create.js:

```
node src/fs/create.js
```

### Running task copy.js:

```
node src/fs/copy.js
```

### Running task rename.js:

```
node src/fs/rename.js
```

### Running task delete.js:

```
node src/fs/delete.js
```

### Running task list.js:

```
node src/fs/list.js
```

### Running task read.js:

```
node src/fs/read.js
```

### Running task env.js:

```
for Bash:
RSS_name1=value1 RSS_name2=value2 node src/cli/env

for Powershell:
$env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env
```

### Running task args.js:

```
node src/cli/args --propName value --prop2Name value2
```

### Running task cjsToEsm.cjs.js:

```
node src/modules/cjsToEsm.mjs
or
node src/modules/index.js
```

После запуска index.js, будет запущен сервер на http://localhost:3000/, порт можно поменять перед запуском. Остановить сервер можно с помощью CTRL+C. Запуск index.js необходим для проверки экспортов из cjsToEsm.mjs.

### Running task calcHash.js:

```
node src/hash/calcHash.js
```
