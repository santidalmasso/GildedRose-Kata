export class ItemQuality
{
    private value: number
    public static readonly MIN_VALUE = 0
    public static readonly MAX_VALUE = 50
    public static readonly NORMAL_STEPS = 1
    
    constructor(quality: number)
    {
        this.value = quality
    }

    public getValue(): number
    {
        return this.value
    }
    
    public increase(isExpiredItem: boolean, n: number = ItemQuality.NORMAL_STEPS): void
    {
        if(this.isNegativeNumber(n)){
            throw new Error('Cannot increase a negative number')
        }

        let futureValue: number;
        
        if(isExpiredItem){
            futureValue = this.value + 2*n
        }else{
            futureValue = this.value + n
        }
        
        if(futureValue >= ItemQuality.MAX_VALUE){
            this.value = ItemQuality.MAX_VALUE
        }else{
            this.value = futureValue
        }
    } 

    public decrease(isExpiredItem: boolean, n: number = ItemQuality.NORMAL_STEPS): void
    {
        if(this.isNegativeNumber(n)) {
            throw new Error('Cannot decrease a negative number')
        }

        let futureValue: number;
        
        if(isExpiredItem){
            futureValue = this.value - 2*n
        }else{
            futureValue = this.value - n
        }

        if(futureValue <= ItemQuality.MIN_VALUE){
            this.value = ItemQuality.MIN_VALUE
        }else{
            this.value = futureValue
        }
    }

    public reset(): void
    {
        this.value = 0
    }

    private isNegativeNumber(n: number): boolean
    {
        return n < 0 
    }

}