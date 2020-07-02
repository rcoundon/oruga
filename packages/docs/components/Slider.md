---
title: Slider
---

# Slider

> A slider to select a value or range from a given range

---

## Examples

### Base

::: demo

```html
<template>
  <section>
    <o-field label="Simple">
      <o-slider v-model="value"></o-slider>
    </o-field>

    <o-field label="Warning">
      <o-slider v-model="value" variant="warning"></o-slider>
    </o-field>

    <o-field label="Large">
      <o-slider v-model="value" size="large"></o-slider>
    </o-field>

    <o-field label="Disabled">
      <o-slider :value="30" disabled></o-slider>
    </o-field>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        value: 5
      };
    }
  };
</script>
```

:::

### Customize

::: demo

```html
<template>
  <section>
    <o-field label="Tooltip type">
      <o-slider v-model="sliderValue" :tooltip-variant="sliderType"></o-slider>
    </o-field>

    <o-field label="Hide tooltip">
      <o-slider :tooltip="false"></o-slider>
    </o-field>

    <o-field label="Custom tooltip label">
      <o-slider :custom-formatter="val => val + '%'"></o-slider>
    </o-field>

    <o-field label="Rounded thumb">
      <o-slider rounded></o-slider>
    </o-field>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sliderValue: 0
      };
    },
    computed: {
      sliderType() {
        if (this.sliderValue > 25 && this.sliderValue < 75) {
          return "warning";
        } else if (this.sliderValue >= 75) {
          return "success";
        }
        return "danger";
      }
    }
  };
</script>
```

:::

### Tick and label

::: demo

```html
<template>
  <section>
    <o-field label="Show ticks">
      <o-slider :min="1" :max="10" ticks></o-slider>
    </o-field>

    <o-field label="Custom tick and label">
      <o-slider size="medium" :min="0" :max="10">
        <template v-for="val in [3, 5, 8]">
          <o-slider-tick :value="val" :key="val">{{ val }}</o-slider-tick>
        </template>
      </o-slider>
    </o-field>

    <o-field label="Fan">
      <o-slider :min="0" :max="3" aria-label="Fan" :tooltip="false">
        <o-slider-tick :value="0">Off</o-slider-tick>
        <o-slider-tick :value="1">Low</o-slider-tick>
        <o-slider-tick :value="2">High</o-slider-tick>
        <o-slider-tick :value="3">Auto</o-slider-tick>
      </o-slider>
    </o-field>
  </section>
</template>

<script>
  export default {};
</script>
```

:::

### Range

::: demo

```html
<template>
  <section>
    <o-field>
      <o-slider v-model="numbers" :min="1" :max="15" :step="0.5" ticks>
      </o-slider>
    </o-field>

    <o-field>
      <o-slider
        v-model="numbers2"
        variant="danger"
        :min="-2"
        :max="8"
        :step="2"
      >
      </o-slider>
    </o-field>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        numbers: [2, 5],
        numbers2: [2, 6]
      };
    }
  };
</script>
```

:::

## Props

| Prop name              | Description | Type          | Values | Default                                                                                                                                                                                                                         |
| ---------------------- | ----------- | ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value                  |             | number\|array | -      | 0                                                                                                                                                                                                                               |
| min                    |             | number        | -      | 0                                                                                                                                                                                                                               |
| max                    |             | number        | -      | 100                                                                                                                                                                                                                             |
| step                   |             | number        | -      | 1                                                                                                                                                                                                                               |
| variant                |             | string        | -      | 'primary'                                                                                                                                                                                                                       |
| size                   |             | string        | -      |                                                                                                                                                                                                                                 |
| ticks                  |             | boolean       | -      | false                                                                                                                                                                                                                           |
| tooltip                |             | boolean       | -      | true                                                                                                                                                                                                                            |
| tooltipVariant         |             | string        | -      |                                                                                                                                                                                                                                 |
| rounded                |             | boolean       | -      | false                                                                                                                                                                                                                           |
| disabled               |             | boolean       | -      | false                                                                                                                                                                                                                           |
| lazy                   |             | boolean       | -      | false                                                                                                                                                                                                                           |
| customFormatter        |             | func          | -      |                                                                                                                                                                                                                                 |
| ariaLabel              |             | string\|array | -      |                                                                                                                                                                                                                                 |
| biggerSliderFocus      |             | boolean       | -      | false                                                                                                                                                                                                                           |
| rootClass              |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.rootClass', '')<br> return getCssClass(clazz, override, 'o-slider')<br>}                         |
| trackClass             |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.trackClass', '')<br> return getCssClass(clazz, override, 'o-slider-track')<br>}                  |
| fillClass              |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.fillClass', '')<br> return getCssClass(clazz, override, 'o-slider-fill')<br>}                    |
| roundedClass           |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.roundedClass', '')<br> return getCssClass(clazz, override, 'o-slider-rounded')<br>}              |
| draggingClass          |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.draggingClass', '')<br> return getCssClass(clazz, override, 'o-slider-dragging')<br>}            |
| disabledClass          |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.disabledClass', '')<br> return getCssClass(clazz, override, 'o-slider-disabled')<br>}            |
| biggerSliderFocusClass |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.biggerSliderFocusClass', '')<br> return getCssClass(clazz, override, 'o-slider-focus')<br>}      |
| thumbWrapperClass      |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.thumbWrapperClass', '')<br> return getCssClass(clazz, override, 'o-slider-thumb-wrapper')<br>}   |
| thumbClass             |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.thumbClass', '')<br> return getCssClass(clazz, override, 'o-slider-thumb')<br>}                  |
| thumbDraggingClass     |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.thumbDraggingClass', '')<br> return getCssClass(clazz, override, 'o-slider-thumb-dragging')<br>} |
| tickClass              |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.tickClass', '')<br> return getCssClass(clazz, override, 'o-slider-tick')<br>}                    |
| tickHiddenClass        |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.tickHiddenClass', '')<br> return getCssClass(clazz, override, 'o-slider-tick-hidden')<br>}       |
| tickLabelClass         |             | string        | -      | () => {<br> const override = getValueByPath(config, 'slider.override', false)<br> const clazz = getValueByPath(config, 'slider.tickLabelClass', '')<br> return getCssClass(clazz, override, 'o-slider-tick-label')<br>}         |

## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| dragstart  |      |
| dragend    |      |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

## Style

| CSS Variable                            | SASS Variable                     | Default                      |
| --------------------------------------- | --------------------------------- | ---------------------------- |
| --oruga-slider-background               | \$slider-background               | transparent                  |
| --oruga-slider-focus-margin             | \$slider-focus-margin             | -20px 0 -20px 0              |
| --oruga-slider-focus-padding            | \$slider-focus-padding            | 20px 0 20px 0                |
| --oruga-slider-margin                   | \$slider-margin                   | 1em 0                        |
| --oruga-slider-mark-size                | \$slider-mark-size                | 0.75rem                      |
| --oruga-slider-radius                   | \$slider-radius                   | \$base-border-radius         |
| --oruga-slider-rounded-borded-radius    | \$slider-rounded-borded-radius    | \$base-rounded-border-radius |
| --oruga-slider-thumb-background         | \$slider-thumb-background         | \$white                      |
| --oruga-slider-thumb-border             | \$slider-thumb-border             | 1px solid \$grey-light       |
| --oruga-slider-thumb-disabled-transform | \$slider-thumb-disabled-transform | scale(1)                     |
| --oruga-slider-thumb-radius             | \$slider-thumb-radius             | \$base-border-radius         |
| --oruga-slider-thumb-shadow             | \$slider-thumb-shadow             | none                         |
| --oruga-slider-thumb-to-track-ratio     | \$slider-thumb-to-track-ratio     | 2                            |
| --oruga-slider-thumb-transform          | \$slider-thumb-transform          | scale(1.25)                  |
| --oruga-slider-tick-background          | \$slider-tick-background          | \$grey-light                 |
| --oruga-slider-tick-radius              | \$slider-tick-radius              | \$base-border-radius         |
| --oruga-slider-tick-to-track-ratio      | \$slider-tick-to-track-ratio      | 0.5                          |
| --oruga-slider-tick-width               | \$slider-tick-width               | 3px                          |
| --oruga-slider-track-background         | \$slider-track-background         | \$grey-lighter               |
| --oruga-slider-track-border-radius      | \$slider-track-border-radius      | \$base-border-radius         |
| --oruga-slider-track-border             | \$slider-track-border             | 0px solid \$grey             |
| --oruga-slider-track-disabled           | \$slider-track-disabled           | 0.5                          |
| --oruga-slider-track-radius             | \$slider-track-radius             | \$base-border-radius         |
| --oruga-slider-track-shadow             | \$slider-track-shadow             | 0px 0px 0px \$grey           |