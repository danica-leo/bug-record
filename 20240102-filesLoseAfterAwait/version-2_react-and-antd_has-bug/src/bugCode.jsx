import React, { useState, useMemo, useCallback } from 'react';
import { Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

//该版本复现问题失败，查询开发者工具后发现antDesign的Input组件在不同版本中行为差别极大，再开一个与已知bug项目antDesign版本一致的项目进行复现
export default function BugCode() {
  console.log('BugCode repeat', performance.now());
  const [isLoading, setIsLoading] = useState(false);

  //在组件首次渲染时会自动执行传入useMemo的第一个参数
  // const handleChangeWithMemo = useMemo(async (e) => {
  //   console.log(e);
  //   debugger;
  //   if (!e) return;
  //   const files1 = e.target.files;
  //   setIsLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const files2 = e.target.files;
  //   setIsLoading(false);
  //   const files3 = e.target.files;

  //   console.table([files1, files2, files3]);
  //   console.log('is files1 === files2 ?', files1 === files2);
  //   console.log('is files1 === files3 ?', files1 === files3);
  //   console.log('is files2 === files3 ?', files2 === files3);
  // }, []);

  //不会执行
  // const handleChangeWithCallback = useCallback(async (e) => {
  //   console.log(e);
  //   debugger;
  //   if (!e) return;
  //   const files1 = e.target.files;
  //   setIsLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const files2 = e.target.files;
  //   setIsLoading(false);
  //   const files3 = e.target.files;

  //   console.table([files1, files2, files3]);
  //   console.log('is files1 === files2 ?', files1 === files2);
  //   console.log('is files1 === files3 ?', files1 === files3);
  //   console.log('is files2 === files3 ?', files2 === files3);
  // }, []);

  //不会执行，但每次渲染会生成新的函数
  const handleChange = async (e) => {
    console.log(e);
    //给e.target.files加上一个代理器监听其行为
    //数组可以用代理器吗？可以
    //可以用proxy替换掉e.nativeEvent.target.files以及e.target.files吗？ 不能，看起来像是被设定了只能设置FileList类型的值

    // 将node.files绑定到全局，设置在调试器工具里监视其值的变化
    // 同时打断点运行代码，观察在哪个步骤该值发生了变化
    // 删除了input节点
    // 添加了loading图标
    // 目前还没有发生值的变化

    //似乎在这里发生了updateFunctionComponent
    // unstable_runWithPriority
    // try finally????
    // restoreStateIfNeeded
    // createAndAccumulateChangeEvent
    // 为何react会将input定义为需要restore的值？
    // 在react18中做了何种变更？
    // 单步调试挺好用的
    window.temp1 = e.nativeEvent.target
    if (!e) return;
    const files1 = e.target.files;
    setIsLoading(true);
    const res = await import('xlsx');
    debugger
    //是react在什么地方对e.target.files进行了修改？
    const files2 = e.target.files;
    setIsLoading(false);

    console.table([files1, files2]);
    console.log('is files1 === files2 ?', files1 === files2);
  };

  //确认数组可以用代理器
  // const arr1 = []
  // const arr1Proxy = new Proxy(arr1, {
  // get(target, propKey, receiver) {
  //   console.log('get', propKey);
  //   return Reflect.get(target, propKey, receiver);
  // },
  // set(target, propKey, value, receiver) {
  //   console.log('set', propKey, value);
  //   return Reflect.set(target, propKey, value, receiver);
  // },
  // });

  // function handleChange2(e) {
  //   console.log(e);
  //   debugger;
  //   if (!e) return;
  //   const files1 = e.target.files;
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     const files2 = e.target.files;
  //     setIsLoading(false);
  //     const files3 = e.target.files;

  //     console.table([files1, files2, files3]);
  //     console.log('is files1 === files2 ?', files1 === files2);
  //     console.log('is files1 === files3 ?', files1 === files3);
  //     console.log('is files2 === files3 ?', files2 === files3);
  //   }, 1000);
  // }

  return (
    <div>
      ???
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Input onChange={handleChange} type='file' />
      )}
    </div>
  );
}
