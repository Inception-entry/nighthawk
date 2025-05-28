import { observer } from "mobx-react-lite";
import { RootStoreModel } from "../../models/RootStore";
import useInject from "../../hooks/useInject";
import Message from "../Message/Message";
import "./messageList.less";

const mapStore = (rootStore: RootStoreModel) => ({ msgItems: rootStore.msgItems });

const MessageList = observer(() => {

  const { msgItems } = useInject(mapStore);

  msgItems.getData();

  return (
    <div className="message-list">
      <p className="message-list-title">消息列表</p>
      <div className="message-list-content">
        {msgItems.items.map(item => (
          <Message message={item} key={item.id} />
        ))}
      </div>
    </div>
  )
});

export default MessageList;