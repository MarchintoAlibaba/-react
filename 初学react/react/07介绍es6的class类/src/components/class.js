//class关键字 是实现面向对象的新形式 例
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.info = 'aaa';//这是静态属性（不能再实例里访问的属性）
Person.show = function(){
    console.log('这是Person的静态方法')
}
Person.prototype.show = function(){
    console.log('这是动态方法')
}
let person = new Person('tian','20');
//person.name是实例属性
console.log(person,person.name,person.age);
//上面是以前的构造函数生成实例的方法 下面是以class类作为关键字实现面向对象的
class Student{
    //构造器 没当new的时候就会先执行构造器里面的代码
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static info = 'eee';//这是class关键字生成对象的静态属性 可以通过 Student.info访问
    show (){
        console.log('这是动态方法')
    }
    static show (){
        console.log('这是静态方法')
    }
}
let student = new Student('xiaoming','16');
console.log(student,student.name,student.age);