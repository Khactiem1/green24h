<template>
	<div class="tab-contaner">
		<div class="tab-nav-container">
			<ul class="flex flex-center justify-flex-start tab-nav">
				<li
					v-for="item in listTabItem"
					class="ms-tab-item"
					:key="item.tabKey"
					:class="[{ active: modelValue && modelValue === item.tabKey }]"
					@click="activeTab(item)"
					v-show="!item.hide"
				>
					<img :src="item.icon" v-if="item.icon && type == 'img'" class="tab-icon">
					<div class="tab-title">{{ item.title }}</div>
				</li>
			</ul>
		</div>
		<div class="tab-view">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
	props: {
		listTabItem: {
			type: Array,
			default: [],
		},
		modelValue: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'img',
		},
	},
	setup() {
		const { proxy } = getCurrentInstance();
		
		/**
		 * Thực hiện active tabItem
		 */
		const activeTab = async (tab) => {
			if(tab.tabKey != proxy.modelValue){
				proxy.$emit('update:modelValue', tab.tabKey);
				proxy.$emit('activeTab', tab);
			}
		};

		return {
			activeTab,
		};
	},
});
</script>

<style lang="scss" scoped>
.tab-contaner{
	height: 32px;
	position: relative;
	.tab-nav{
		list-style: none;
	}
	.ms-tab-item{
		.tab-icon{
			margin-right: 6px;
			// width: 14px;
			height: 14px;
			max-height: 14px;
		}
		background-color: #FFFFFF;
    padding: 9px 10px;
    border: solid 1px #D5DFE2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    white-space: nowrap;
    height: 32px;
    font-weight: 600;
    font-size: 12px;
    transition: all .15s ease-in-out;
    // border-bottom: none;
    position: relative;
    display: flex;
    align-items: center;
		cursor: pointer;
		&:not(:first-child){
			border-left: none;
		}
		&.active{
			color: var(--primary__color);
			&::before{
    		width: 100%;
			}
		}
		&::before{
			content: "";
			position: absolute;
			background-color: var(--primary__color);;
			width: 0%;
			transition: all ease-in-out .15s;
			height: 2px;
			left: 0;
			bottom: 0;
		}
	}
}
</style>
