/*
 * @Author: Inception-entry batman_gotham@126.com
 * @Date: 2023-02-27 21:59:10
 * @LastEditors: Inception-entry batman_gotham@126.com
 * @LastEditTime: 2023-03-05 02:10:24
 * @FilePath: /demo/react-mst/src/models/RootStore.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { types, Instance } from "mobx-state-tree"
import { MsgDraft, MsgDraftModel } from "./MsgDraft"
import { MsgItems, MsgItemsModel } from "./MsgItems";
import { User, UserModel } from "./User";

export type RootStoreModel = Instance<typeof RootStore>
export type RootStoreEnv = {
  msgDraft: MsgDraftModel,
  msgItems: MsgItemsModel,
  user: UserModel
}

const RootStore = types.model("RootStore", {
  msgDraft: MsgDraft,
  msgItems: MsgItems,
  user: User
})

export default RootStore