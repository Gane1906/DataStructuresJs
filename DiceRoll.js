function RollDice()
{
    const dieMap = new Map([
        [1,0],[2,0],
        [3,0],[4,0],
        [5,0],[6,0]
    ]);
    while(dieMap.get(1)<10&&dieMap.get(2)<10&&dieMap.get(3)<10&&dieMap.get(4)<10&&dieMap.get(5)<10&&dieMap.get(6)<10)
    {
        let dice=Math.floor(Math.random()*10)%7;
        dieMap.set(dice,dieMap.get(dice)+1)
    }
    for(let i=1;i<=6;i++)
    {
        console.log("dice: "+i+" value: "+dieMap.get(i));
    }
    
    let max=min=dieMap.get(1);
    for(let i=1;i<=6;i++)
    {
        max=Math.max(dieMap.get(i),max);
        min=Math.min(dieMap.get(i),min);
    }
    console.log("The max times rolled dice number is: "+max);
    console.log("The min times rolled dice number is: "+min);
}
RollDice();