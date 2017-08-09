function get_Fibonacci(n) {
        	let n1 = 0;
        	let n2 = 1;

        	let i = 3;
        	let sum = 0;
        	while (i <= n) {
        		sum = n1 + n2;
        		n1 = n2;
        		n2 = sum;
        		i++;
        	}
        	return sum;
        }
        let n = prompt('查找斐波那契数列第N个数,请输入数字N:')
        console.log('斐波那契数列第'+n+'个数'+'='+get_Fibonacci(n));