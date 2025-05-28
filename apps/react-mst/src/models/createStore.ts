import RootStore, { RootStoreModel, RootStoreEnv } from "./RootStore";
import { MsgDraft } from "./MsgDraft";
import { MsgItems, MsgItemModel } from "./MsgItems";
import { User } from "./User";
import shortid from "shortid";
import { SnapshotIn } from "mobx-state-tree";

const msgItemData: SnapshotIn<MsgItemModel> = {
  id: shortid(),
  title: "示例标题",
  content: "示例内容"
}

export const createStore = (): RootStoreModel => {
  const msgItems = MsgItems.create({
    items: [msgItemData]
  });
  const msgDraft = MsgDraft.create({
    title: "",
    content: ""
  });
  const user = User.create({
    id: "",
    firstName: "",
    lastName: "",
    age: 0
  })

  const env: RootStoreEnv = { msgDraft, msgItems, user }

  const rootStore = RootStore.create(
    {
      msgDraft,
      msgItems,
      user
    },
    env
  )

  return rootStore
}
