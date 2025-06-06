/*
 * @Author: Inception-entry batman_gotham@126.com
 * @Date: 2023-02-25 12:37:22
 * @LastEditors: Inception-entry batman_gotham@126.com
 * @LastEditTime: 2023-02-26 23:22:07
 * @FilePath: /demo/koa-ts/ormconfig.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  "type": "sqlite",
  "database": "./database.sqlite",
  "synchronize": false,
  "logging": false,
  "cache": true,
  "entities": [
     "server/entity/**/*.ts"
  ],
  "migrations": [
     "server/migration/**/*.ts"
  ],
  "subscribers": [
     "server/subscriber/**/*.ts"
  ]
}