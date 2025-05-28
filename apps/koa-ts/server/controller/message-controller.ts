import MsgService from "../service/message";

export default class MsgController {
  // 获取所有的消息列表
  static async get(ctx: any) {
    const service = new MsgService();
    return service.fetchMessageList(ctx);
  }
  // 新增消息
  static async add(ctx: any) {
    const {
      title = null,
      content = null,
      userId
    } = ctx.request.body;
    const service = new MsgService();
    return service.createMessage(ctx, title, content, userId);
  }
  // 编辑消息
  static async edit(ctx: any) {
    const {
      id,
      title = null,
      content = null,
    } = ctx.request.body;
    const service = new MsgService();
    return service.updateMessage(ctx, id, title, content);
  }
  // 删除消息
  static async remove(ctx: any) {
    const {
      id
    } = ctx.request.body;
    if (!id) {
      ctx.body = {
        code: -1,
        result: "缺少必要的参数{id}",
        data: null,
      };
    }
    const service = new MsgService();
    return service.deleteMessage(ctx, id);
  }
}