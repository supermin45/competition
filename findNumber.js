        /** 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。* */
        
        let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4];
        function findNum(arr) {
        	let result = [];
            for (let item of arr) {
            	result = result ^ item;
            }
            return result;
        }
     
        console.log('数组' + arr + '只出现一次的数次为'+ findNum(arr));