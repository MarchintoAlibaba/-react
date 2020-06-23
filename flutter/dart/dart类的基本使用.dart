main(List<String>args){
  var person = new Person();
  person.name = "xz";
  person.age = 18;
  person.eating();
}
//定义一个类 
class Person{
  //属性值
  String name;
  int age;
  //方法
  void eating(){
    print("${this.name}在吃东西");
  }
}