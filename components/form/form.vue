<template>
    <FormRoundButton
        v-if="!openForm"
        :text="textForm"
        type="button"
        @click="openForm = !openForm"
    />

    <form action="submit" v-if="openForm" @submit.prevent="handleSubmit">
        <h3 class="form-title">
            Suggest Your own Integration
            <FormCloseButton @click="openForm = !openForm" />
        </h3>
        <label for="integration">Integration name:</label>
        <FormInput
            name="integration"
            placeholder="Type Web Service name here..."
            v-model="integrationState"
        />
        <label for="triggers">Triggers that you wanna have:</label>
        <FormInput
            name="triggers"
            placeholder="Type here triggers that you wanna use..."
            v-model="triggersState"
        />

        <FormRoundButton text="Submit" type="submit" />
    </form>
</template>

<script setup lang="ts">
const openForm = useState("openForm", () => false);
const sendedForm = useState("sendedForm", () => false);

const textForm = computed(() => {
    return sendedForm.value ? "Thanks!" : "Suggest your own";
});

const integrationState = useState("integrationState", () => "");
const triggersState = useState("triggersState", () => "");

const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (integrationState.value !== "" || integrationState.value !== "") {
        console.log("Отпарвляем данные из формы:");
        console.log("Integration name: " + integrationState.value);
        console.log("Triggers that you wanna have: " + triggersState.value);
        console.log("..и показываем какой-нибудь попап");

        handleReset();
        openForm.value = !openForm;
        sendedForm.value = true;
        setTimeout(() => (sendedForm.value = false), 2000);
    }
};

const handleReset = () => {
    integrationState.value = "";
    triggersState.value = "";
};
</script>

<style lang="scss" scoped>
.form-title {
    display: flex;
    align-items: center;
    gap: 16px;
    @include fontSize(18, 24);
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
    margin: 139px 0 39px;

    @include devices(mobile) {
        margin: 64px 0 24px;
        line-height: 120%;
        justify-content: space-between;
    }
}

label {
    @include fontSize(13, 16);
    font-weight: 400;
    line-height: 100%;
    display: inline-block;
    margin-bottom: 14px;
}
</style>
