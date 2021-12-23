<template>
    <div class="step-container">
        <div class="step-img"><img :src="require(`@/assets/${stepImg}`)" alt="step"></div>
        <div class="step-info">
            <h1>{{stepNumber}}</h1>
            <p v-html="stepText"></p>
            <div class="link-item" v-if="step.altId">
                <button @click="changeStep">{{stepButtonText}}</button>
            </div>
            <div class="link-item" v-if="step.delText">
                <a :href="step.delHref">{{step.delText}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Step',
    props: {
        step: Object,
    },
    data() {
        return {
            stepNumber: this.step.id,
            stepText: this.step.text,
            stepImg: this.step.img,
            stepButtonText: "Didn't Show?"
        }
    },
    methods: {
        changeStep() {
            if (this.stepButtonText == "Didn't Show?") {
                this.stepNumber = this.step.altId;
                this.stepText = this.step.altText;
                this.stepImg = this.step.altImg;
                this.stepButtonText = "Go back";
            } else {
                this.stepNumber = this.step.id;
                this.stepText = this.step.text;
                this.stepImg = this.step.img;
                this.stepButtonText = "Didn't Show?";
            }
        }
    }
}
</script>

<style scoped>

.step-container {
    width: 100%;
    box-sizing: border-box;
    padding: 3rem;
    background-color: #fff;
    box-shadow: 0 1.4rem 8rem rgba(0,0,0,.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid #dee2e6;
    border-radius: .8rem;
    margin-bottom: 1rem;
}

.step-img {
    min-width: 30rem;
    max-width: 30rem;
}

.step-img img{
    width: 100%;
    object-fit: cover;
    display: block;
}

.step-info {
    padding: 20px;
}

.step-info h1{
    font-size: 2.5rem;
    margin: 1.5rem 0 2rem;
    color: #272727;
}

.step-info p{
    font-size: 1.4rem;
    margin-bottom: 3rem;
    color: #272727;
}

.link-item a, button{
    display: inline-block;
    background-color: #FF961B;
    color: white;
    padding: 1rem 2rem;
    margin: 0.3rem 0rem;
    border: none;
    border-radius: 100px;
    font-size: 1.3rem;
    text-align: center;
    cursor: pointer;
}

button:active {
    transform:scale(0.98);
    background: #face75;
}
@media screen and (max-width:1068px) {

    .step-img{
        min-width: 20rem;
        max-width: 20rem;
    }
}

@media screen and (max-width:868px) {
    .step-container {
        padding: 2rem;
    }
}

@media screen and (max-width:768px) {
    .step-container {
        flex-direction: column;
    }

    .step-img {
        min-width: 100%;
        min-height: 100%;
    }
}

</style>