<template class="productCard-container">
    <div>


        <div class="temp" v-if="showDiv">testing IF <img src="http://astrologynewsservice.com/wp-content/uploads/2014/08/1240-305x260.png"/></div>
        <button @click="showDiv =!showDiv">toggle</button>
        <img src=""></img>
        <div class="card-fields">
            <h2>Product Name</h2>
            <span>Price</span>
        </div>
        <div>
            <h3>Details:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsum iure neque quisquam sint suscipit tenetur. Cupiditate eaque esse exercitationem minus molestiae mollitia numquam obcaecati officiis quidem quod, reprehenderit similique?
           </p>
            <a href="">click here for more details</a>
        </div>
        </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class ProductCard extends Vue {
 public showD;  public iv: boolean = true;
}
</script>

<style scoped lang="scss">
.productCard-container{

}
    p{
        text-align: justify;
    }
    a{
        padding: unset;
    }
    a:hover{
        color: #87ffc1;
        box-shadow: 0 12px 16px 0 rgba(197, 236, 255, 0.24), 0 17px 50px 0 rgba(107, 255, 53, 0.19);
    }

</style>
