import UserService from "../service/user";

export default class UserController {
  // 获取某一用户的信息
  static async get(ctx: any) {
    const { id } = ctx.request.query;
    if (!id) {
      ctx.body = {
        code: -1,
        result: "缺少必要的参数{id}",
        data: null,
      };
    }
    const service = new UserService();
    return service.fetchUser(ctx, id);
  }
  // 更新用户信息
  static async post(ctx: any) {
    const { id, firstName = null, lastName = null, age = 0 } = ctx.request.body;
    const service = new UserService();
    return service.updateUser(ctx, id, firstName, lastName, age);
  }
}
