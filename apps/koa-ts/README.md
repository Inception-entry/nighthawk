# koa-ts

## 后台服务启动脚本
npm run serve

## node版本
16.16.0

## 目录结构
--controller
--entity 数据库实体类
    ---User.ts 
--routes
    ---content.ts 路由
--service
    ---user.ts 调用-增删改查（业务逻辑）
--tools 工具函数
--index.ts  启动文件

## 数据库迁移
1. 创建迁移文件
typeorm migration:create server/migration/addingMessageTable
2. 运行迁移文件**
npx typeorm-ts-node-commonjs migration:run -d ./server/data-source.ts
3. 回滚迁移文件**
npx typeorm-ts-node-commonjs migration:revert -d ./server/data-source.ts
4. 生成迁移文件
typeorm migration:generate -n addingMessageTable

## 返回体结构
```bash
// 成功类返回
ctx.body = {
    code: 0,
    result: "done",
    data: {
        ...user,
    },
};
// 提示类返回
ctx.body = {
    code: 1,
    result: "warn",
    data: null,
};
// 错误类返回
ctx.body = {
    code: -1,
    result: "fail",
    data: null,
};
```
### code 通用状态码，详细解读
-  0: 成功
-  1: 提示
- -1: 错误

### code 其他状态码为业务错误代码，详见每个模块



