// dart2是强类型语言
void main(List<String>args){
  //1.明确声明变量 （制定类型）
  int age = 18;
  String name = 'why';
  double height = 1.88;
  print(name);
  print(age);
  print(height);
  print("${name} ${age} ${height}");
  print(name.runtimeType);//返回变量类型
  // 2.类型推导方式
  // 声明完后也有类型 且后期不可变
  var message = "hello world";
  print(message);
  print(message.runtimeType);
  //const/final 赋的值后期不能更改 
  //区别是const必须直接赋值常量 final可以通过程序运行时赋值
  const message1 = 'hello world';
  final message2 = 'hello world';
  //dynamic(动态的 后期可以直接赋值更改值的类型)
  dynamic data = 'hellow world';
  data = 123;
}