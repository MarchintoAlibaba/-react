main(List<String> args){
  final person = new Person("xz",18);
  person.eating();
  final p = new Person("xm");
  p.eating();
  Map<String,dynamic> info = {
    "name":"james",
    "age":34,
    "height":2.03
  };
  final info1 = new Person.fromMap(info);
  info1.eating();
  final reactangle = new Reactangle(20,30);
  print(reactangle.area);
}
//可以传参的构造函数 class类构造
class Person{
  String name;
  int age;
  double height;
  //改造构造函数 传参  加【】表示参数可选
  // Person(String name,[int age,double height]){
  //   this.name = name;
  //   this.age = age;
  // }
  //改造2 语法糖传参 其作用与上一种改造方式一样 开发中用这种
  Person(this.name,[this.age,this.height]);

  //命名构造函数
  Person.fromMap(Map<String,dynamic> map){
    this.name = map["name"];
    this.age = map["age"];
    this.height = map["height"];
  }

  //方法
  void eating(){
    print("${this.name}在吃饭");
  }
}

class Reactangle{
  int width;
  int height;
  int area;
  String name;
  //初始化列表 area的值可以在初始化的时候赋值 如下
  Reactangle(this.width,this.height):area = width * height,name = 'abc';
}