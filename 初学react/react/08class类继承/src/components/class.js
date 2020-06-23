//class类继承 依靠关键字extends例
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log('这是父类的方法 子类可以直接调用')
    }
}
class Chinese extends Person{
    //在子类里面要写自己的构造器 在构造器必须要有super函数 这里的super函数就相当于父类的构造器 并且要传参数
    constructor(name,age,IdNum){
        super(name,age)
        //现在在构造器里就可以只写专属自己的属性与方法了 注意这里要写在super函数后面
        this.IdNum = IdNum;
    }
}
class Japan extends Person{
    //在子类里面要写自己的构造器 在构造器必须要有super函数 这里的super函数就相当于父类的构造器 并且要传参数
    constructor(name,age){
        //现在在构造器里就可以只写专属自己的属性与方法了
        super(name,age)
    }
}

//现在我们要用Chinese类和japan类继承Person里面的东西
const chinese = new Chinese('zhangsan','22','87456187515**');
const japan = new Japan('tutu','20')
console.log(chinese,japan);