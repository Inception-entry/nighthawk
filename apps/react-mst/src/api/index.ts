import {Service} from './request';
//获取用户列表
export function getUserList(config: { page: string; }){
    const params = new URLSearchParams();
    params.append('id', '1');

    return Service({
        url:'./api/user/list',
        params: params,
        method: 'get'
    })
}
// 获取消息列表
export function getMessageList(userId: string) {
    const params = new URLSearchParams();
    params.append('userId', userId);
    return Service({
        url:'./api/message/list',
        params: params,
        method: 'get'
    })
}
// 新增消息
export function addMessage(msgObj: any) {
    const params = new URLSearchParams();
    return Service({
        url:'./api/message/add',
        data: { params, ...msgObj },
        method: 'post'
    })
}

// 编辑消息
export function editMessage(msgObj: any) {
    const params = new URLSearchParams();
    return Service({
        url:'./api/message/edit',
        data: { params, ...msgObj },
        method: 'post'
    })
}
// 删除消息
export function deleteMessage(id: string) {
    const params = {'id': id};
    return Service({
        url:'./api/message/delete',
        data: params,
        method: 'post'
    })
}
export default { getUserList, addMessage, editMessage, deleteMessage }