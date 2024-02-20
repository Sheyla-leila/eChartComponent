// 本文件的函数用于对跨级对象进行增删
/**
 * 
 * @param rowObj 需要进行操作的原始对象
 * @param param 需要对 对象 进行的操作和相应的数值，结构为
 *         {
 *             create: {
 *                  key1: value1,
 *                  key2: value2,
 *                  ...
 *             },
 *             updata: {
 *                  key1: value1,
 *                  key2: value2,
 *                  ...
 *             },
 *             delete: [key1, key2, ...],
 *         }
 *         或者
 *         {
 *              key1: value1,
 *              key2: value2,
 *              ...
 *         }   （该种结构默认对 对象 执行的操作为新增或修改）
 */

export const CUD_Objet = (rowObj: Object, param:any) => {
const operateNameArr = Object.keys(param)
    let changeMap:any = {}
    const isCreate = operateNameArr.includes('create')  // 是否包含新增操作
    const isDelete = operateNameArr.includes('delete')  // 是否包含删除操作
    const isUpdata = operateNameArr.includes('updata')  // 是否包含修改操作

    const ObjDepth = countObjLevel(param)   // 判断传入对象的深度
    const operateArr = ['create', 'delete', 'updata']
    if(ObjDepth === 2) {
        // 当对象有两层深度时，说明结构为{操作类型-操作数据集合}，在该种情况下，若key不为operateArr数组中的任一项，则不支持该操作，一般是拼写错误，可以进行提示
        operateNameArr?.forEach?.((keyName: string) => {
            if(!operateArr.includes(keyName)){
                console.log(`不支持${keyName}操作，请检查拼写`)
            } 
        })
    }

    // 对对象进行新增和修改操作
    function cuObj(changeMapParam:any) {
        for(const key in changeMapParam) {
            let temp = rowObj
            const keyArr = key?.split('.')      // 用于分割字符串中的每个属性名称
            keyArr?.forEach?.((element:string, index:number) => {
                if(index < keyArr?.length -1) {
                    // 当找到最内层属性值后，temp记录的为字符串，此时修改值无法对原始对象进行修改，因此需要保留temp的对象结构，于是需要寻找最内层属性的上一层属性
                    // eg：修改option.lable.color，如果寻找到最内层属性，此时temp = '#FFFFFF'，而上一层属性时。temp = {color: '#FFFFFF}，此时temp记录的是option这个对象下color对象的地址，此时进行修改，是对option原始对象的修改
                    temp = temp[element]        // 一层一层寻找并记录下一层属性值
                } else {
                    temp[element] = changeMapParam[key]
                }
            })
        }
    }

    if(isCreate) {
        // 执行新增操作
        changeMap = param.create
        cuObj(changeMap)
    }
    if(isDelete) {
        // 执行删除操作
        changeMap = param.delete
        changeMap?.forEach?.((keyName:any) => {
            let temp = rowObj
            const keyArr = keyName?.split('.')      // 用于分割字符串中的每个属性名称
            keyArr?.forEach?.((element:string, index:number) => {
                if(index < keyArr?.length -1) {
                    temp = temp[element]        // 一层一层寻找并记录下一层属性值
                } else {
                    delete temp[element]  // 找到最内层属性后删除
                }
            })
        });
    }
    if(isUpdata || (!isCreate && !isDelete && !isUpdata)) {
        // 执行修改操作 || 操作数组中不包含增删改，则默认执行修改
        if(isUpdata) {
            changeMap = param.updata
        } else {
            changeMap = param
        }
        cuObj(changeMap)
    }
}

// 此处用于计算对象的层数，后续需要进行晚上，以达到判断任意一个变量是否为空
export const countObjLevel = (obj:any) => {
    let level = 1;// 初始对象的层数
    let objValue = Object.values(obj);
    for (let i = 0; i < objValue.length; i++) {
    if (typeof objValue[i] == 'object') {
        if (!Array.isArray(objValue[i])) {
        return countObjLevel(objValue[i]) + 1;
        }
    }
    }
    return level;
}