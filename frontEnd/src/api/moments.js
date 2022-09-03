import request from '@/utils/request';


/**
 * 
 * @param
 * offset: 起始索引号
 * limit：从offset开始计数limit条
 * @returns Promise
 */
export const getMoments = ({offset, limit}) =>  request({
    url:'/moments/getMoments',
    params:{offset, limit}
  })
