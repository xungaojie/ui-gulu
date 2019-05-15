const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
	// BDD 行为驱动测试
	it('存在.', () => {
		expect(Button).to.be.ok
	});
	it('可以设置icon.', () => {
		const creat = Vue.extend(Button);
		const vm = new creat({
			propsData: {
				icon: 'loading'
			}
		}).$mount();
		let el = vm.$el.querySelector('use');
		let icon = el.getAttribute('xlink:href');
		expect(icon).to.eq('#gulu-loading');
		vm.$destroy();
	});
	it('可以设置loading.', () => {
		const creat = Vue.extend(Button);
		const vm = new creat({
			propsData: {
				icon: 'setting',
				loading: true
			}
		});
		vm.$mount();
		let el = vm.$el.querySelector('use');
		let icon = el.getAttribute('xlink:href');
		expect(icon).to.eq('#gulu-loading');
		vm.$destroy();
	});
	it('图标放右边.', () => {
		const creat = Vue.extend(Button);
		const vm = new creat({
			propsData: {
				icon: 'setting',
				loading: true,
				iconPosition: 'right'
			}
		});
		let div = document.createElement('div');
		document.body.appendChild(div);
		vm.$mount(div);
		let el = vm.$el.querySelector('svg');
		let { order } = window.getComputedStyle(el);
		expect(order).to.eq('2');
		vm.$destroy();
	});
	it('点击事件', () => {
		//mock
		const creat = Vue.extend(Button);
		const vm = new creat({
			propsData: {
				icon: 'setting',
				iconPosition: 'right'
			}
		});
		vm.$mount();
		const callback = sinon.fake();
		vm.$on('click', callback)
		vm.$el.click()
		expect(callback).to.have.been.called
	});
})