import { types, Instance, flow } from "mobx-state-tree";
import { getUserList } from "../api/index";

export type UserModel = Instance<typeof User>

const getList = () => {
  return getUserList({ page: "1" })
    .then((res: any) => res);
}

export const User = types
  .model({
    id: types.string,
    firstName: types.string,
    lastName: types.string,
    age: types.number
  })
  .actions(self => ({
    setUser(id: string, firstName: string, lastName: string, age: number) {
      self.id = id;
      self.firstName = firstName;
      self.lastName = lastName;
      self.age = age;
    },
    updateUser: flow(function *() {
      const data = yield getList();
      if (data.code === 0) {
        let result = data.data;
        return result;
      }
    }),
  }));