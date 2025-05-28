import UserController from "@/controller/user-controller";
import MsgController from "@/controller/message-controller";
import Router from "koa-router";

const router = new Router();

router.get('/api/user/list', UserController.get); // 获取用户列表
router.get('/api/message/list', MsgController.get); // 获取消息列表
router.post('/api/message/add', MsgController.add); // 增加消息
router.post('/api/message/edit', MsgController.edit); // 编辑消息
router.post('/api/message/delete', MsgController.remove) // 删除消息

export default router;
