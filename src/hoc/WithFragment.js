import Vue from "vue";
const WithFragment = (Components) => {
	return Vue.component("WithFragment", {
		functional: true,
		render(createElement, context) {
			return Components.map((Component) => createElement(Component, {props: context.props }));
		}
	})
}
export default WithFragment;