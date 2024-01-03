### 使用了parcel来打包简易的react项目
[什么是 PARCEL 以及为什么您应该关心](https://www.codementor.io/@charlietango/what-is-parcel-and-why-you-should-care-m33g35cic)

### 复习了react的如下钩子：useMemo，useCallback
以及使用不同方式在react中声明函数的区别


### 遗留问题
1.发现仅仅几行代码，打包后的文件却有1.7MB，是否使用webpack可以打出更小的包？
2.scripts下列指令哪里有问题？
···
    "build": "parcel build index.html",
    "report": " parcel build index.js --reporter @parcel/reporter-bundle-analyzer"
···
### 遗留问题2:
发现react18也有问题，files是没丢失，但是input组件显示缺失了文件名
因为新渲染的input是另一个了