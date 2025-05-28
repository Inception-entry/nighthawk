import { observer } from "mobx-react-lite";
import { RootStoreModel } from "../../models/RootStore";
import useInject from "../../hooks/useInject";
import { getUserList } from "../../api/index";

const mapStore = (rootStore: RootStoreModel) => ({ user: rootStore.user });

const UserList = observer(() => {

  const { user } = useInject(mapStore);

  const getList = () => {
    getUserList({ page: "1" })
      .then((res: any) => {
        let { id, firstName, lastName, message } = res.data;
        console.log(message.length);
        user.setUser(String(id), firstName, lastName, message.length);
      });
  }
  
  getList();
  
  return (
    <div>
      <p>用户列表</p>
      <p
        style={{ fontVariant: "tabular-nums" }}
      >
        当前用户: { user.firstName + ' ' + user.lastName }, 消息数: { user.age }
      </p>
    </div>
  );
});

export default UserList;
