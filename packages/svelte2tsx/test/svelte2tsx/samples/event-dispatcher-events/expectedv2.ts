///<reference types="svelte" />
;
import { createEventDispatcher, abc } from "svelte";
function render() {

    

    const notDispatch = abc();
    const dispatch = createEventDispatcher();

    dispatch('hi', true);

    function bye() {
        const bla = 'bye';
        dispatch(bla, false);
    }
;
async () => {

 { svelteHTML.createElement("button", {  onclick:() => dispatch('btn', ''),}); }};
return { props: {}, slots: {}, getters: {}, events: {'btn': __sveltets_1_customEvent, 'hi': __sveltets_1_customEvent, 'bye': __sveltets_1_customEvent} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(__sveltets_1_with_any_event(render()))) {
}