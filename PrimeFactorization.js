function GetPrimeFactors(num)
{
    let primes=[];
    while(num%2==0)
    {
        primes.push(2);
        num=num/2;
    }
    for(let i=3;i*i<num;i++)
    {
        if(num%i==0)
        {
            primes.push(i);
            num=num/i;
        }
    }
    if(num>2)
    {
        primes.push(num);
    }
    for(let i=0;i<primes.length;i++)
    {
        console.log(primes[i]);
    }
}
GetPrimeFactors(40);
