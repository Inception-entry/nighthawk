import { observer } from "mobx-react-lite";
import React from "react";
import Button from "../Button/Button";
import { RootStoreModel } from "../../models/RootStore";
import useInject from "../../hooks/useInject";
import "./messageDraft.less";

const mapStore = (rootStore: RootStoreModel) => ({ msgDraft: rootStore.msgDraft })

const Message = observer(() => {
  const { msgDraft } = useInject(mapStore);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    msgDraft.setTitle(e.target.value);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    msgDraft.setContent(e.target.value);

  const publishDraft = () => msgDraft.publish();
  const rePublishDraft = () => msgDraft.rePublish();

  const isDisabled = () => {
    return msgDraft.title === "" || msgDraft.content === "";
  };

  let button;
    if (msgDraft.id !== "" && typeof msgDraft.id !== 'undefined') {
      button = <Button
        label="编辑"
        onClick={rePublishDraft}
      />;
    } else {
      button = <Button
        disabled={isDisabled()}
        label="新建"
        onClick={publishDraft}
      />
    }
  return (
    <div className="message-draft">
      <p className="message-draft-title">{msgDraft.id ? '编辑消息' : '创建新消息'}</p>
      <div className="message-draft-content">
        <label className="block">
          <span>Title: </span>
          <input
            type="text"
            value={msgDraft.title}
            onChange={handleTitleChange}
          />
        </label>
        <label className="block">
          <span>Content: </span>
          <input
            type="text"
            value={msgDraft.content}
            onChange={handleContentChange}
          />
        </label>
        <div className="operate">
          {button}
        </div>
      </div>
    </div>
  )
});

export default Message;
