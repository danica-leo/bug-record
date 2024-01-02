### 使用了parcel来打包简易的react项目
[什么是 PARCEL 以及为什么您应该关心](https://www.codementor.io/@charlietango/what-is-parcel-and-why-you-should-care-m33g35cic)


### 遗留问题
1.发现仅仅几行代码，打包后的文件却有1.7MB，是否使用webpack可以打出更小的包？
2.scripts下列指令哪里有问题？
···
    "build": "parcel build index.html",
    "report": " parcel build index.js --reporter @parcel/reporter-bundle-analyzer"
···