<template class="productCard-container">
    <div>
        <img src=""></img>
        <div class="card-fields">
            <h1>Product Name</h1>
            <span>Price</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsum iure neque quisquam sint suscipit tenetur. Cupiditate eaque esse exercitationem minus molestiae mollitia numquam obcaecati officiis quidem quod, reprehenderit similique?
            <a href="">click here for more details</a></p>
        </div>

    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class ProductCard extends Vue {

}

</script>

<style scoped lang="scss">
.productCard-container{
    display:flex;
    div{
        display:block;
    }

}

</style>
