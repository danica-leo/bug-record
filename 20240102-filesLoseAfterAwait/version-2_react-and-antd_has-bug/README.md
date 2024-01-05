### antD版本确认了，也是正常的
antD 5.12.6-》 4.18.2
 "react": "^18.2.0", => "17.0.2"

     "react": "^17.0.1",
    "react-dom": "^17.0.1",

### 是react版本的问题
从dom变更断点入手，监听数据发生变化的瞬间。
逐步定位到值变更代码的模糊位置。
在最后位置使用单步调试，就可以准确定位到关键代码行。

### 遗留问题：react17哪里写错了呢？
    调用栈
    ```js
    else if (node.value !== toString(value)) {
      node.value = toString(value);
    }
    ```
    updateWrapper
    restoreControlledState(domElement, props);
    restoreControlledState$3
    restoreImpl => restoreControlledState$3
    getInstanceFromNode //看起来实现一模一样啊为什么会重置files？
    restoreStateOfTarget
    restoreStateIfNeeded
    enqueueStateRestore
    createAndAccumulateChangeEvent

    为何react会将input定义为需要restore的值？
    在react18中做了何种变更？

