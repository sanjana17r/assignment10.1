class rectangle //class named rectangle is is created
{
constructor(l,b)//length(l),breadth(b) as arguments to constructor.
   {
      this.length = l;
      this.breadth = b;
   }
 get calculatearea() //method used to calculate area,hence returns area.
     {
     return this.length*this.breadth;
     }  
}
var rectangle1= new rectangle(20,10);//new object is created named rectangle1
console.log(rectangle1.calculatearea);//the area of the given rectangle is calculated.