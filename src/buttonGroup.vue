<template>
	<div class="g-button-group">
			<slot></slot>
	</div>
</template>

<script>
import button from './button'
	export default {
		name:'buttonGroup'
		}
</script>

<style lang="scss">
.g-button-group{
	display: inline-flex;
	vertical-align: middle;
	> .g-button{
		border-radius: 0;
		&:first-child{
			border-radius: 4px 0 0 4px 
		}
		&:last-child{
			border-radius: 0 4px 4px 0
		}
		&:not(:first-child){
			margin-left: -1px
		}
		&:hover{
			z-index: 1;
		}
	}
}

</style>