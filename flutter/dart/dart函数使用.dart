main(List<String>args){
  print(sum(20,30));
  info("xm",18,1.88);
  info1("xz");
  info2("xl",height:1.88);
  hs(params);
  print(hsf());
  List<String> starName = ["longduo","piersi","aifushen","jodan"];
  //匿名函数
  starName.forEach((item){
    print(item);
  });
  //箭头函数的匿名函数 只有在一行代码的时候才可以用箭头函数
  starName.forEach((item) => print(item));
}
//声明一个函数 函数名 sum sum前面的int表示该函数返回值为整数类型 参数num1和num2也为整数类型
int sum(int num1,int num2){
  return num1 + num2;
}
//函数中的参数问题 必传参数和可传参数
//必传参数
void info(String name,int age,double height){
  print("${name} ${age} ${height}");
}
//可传参数分为两种 
//位置方式可传 在可传参数加上数组括号
void info1(String name,[int age,double height]){
  print("${name} ${age} ${height}");
}
//命名方式可传 在可传参数加上花括号
void info2(String name,{int age,double height}){
  print("${name} ${age} ${height}");
}
// 参数默认值 只能在可选参数上使用
void info3(String name,[int age = 17,double height = 1.77]){
  print("${name} ${age} ${height}");
}
//函数可以作为另一个函数的参数 也可以作为另一个函数的返回值
//作为参数
void hs(Function func){
  func();
}
void params(){
  print('hello world');
}
//作为返回值
String hsf(){
  return hsf1();
}
String hsf1(){
  return "函数返回值";
}




