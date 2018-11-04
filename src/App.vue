<!-- Root component -->
<template>
    <!-- we have to have one element sround every thing -->
    <div id="app">
        <div class="filters-sideBar">
            <h1>{{work}}</h1>
            <div class="dropDown">
                <select name="" id="typeFilter" v-on:change="roomFilterByType">
                    <option value="Select room Type">Select room Type</option>
                    <option v-bind:vlue="type" v-for="type in uniqueTypes">{{type}}</option>
                </select>
                <select name="" id="sizeFilter" v-on:change="roomFilterBySize">
                    <option value="">select room Size</option>
                    <option v-bind:value="size" v-for="size in uniqueSizes">{{size}}</option>
                </select>
            </div>
            <div class="checkBoxes">

            </div>
        </div>
        <div class="container">
            <!--  Rooms List  -->
            <ul class="roomsList">
                <li class="room" v-for="room in rooms" v-show="(type==='' || type===room.type)&&(size===''||size===room.size)">
                    <!---->
                    <img v-bind:src="room.img" alt="">
                    <div class="Discription">
                        <div class="info">
                            <h2>FavoRoom</h2>
                            <p>{{room.info}}</p>
                            <p>{{room.type}}</p>
                        </div>
                        <button class="price-btn">{{room.price}}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./App.js"></script>
<style src="./AppStyle.css"></style>

<style>

</style>
