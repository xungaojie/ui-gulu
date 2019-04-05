import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
Vue.component('g-button', Button)
Vue.component('g-button-group',ButtonGroup)


// function median($numbers) {
// 	sort($numbers);
// 	$totalNumbers = count($numbers);
// 	$mid = floor($totalNumbers / 2);

// 	return ($totalNumbers % 2) === 0 ? ($numbers[$mid - 1] + $numbers[$mid]) / 2 : $numbers[$mid];
// }

// console.log(median([1,3,6,8,9,12,1]))

new Vue({
	el: '#app',
	data:{
			message: "按钮"
	},
	methods:{
		handleButtonClick(){
			this.message = 'hhh'
		}
	}
});