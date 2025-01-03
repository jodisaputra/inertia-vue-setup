<script setup>
import { ref } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

const props = defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});

const submit = () => {
    form.patch(route('profile.update'));
};
</script>

<template>
    <form @submit.prevent="submit" class="form-horizontal">
        <!-- Success Message -->
        <div v-if="status" class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h5><i class="icon fas fa-check"></i> Success!</h5>
            {{ status }}
        </div>

        <!-- Name Input -->
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                    <input id="name" type="text" class="form-control" v-model="form.name" required autofocus
                        :class="{ 'is-invalid': form.errors.name }">
                    <div v-if="form.errors.name" class="invalid-feedback">
                        {{ form.errors.name }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Email Input -->
        <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input id="email" type="email" class="form-control" v-model="form.email" required
                        :class="{ 'is-invalid': form.errors.email }">
                    <div v-if="form.errors.email" class="invalid-feedback">
                        {{ form.errors.email }}
                    </div>
                </div>

                <div v-if="mustVerifyEmail && user.email_verified_at === null" class="text-sm mt-2 text-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    Your email address is unverified.
                    <Link :href="route('verification.send')" method="post" as="button"
                        class="btn btn-link p-0 m-0 align-baseline text-primary">
                    Click here to re-send the verification email.
                    </Link>
                </div>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="form-group row">
            <div class="offset-sm-2 col-sm-10">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                    <i v-if="form.processing" class="fas fa-spinner fa-spin mr-2"></i>
                    <i v-else class="fas fa-save mr-2"></i>
                    Save Changes
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

.invalid-feedback {
    display: block;
}

.btn-link {
    text-decoration: none;
}

.btn-link:hover {
    text-decoration: underline;
}

.input-group-text {
    border-right: none;
}

.form-control {
    border-left: none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.fa-spinner {
    animation: spin 1s linear infinite;
}
</style>
