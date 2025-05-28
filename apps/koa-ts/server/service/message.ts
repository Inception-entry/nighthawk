import { AppDataSource } from "../data-source";
import {Message} from "../entity/Message";

export default class UserService {
  async fetchMessageList(ctx: any) {
    const msgRepository = AppDataSource.getRepository(Message);
    const msgs = await msgRepository.find({relations: ["user"]});
    if (msgs) {
      const data = {
        msgs,
      };
      ctx.body = {
        code: 0,
        result: "ok",
        data,
      };
    }
  }
  async createMessage(ctx: any, title: string, content: string, userId: any) {
    const msg = new Message();
    const msgRepository = AppDataSource.getRepository(Message);
    const hasMsg = await msgRepository.findOneBy({ title: title });
    if (!hasMsg) {
      if (title) {
        msg.title = title;
      }
      if (content) {
        msg.content = content;
      }
      if (userId) {
        msg.user = userId
      }
      msg.createTime = new Date();
      msg.updateTime = new Date();
      await msgRepository.save(msg);
      ctx.body = {
        code: 1,
        result: "done",
        data: {
          ...msg,
        },
      }
    } else {
      ctx.body = {
        code: -1,
        result: "fail",
        data: null,
      };
    }
  }
  async updateMessage(ctx: any, id: number, title: string, content: string) {
    const msg = new Message();
    const msgRepository = AppDataSource.getRepository(Message)
    const hasMsg = await msgRepository.findOne({ where: {id: id}, relations: ["user"] });
    if (hasMsg) {
      if (title) {
        msg.title = title;
      }
      if (content) {
        msg.content = content;
      }
      msg.updateTime = new Date();
      await msgRepository.update({ id }, msg);
      ctx.body = {
        code: 1,
        result: "done",
        data: {
          ...msg,
        },
      };
    } else {
      ctx.body = {
        code: -1,
        result: "fail",
        data: null,
      };
    }
  }
  async deleteMessage(ctx: any, id: number) {
    const msgRepository = AppDataSource.getRepository(Message)
    const hasMsg = await msgRepository.findOne({ where: {id: id}, relations: ["user"] });
    if (hasMsg) {
      await msgRepository.remove(hasMsg);
      ctx.body = {
        code: 1,
        result: "done",
        data: {
          "msg": "删除消息成功，消息的ID：" + id,
        },
      };
    } else {
      ctx.body = {
        code: -1,
        result: "fail",
        data: null,
      };
    }
  }
}