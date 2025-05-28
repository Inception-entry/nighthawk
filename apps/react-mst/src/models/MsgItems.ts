import { types, Instance, getParent, getEnv, cast, destroy, SnapshotIn, flow } from "mobx-state-tree"
import { MsgBase } from "./MsgBase";
import { MsgDraftModel } from "./MsgDraft";
import { RootStoreEnv } from "./RootStore";
import shortid from "shortid";
import { deleteMessage, getMessageList } from "../api/index";

const delMsg = (id: string) => {
  return deleteMessage(id).then((res: any) => res);
}
const getMsgList = (userId: string) => {
  return getMessageList(userId).then((res:any) => res.data.msgs);
}
export type MsgItemModel = Instance<typeof MsgItem>
export type MsgItemsModel = Instance<typeof MsgItems>

const MsgItem = types
  .compose(
    MsgBase,
    types.model({
      id: types.identifier
    })
  )
  .actions(self => ({
    remove() {
      const parent = getParent<MsgItemsModel>(self, 2);
      parent.removeItem(cast(self));
    },
    select() {
      const parent = getParent<MsgItemsModel>(self, 2);
      parent.selectItem(cast(self));
    }
  }))

export const MsgItems = types
  .model({
    loading: types.optional(types.boolean, false),
    items: types.optional(types.array(MsgItem), [])
  })
  .actions(self => ({
    publishDraft: (msgDraft: SnapshotIn<MsgDraftModel>) => {
      const msgToPublish = { ...msgDraft, id: shortid() }
      self.items.unshift(msgToPublish);
    },
    removeItem: flow(function *(item: MsgItemModel) {
      const data = yield delMsg(item.id);
      if (data.code === 1) {
        const env = getEnv<RootStoreEnv>(self);
        const user = yield env.user.updateUser();
        env.user.setUser(String(user.id), user.firstName, user.lastName, user.message.length);
        destroy(item);
      }
    }),
    selectItem: (item: MsgItemModel) => {
      console.log(item.id, item.title, item.content);
      const env = getEnv<RootStoreEnv>(self);
      env.msgDraft.setId(item.id);
      env.msgDraft.setTitle(item.title);
      env.msgDraft.setContent(item.content);
    },
    // 异步获取消息列表
    getData: flow(function * () {
      self.loading = true;
      try {
          const data = yield getMsgList("1");
          data.forEach((item: any) => {
            item.id = String(item.id);
          });
          self.items = data.reverse();
      } catch (err) {
          console.log(err);
      }
      self.loading = false;
    })
  }));