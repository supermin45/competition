    function prime_number(num) {
        let i = 2;
        let arr = [];

        while(i <= num){
            if(num % i == 0){
                arr.push(i);
                num /= i;
            }else{
                i++;
            }
        }
        return get_result(arr);
    }
    
    function get_result(arr) {
        let str = '';
        for (let i in arr) {
            str += arr[i];
        }
        return str;
    }
    
    let num = 90;
    let string = prime_number(num);
    console.log(num + '=' +string);