main(List<String>args){
  // 字符串几种书写方式
  var name1 = "xm";
  var name2 = 'xm';
  var name3 = '''
  xm
  xz
  ''';
  // 2.字符串的拼接
  final name = "why";
  final age = 18;
  final height = 1.88;
  print("name ${name} age ${age} height ${height}");

  //集合类型有 List Set Map
  //list类型 例如 数组
  List<String> names = ["james","kobe","weide","james"];
  //set类型里面的元素是无序且不能重复 这个一般用作list去重
  Set<int> nums = {101,111,112};
  //list去重 先将List类型编程Set类型 再转变成List类型
  List<String> newName = List.from(Set.from(names));
  print(newName);
  //Map存放键值对
  Map<String,dynamic> info = {
    "name":"xm",
    "age":18,
    "height":1.88,
  };
  print(info);
}