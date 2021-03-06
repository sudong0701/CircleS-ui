# `IndexBar` 索引栏组件
IndexBar 组件定义一个索引栏组件。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(active) | String & Number | 0 | 索引栏选中的下标。
| sortArr | Array | [] | 自定义索引栏数组。
| height | String & Number | '' | 索引栏的高度。
| color | String | '#07c160' | 索引栏选中的颜色。
| showToast | Boolean | true | 是否在点击索引栏时显示提示。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| scroll | Object | 索引页滚动时触发。
| change | active | 选中项改变时触发。

<!--
## Methods
None.

## Static Props
None.

## Static Methods
None.
-->

## Example
简单用法
```
<template>
    <div class="indexBar">
        <csIndexBar height="617px" v-model="active" @change="change">
            <csIndexBarItem index="A">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="B">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="C">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="D">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="E">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="F">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="G">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="H">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="I">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="J">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="K">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="L">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="M">
                <div v-for="(item, key) in 1" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="N">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="O">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="P">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="Q">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="R">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="S">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="T">
                <div v-for="(item, key) in 9" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="U">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="V">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="W">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="X">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="Y">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </csIndexBarItem>
            <csIndexBarItem index="Z">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </csIndexBarItem>
        </csIndexBar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 6
            }
        },
        methods: {
            change(index) {
                console.log(index)
            }
        }
    }
</script>

```
## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597048530334.gif)
