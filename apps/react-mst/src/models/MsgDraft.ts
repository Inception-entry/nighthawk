import { types, Instance, getEnv, getSnapshot, SnapshotIn, flow } from "mobx-state-tree";
import { RootStoreEnv } from "./RootStore";
import { addMessage, editMessage } from "../api/index";

export type MsgDraftModel = Instance<typeof MsgDraft>

const addMsg = (title: string, content: string) => {
  let obj = {
    userId: "1",
    title: title,
    content: content
  };
  return addMessage(obj).then((res: any) => console.log(res));
}

// 测试消息的增删改查操作
const editMsg = (id: string, title: string, content: string) => {
  let obj = {
    id: id,
    title: title,
    content: content,
  };
  return editMessage(obj).then((res: any) => console.log(res));
}

export const MsgDraft = types
  .model({
    id: types.optional(types.string, ''),
    title: types.optional(types.string, ''),
    content: types.optional(types.string, ''),
  })
  .actions(self => ({
    setId(id: string) {
      self.id = id;
    },
    setTitle(title: string) {
      self.title = title;
    },
    setContent(content: string) {
      self.content = content;
    },
    publish: flow(function *() {
      const { title, content } = getSnapshot(self);

      if (title && content) {
        const env = getEnv<RootStoreEnv>(self);
        const MsgToPublish: SnapshotIn<typeof MsgDraft> = {
          title,
          content
        };
        env.msgItems.publishDraft(MsgToPublish);
        yield addMsg(title, content);
        const user = yield env.user.updateUser();
        env.user.setUser(String(user.id), user.firstName, user.lastName, user.message.length);
        (self as MsgDraftModel).clear();
      }
    }),
    rePublish: flow(function * () {
      const { id, title, content } = getSnapshot(self);

      if (id && title && content) {
        const env = getEnv<RootStoreEnv>(self);
        yield editMsg(id, title, content);
        env.msgItems.getData();
        (self as MsgDraftModel).clear();
      }
    }),
    clear() {
      self.id = "";
      self.title = "";
      self.content = "";
    }
}))