<template>
	<button class="g-button">
		<slot></slot>
	</button>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus" scoped>
.g-button{
		font-size: var(--font-size);
		height: var(--button-height);
		background: var(--button-bg);
		border-radius: var(--border-radius);
		color: var(--color);
		border:1px solid var(--border-color);
		padding:0 1em;
		&:hover{
				border-color: var(--border-color-hover)
		}
		&:active{
				background-color: var(--button-active-bg)
		}
		&:focus{
				outline: none
		}
}
</style>