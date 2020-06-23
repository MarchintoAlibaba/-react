main(List<String> args){
// var person = new Person();
// person.eating();

var p = new Person("kobe",44);
p.eating();
}
class Animal{
  int age;
  Animal(this.age);
  void eating(){
    print("在吃东西");
  }
} 
//类的继承 Person继承Animal
class Person extends Animal{
String name;
//如果要传参
Person(this.name,int age):super(age);
//重写方法
@override
void eating(){
  print("${this.name}${this.age}");
}
}