<script>
export let name = '';
export let type = 'range'
export let label = '';
export let min = 0;
export let max = 2.0;
export let step = 0.1;
export let value = .5;
export let onChange = () => {};
</script>

<div class="control-group">
    <label for={name}>{ label } <strong class="value">{ value }</strong></label>
    <input type={type} id={name} name={name} min={min} max={max} value={value} step={step} on:change={onChange}>
</div>

