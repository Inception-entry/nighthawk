import React from "react"
import { observer } from "mobx-react-lite"
import Button from "../Button/Button";
import "./message.less";
import { MsgItemModel } from "../../models/MsgItems";

/**
 * 取消事件冒泡
 * @param e
 */

const cancelBubble = (event: React.ChangeEvent<HTMLSelectElement>) => {
  event.stopPropagation()
  event.nativeEvent.stopImmediatePropagation()
};

type Props = {
  message: MsgItemModel
}

const Message: React.FunctionComponent<Props> = ({ message }) => {
  const handleRemove = (e: any) => { message.remove(); cancelBubble(e)};
  const handleSelect = () => message.select();

  return (
    <div className="message-wrapper" onClick={handleSelect}>
      <div>{message.title}</div>
      <div>{message.content}</div>
      <Button
        onClick={(e: void) => handleRemove(e)}
        label="删除" />
    </div>
  )
}

export default observer(Message);
