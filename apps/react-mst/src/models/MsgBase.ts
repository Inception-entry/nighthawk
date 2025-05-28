/*
 * @Author: SKSSSX 1270256946@qq.com
 * @Date: 2023-02-27 20:13:30
 * @LastEditors: SKSSSX 1270256946@qq.com
 * @LastEditTime: 2023-02-27 20:51:27
 * @FilePath: /demo/react-mst/src/models/MsgBase.ts
 * @Description: 消息
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { types } from "mobx-state-tree"

export const MsgBase = types.model("MsgBase", {
  title: "",
  content: "",
})
