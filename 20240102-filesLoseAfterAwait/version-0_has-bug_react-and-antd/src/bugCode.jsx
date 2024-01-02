import { useState, useMemo } from 'react';
import { Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function BugCode() {
  const { isLoading, setIsLoading } = useState(false);

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

  const handleChange = async (e) => {
    console.log(e);
    debugger;
    if (!e) return;
    const files1 = e.target.files;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const files2 = e.target.files;
    setIsLoading(false);
    const files3 = e.target.files;

    console.table([files1, files2, files3]);
    console.log('is files1 === files2 ?', files1 === files2);
    console.log('is files1 === files3 ?', files1 === files3);
    console.log('is files2 === files3 ?', files2 === files3);
  }
  return (
    <div>
      ???
      {isLoading ? <LoadingOutlined /> : <Input onChange={handleChange}  type='file'/>}
    </div>
  );
}
