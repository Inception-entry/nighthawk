import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
export default class UserService {
  async fetchUser(ctx: any, id: number | undefined) {
    const userRepository = AppDataSource.getRepository(User);
    const hasUser = await userRepository.findOne({
      where: { id: id },
      relations: ["message"],
    });
    if (hasUser) {
      const data = {
        ...hasUser,
      };
      ctx.body = {
        code: 0,
        result: "成功返回用户信息",
        data,
      };
    } else {
      ctx.body = {
        code: -1,
        result: "未找到指定用户",
        data: null,
      };
    }
  }
  async updateUser(ctx: any, id: number, firstName: string, lastName: string, age: number) {
    const user = new User();
    const userRepository = AppDataSource.getRepository(User);
    const hasUser = await userRepository.findOneBy({ id: id });
    if (hasUser) {
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      if (age) {
        user.age = age;
      }
      await userRepository.update({ id }, user);
      ctx.body = {
        code: 0,
        result: "done",
        data: {
          ...user,
        },
      };
    } else {
      ctx.body = {
        code: -1,
        result: "未找到指定用户",
        data: null,
      };
    }
  }
}