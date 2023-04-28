function GetValues(){
    let NumberArray=[];
    for(let i=0;i<10;i++)
    {
        var value=Math.floor(Math.random()*1000)
        if(value<100){
            value+=100;
        }
        //console.log(value);
        NumberArray.push(value);
    }
    NumberArray.sort();
    console.log(NumberArray);
    console.log("The second smallest element is: "+NumberArray[1]);
    console.log("The second largest element is: "+NumberArray[NumberArray.length-2]);
}
GetValues();