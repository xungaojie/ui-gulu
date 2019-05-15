import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
const expect = chai.expect

// function median($numbers) {
// 	sort($numbers);
// 	$totalNumbers = count($numbers);
// 	$mid = floor($totalNumbers / 2);

// 	return ($totalNumbers % 2) === 0 ? ($numbers[$mid - 1] + $numbers[$mid]) / 2 : $numbers[$mid];
// }

// console.log(median([1,3,6,8,9,12,1]))

new Vue({
	el: '#app',
	data: {
		message: "按钮"
	},
	methods: {
		handleButtonClick() {
			this.message = 'hhh'
		}
	}
});
// 单元测试
try {
	// 测试按钮图标
	{
		const creat = Vue.extend(Button)
		const vm = new creat({
			propsData: {
				icon: 'loading'
			}
		})
		vm.$mount()
		let el = vm.$el.querySelector('use')
		let icon = el.getAttribute('xlink:href')
		expect(icon).to.eq('#gulu-loading')
		vm.$el.remove()
		vm.$destroy()
	}
	// loading状态下  及时有icon  也要只显示loading
	{
			const creat = Vue.extend(Button)
			const vm = new creat({
				propsData: {
					icon: 'setting',
					loading: true
				}
			})
			vm.$mount()
			let el = vm.$el.querySelector('use')
			let icon = el.getAttribute('xlink:href')
			expect(icon).to.eq('#gulu-loading')
			vm.$el.remove()
			vm.$destroy()
	}
	// 图标放右边
	{
		const creat = Vue.extend(Button)
		const vm = new creat({
			propsData: {
				icon: 'setting',
				loading: true,
				iconPosition: 'right'
			}
		})
		let div = document.createElement('div')
		document.body.appendChild(div)
		vm.$mount(div)
		let el = vm.$el.querySelector('svg')
		let {
			order
		} = window.getComputedStyle(el)
		expect(order).to.eq('2')
		vm.$el.remove()
		vm.$destroy()
	}
	//点击事件
	{
		//mock
		const creat = Vue.extend(Button)
		const vm = new creat({
			propsData: {
				icon: 'setting',
				iconPosition: 'right'
			}
		})
		vm.$mount()
		const spy = chai.spy(function () {});
		vm.$on('click', spy)
		vm.$el.click()
		expect(spy).to.have.called()
	}
} catch (error) {

}