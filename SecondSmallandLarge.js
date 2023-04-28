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
    console.log(NumberArray);
    let largest=NumberArray[0],secondLargest=0,smallest=NumberArray[0],secondSmallest=NumberArray[0];
    for(let i=0;i<NumberArray.length;i++)
    {
        largest=Math.max(largest,NumberArray[i]);
        smallest=Math.min(smallest,NumberArray[i]);
    }
    for(let i=0;i<NumberArray.length;i++)
    {
        if(NumberArray[i]!=largest)
        {
            secondLargest=Math.max(secondLargest,NumberArray[i]);
        }
        if(NumberArray[i]!=smallest)
        {
            secondSmallest=Math.min(secondSmallest,NumberArray[i]);
        }
    }
    console.log("The second smallest element is: "+secondSmallest);
    console.log("The second largest element is: "+secondLargest);
}
GetValues();