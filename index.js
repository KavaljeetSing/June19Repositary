//Factory Function
function createCircle(radius){
return{
     radius,
    draw: function(){
        console.log('draw');
    }
};
}
const circle = createCircle(1);
circle.draw();

//Constructor function
function Circle(radius){
    console.log('this',this);
    this.radius=radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new circle(1);


const Circle1=new Function('radius', `
{
    this.radius=radius;
    this.draw = function(){
        console.log('draw');
    }
`);


