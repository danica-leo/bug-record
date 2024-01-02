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
    debugger;
    if (!e) return;
    const { files: files4 } = e.target;
    const files1 = e.target.files;
    setIsLoading(true);
    const res = await import('xlsx');
    const files2 = e.target.files;
    setIsLoading(false);
    const files3 = e.target.files;

    console.table([files1, files2, files3]);
    console.log('is files1 === files2 ?', files1 === files2);
    console.log('is files1 === files3 ?', files1 === files3);
    console.log('is files2 === files3 ?', files2 === files3);
  };

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
