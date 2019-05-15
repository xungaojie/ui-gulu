<template>
	<button class="g-button"  @click="handleClick" @mouseup = "handleMouseUp" :class="[`icon-${iconPosition}`]" :gulu-click-animating-without-extra-node = 'animation'>
		<g-icon class="g-icon" :class="{loading:loading || icon === 'loading'}" :name='loading?"loading":icon'></g-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
import icon from './icon'
export default {
		props:{
			icon:{},
			iconPosition:{
				default:'left'
			},
			loading:{
			}
		},
		data(){
			return{
				animation:false
			}
		},
		components:{
			'g-icon':icon
		},
		methods:{
			handleMouseUp(){
				this.animation = true
				setTimeout(() => {
					this.animation = false
				},300)
			},
			handleClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped lang="scss">
@keyframes loading {
	0%{ transform: rotate(0deg); }
	100%{ transform: rotate(360deg); }
}
@keyframes animationWidthOut {
	0%{
	 	border: 2px solid #096dd9;
			left: -2px;
			top: -2px;
			opacity:0.2;
	}
	100%{
			border: 8px solid #096dd9;
			left: -8px;
			top: -8px;
			opacity:0;
	}
}
[gulu-click-animating-without-extra-node = true]{
	 &:after{
			content: '';
			display: block;
			position: absolute;
		 border: 0px solid #096dd9;
			left: 0px;
			width: 100%;
			height: 100%;
			top:0px;
			border-radius: inherit;
			animation: animationWidthOut .3s infinite linear;
		}
}
.g-button{
		position: relative;
		font-size: var(--font-size);
		height: var(--button-height);
		background: var(--button-bg);
		border-radius: var(--border-radius);
		color: var(--color);
		border:1px solid var(--border-color);
		padding:0 1em;
		vertical-align: middle;
		display: inline-flex;
		align-items: center;
		fill: var(--color);
		&:hover{
				// border-color: red;
				color: var(--hover-color);
				fill: var(--hover-color)	;
				border-color: var(--border-color-hover);
		}
		&:active{
				background-color: var(--button-active-bg);
		}
		&:focus{
				outline: none;
		}
		.g-icon{
				width: 1em;
				height: 1em;
				vertical-align: middle;
				margin-right: 0.1em;
				margin-left: 0;
				order: 1;
				color: inherit;
				fill: inherit;
				&.loading{
					animation: loading 2.5s infinite linear;
				}
		}
		.content{
				order :2;
				display :flex;
				align-items: center;
				line-height: 1em;
		}
		&.icon-right{
				.g-icon{
					order: 2;
					margin-left: 0.1em;
					margin-right: 0;
				}
				.content{
					order: 1;
				}
		}
}


</style>